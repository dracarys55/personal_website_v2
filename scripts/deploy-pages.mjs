import { execFileSync } from 'node:child_process';
import { cp, mkdtemp, readdir, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const git = (args, cwd = root) => execFileSync('git', args, { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'inherit'] }).trim();
const remote = git(['remote', 'get-url', 'origin']);
if (!/^(https:\/\/github\.com\/dracarys55\/personal_website_v2(?:\.git)?|git@github\.com:dracarys55\/personal_website_v2(?:\.git)?)$/.test(remote)) {
  throw new Error('Deployment is restricted to dracarys55/personal_website_v2.');
}
const source = git(['rev-parse', '--short', 'HEAD']);
execFileSync('npm', ['run', 'build'], { cwd: root, env: { ...process.env, SITE_BASE_PATH: '/' }, stdio: 'inherit' });
const output = path.join(root, 'build');
if ((await readFile(path.join(output, 'CNAME'), 'utf8')).trim() !== 'jackliu.site') {
  throw new Error('Missing or unexpected deployment domain.');
}
const scratch = await mkdtemp(path.join(tmpdir(), 'jack-portfolio-pages-'));
try {
  git(['clone', '--single-branch', '--branch', 'gh-pages', remote, scratch]);
  // Replace only generated files in this temporary checkout; retain branch history.
  for (const name of await readdir(scratch)) {
    if (name !== '.git') await rm(path.join(scratch, name), { recursive: true, force: true });
  }
  for (const name of await readdir(output)) await cp(path.join(output, name), path.join(scratch, name), { recursive: true });
  git(['add', '-A'], scratch);
  if (!git(['status', '--porcelain'], scratch)) {
    console.log('Published files are already up to date.');
  } else {
    git(['commit', '-m', `Deploy portfolio from ${source}`], scratch);
    git(['push', 'origin', 'HEAD:gh-pages'], scratch);
    console.log('Published to gh-pages. Check GitHub Pages deployment status.');
  }
} finally {
  await rm(scratch, { recursive: true, force: true });
}
