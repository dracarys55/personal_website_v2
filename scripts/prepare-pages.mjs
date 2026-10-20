import { readFile, writeFile } from 'node:fs/promises';

// Keep direct links working on Pages, both at the repository path and a custom domain.
const index = await readFile(new URL('../build/index.html', import.meta.url), 'utf8');
await writeFile(new URL('../build/404.html', import.meta.url), index);
await writeFile(new URL('../build/.nojekyll', import.meta.url), '');
