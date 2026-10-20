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

Production uses the existing `gh-pages` branch at its root and the custom
domain `jackliu.site`. To publish a new build with existing Git credentials:

```sh
npm run deploy
```

The deployment script builds for `/`, verifies the domain, clones the current
`gh-pages` branch into a temporary directory, replaces only its generated files,
commits the result and pushes without force. The branch history is preserved.
GitHub Pages must use **Deploy from a branch > gh-pages > / (root)**.

`public/CNAME` preserves the custom domain in each build. The prepared Actions
workflow in `docs/github-pages-workflow.yml` is optional and inactive. The
current token cannot write `.github/workflows/`; publishing through the existing
branch avoids requiring expanded token permissions. If Actions is enabled in
future, switch the Pages source accordingly and retain the `/` base path.

### Domain and DNS

The owner re-registered `jackliu.site` at GoDaddy on 20 October 2026, with an
expiry date of **20 October 2027**. Auto-renewal was disabled at the owner's
explicit request; renewal must be handled manually before expiry.

GitHub Pages is already configured with `jackliu.site` as its custom domain.
Use these DNS records at GoDaddy:

| Type | Name | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | dracarys55.github.io |

Verify DNS, the Pages deployment and HTTPS after publishing. DNS and certificate
provisioning may take time. The former `www.jackliu.info` URL is no longer used.

See [GitHub Pages publishing sources](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site),
[custom domain setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
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
The owner confirmed on 20 October 2026 that the Lang LIVE role is still current.
Validate the remaining dates and company names, and add specific recent
achievements. Performance percentages were not
assigned to an employer without confirmation. Weekly part-time hours remain
unspecified. Remove the PDF's draft footer only after content approval.

Screenshots document past projects. They are not presented as working product
demos; unavailable product URLs and placeholder links have been removed.
