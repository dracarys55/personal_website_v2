# Jack Liu - Frontend Portfolio

Bilingual (English / Traditional Chinese) portfolio with selected projects,
experience, a downloadable English resume, theme preferences and contact links.
Built with React, React Router and Vite. Original portfolio based on
[ubaimutl's react-portfolio](https://github.com/ubaimutl/react-portfolio);
the original license is retained.

## Local development

Use Node 24 LTS and npm.

```sh
npm ci
npm start
npm run build
npm run preview
```

The production output is `build/`. No private keys or email-service credentials
are needed. The contact form opens a draft in the visitor's configured email
application; it does not send mail from the website.

## GitHub Pages

The prepared workflow is `docs/github-pages-workflow.yml`. The current GitHub
token cannot write `.github/workflows/` because it lacks workflow permission,
so this file is deliberately inactive. A repository owner can add its contents
as `.github/workflows/pages.yml` through GitHub's editor with an appropriately
authorized account. No access permissions were expanded automatically.

Once activated, the workflow builds pull requests without deploying them.
Pushes to `main` and manually dispatched runs build and deploy with GitHub Pages
Actions. Before the first deployment, select **Settings > Pages > Build and
deployment > Source > GitHub Actions**.

### Restore using the GitHub URL

1. Clear the old custom domain in Settings > Pages if `jackliu.site` is still
   configured but cannot resolve. This is a hosting setting, separate from code.
2. Keep the default workflow base path `/personal_website_v2/`.
3. Activate the prepared workflow, merge the reviewed change and verify the deployment at
   `https://dracarys55.github.io/personal_website_v2/`.

### Reconnect jackliu.site

As of 20 October 2026, `jackliu.site` did not resolve in a DNS lookup. Code
changes cannot renew a domain or repair records at its registrar.

1. Confirm domain ownership, registration status and DNS access with the owner.
2. Configure the registrar's records according to GitHub's current instructions.
3. Set repository Actions variable `SITE_BASE_PATH` to `/` before deploying to
   the custom domain, and configure `jackliu.site` in Settings > Pages.
4. Verify DNS, the deployed site and HTTPS before sharing the address.

Do not leave the project-path base configured when switching to a custom domain.
The old `www.jackliu.info` homepage and legacy deployment scripts are removed.

See [GitHub Pages publishing sources](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site),
[custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
and [Vite static deployment](https://vite.dev/guide/static-deploy.html).

To reproduce the project URL locally:

```sh
SITE_BASE_PATH=/personal_website_v2/ npm run build
npm run preview
```

Open `/personal_website_v2/` on the preview server. The build also creates
`404.html` to load the app for direct links. GitHub Pages still returns HTTP 404
for those deep links; in-app navigation works normally. There is no server-side
rendering or server rewrite on GitHub Pages.

## Content maintenance

- `src/assets/i18n/en.json` and `zh-TW.json`: matching bilingual copy.
- `src/Portfolio.jsx`: navigation, verified source links and page components.
- `src/portfolio.css`: layout, responsive styles and themes.
- `public/Jack-Liu-Resume.pdf`: English resume download.
- `docs/resume.md`: editable resume copy.

### Review before publishing or applying

The resume is a **draft**, based on the public profile and existing portfolio.
Confirm that the Lang LIVE role is still current, validate dates and company
names, and add specific recent achievements. Performance percentages were not
assigned to an employer without confirmation. Weekly part-time hours remain
unspecified. Remove the PDF's draft footer only after content approval.

Screenshots document past projects. They are not presented as working product
demos; unavailable product URLs and placeholder links have been removed.
