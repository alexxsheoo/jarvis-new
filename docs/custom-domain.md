# justjarvis.com custom domain

## Hosting configuration

The marketing website is a static Next.js export published from `preview/gh-pages` to the `gh-pages` branch of `alexxsheoo/jarvis-new`. The export has no base path and serves assets and routes from the domain root. `public/CNAME` must contain `justjarvis.com`; copy the generated `out/CNAME` on every publication.

The main branch retains the regular Next.js application architecture. Bring new main-branch changes into the export source before building and publishing. Do not restore the old `/jarvis-new` base path for the custom domain.

## GoDaddy records

The owner is updating DNS manually. Use the default TTL or one hour. Replace the existing root A record and www CNAME with these website records:

| Type | Host | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | alexxsheoo.github.io |

Keep other DNS records, including app and email records. Check for conflicting root/www AAAA records or domain forwarding. GitHub Pages should have `justjarvis.com` configured as its custom domain before the DNS switch.

Before the switch, DNS observed on September 11, 2026 was root A `162.159.140.166` and www CNAME `sites.ludicrous.cloud`. These are recorded for rollback; restoring them would require the former GHL website to remain available. Nameservers were `ns13.domaincontrol.com` and `ns14.domaincontrol.com`.

The separate CRM login remains `https://app.justjarvis.com/`. Its observed CNAME was `whitelabel.ludicrous.cloud`; do not change it for this marketing-site deployment.

## Publishing and verification

1. Run `npm run lint`, `npx tsc --noEmit`, and `npm run build` in the export source.
2. Check all exported local paths, checkout links, video/poster paths, fonts, integration icons, sitemap, and CNAME. There must be no `/jarvis-new` asset or route prefix.
3. Publish the generated export to gh-pages while preserving Git metadata and `.nojekyll`. Include the generated CNAME file.
4. Confirm GitHub Pages builds the exact published commit and uses `justjarvis.com` as its custom domain.
5. After the owner updates DNS, confirm root A records and www CNAME resolve correctly. Check the public homepage, checkout, custom-build request, legal pages, videos, and sign-in link. Confirm HTTPS and the www redirect once GitHub issues the certificate; provisioning may take up to 24 hours.

The September 11 root-domain build passed lint, TypeScript, and production build checks. All 36 HTML pages and 1,859 local references were checked with no missing paths. The current payment links, sign-in link, integration labels, custom-build form route, draft legal noindex tags, and sitemap were also checked.

A custom domain does not connect form delivery. The Custom Builds form retains its unavailable notice until the Jarvis submission workflow is connected.

## References

- [GitHub Pages custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [GoDaddy A records](https://www.godaddy.com/help/edit-an-a-record-19239)
