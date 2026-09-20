# hzhen.me

Personal research website of **Hao Zhen** — Implantable BCI Systems & Translational Neuroengineering.

A static, single-page site built with [Astro](https://astro.build) and TypeScript,
deployed on Cloudflare Pages. No backend, no database, no client-side JavaScript,
no analytics, no cookies, no third-party requests of any kind.

---

## Principles

These are deliberate constraints, not omissions. Please preserve them when editing.

| Constraint | Why |
| --- | --- |
| No web fonts | Typography uses the system serif/sans/mono stacks. Nothing is fetched from a font CDN, so the site renders identically and instantly from any network — including mainland China, where Google Fonts is unreachable. |
| No client JavaScript | The only `<script>` in the output is a `application/ld+json` block of structured data, which is never executed. Navigation, dark mode, and layout are pure HTML and CSS. |
| No third-party domains | Every asset is same-origin. Nothing to block, nothing to leak, nothing to break. |
| No tracking | No analytics, no cookies, no pixels, no consent banner needed. |
| Content separated from layout | All prose lives in `src/data/*.ts`. Components read from it; they never hardcode copy. |

---

## Getting started

Requires Node.js **22.12.0 or newer** (Astro 7). The repository pins `22` in `.nvmrc`.

```bash
npm install      # install dependencies
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build into dist/
npm run preview  # serve the built dist/ locally
npm run check    # TypeScript + Astro diagnostics
```

---

## Project structure

```
hzhen.me/
├── astro.config.mjs        Site URL, build format, stylesheet handling
├── package.json
├── tsconfig.json
├── public/                 Copied verbatim into the build output
│   ├── _headers            Cloudflare Pages response headers (CSP, caching)
│   ├── apple-touch-icon.png
│   ├── favicon.ico
│   ├── favicon.svg         Monogram placeholder — replace with a real mark
│   ├── og.png              1200×630 social preview card
│   ├── robots.txt
│   └── site.webmanifest
└── src/
    ├── components/
    │   ├── PublicationList.astro    Renders publications, or the placeholder line
    │   ├── ResearchDirections.astro Research directions list
    │   ├── ResearchPillar.astro     One numbered research area
    │   ├── Section.astro            Sticky label + content, used by every section
    │   ├── ServiceEntry.astro       One professional service appointment
    │   ├── SiteFooter.astro
    │   ├── SiteHeader.astro
    │   └── WorkEntry.astro
    ├── data/               ← everything you will normally edit lives here
    │   ├── about.ts        Biography paragraphs
    │   ├── publications.ts Publications and preprints (empty by design)
    │   ├── research.ts     The three research pillars + research directions
    │   ├── service.ts      Professional service appointments (not employment)
    │   ├── site.ts         Name, role, hero statement, nav, links, SEO, contact
    │   └── work.ts         Selected work, plus education (structured data only)
    ├── layouts/
    │   └── BaseLayout.astro  <head>, metadata, Person structured data, page shell
    ├── pages/
    │   ├── 404.astro
    │   ├── index.astro       Section order for the main page
    │   └── sitemap.xml.ts    Generates /sitemap.xml at build time
    └── styles/
        └── global.css        Design tokens and all layout. One file, commented.
```

---

## Where to edit what

Almost every change is a one-line edit inside `src/data/`. You should rarely need
to touch a component.

| To change… | Edit | Notes |
| --- | --- | --- |
| **Biography** | `src/data/about.ts` | An array of paragraphs. Add or remove entries freely; the layout adapts. |
| **Research areas** | `src/data/research.ts` → `researchAreas` | Title, description, topics, and the framing question. The `01 / 02 / 03` numbering comes from array order — reorder the array and the numbers follow. |
| **Research directions** | `src/data/research.ts` → `researchDirections` | Deliberately separate from publications so work in progress is never presented as a published result. |
| **Publications** | `src/data/publications.ts` | See below. |
| **Links (ORCID, GitHub, LinkedIn)** | `src/data/site.ts` → `externalLinks` | See below. |
| **Contact** | `src/data/site.ts` → `contact` | See below. |
| **Hero statement / field / name** | `src/data/site.ts` → `site` | `site.field` is the line under the name. It names the *field*, not a job title — keep it that way. |
| **Page title, meta description, keywords** | `src/data/site.ts` → `seo` | |
| **Selected work** | `src/data/work.ts` → `work` | Intentionally not a résumé — one restrained sentence per entry. Corporate job titles are deliberately not modelled; see below. |
| **Education** | `src/data/work.ts` → `education` | Not rendered on the page; the degrees are stated in the About biography. The data stays live because it feeds `alumniOf` in the structured data. |
| **Professional service** | `src/data/service.ts` | Appointments, not employment. Kept out of the structured data; see below. |
| **Section order or headings** | `src/pages/index.astro` | |
| **Colours, type scale, spacing** | `src/styles/global.css` | All tokens are defined at the top under `:root`. |

### Adding your first publication

`src/data/publications.ts` exports an empty `publications` array. While it is empty,
**the Publications section and its navigation link are not rendered at all** — no
heading, no "in preparation" line, nothing that draws attention to an absence. Adding
the first entry restores the section and the nav link automatically; there is no flag
to flip. The gating lives in two places, both driven by `publications.length`:
`nav` in `src/data/site.ts`, and the Publications section in `src/pages/index.astro`.

The `Publication` type is already defined with every field you will need:

```ts
export const publications: Publication[] = [
  {
    title: 'A system-level characterisation of chronic intracortical interface stability',
    authors: ['Hao Zhen', 'A. N. Other'],   // your own name is bolded automatically
    venue: 'Journal of Neural Engineering',
    year: 2027,
    preprint: false,
    links: {
      doi: '10.1088/1741-2552/xxxxxxx',      // bare DOI or full URL, both work
      preprint: 'https://www.biorxiv.org/content/10.1101/xxxxxx',
      code: 'https://github.com/hzhen0219/example',
      paper: 'https://example.org/paper.pdf',
    },
  },
];
```

Only `title`, `authors`, and `year` are required. Link buttons render only for the
fields you actually provide. A commented copy of this example sits at the bottom of
the file.

### Job titles and professional service

Two content boundaries are enforced in the code rather than left to convention.

**Selected Work carries no job titles.** `WorkEntry` has no `role` field at all, so
there is nothing to render. The section communicates organisation, technical area, and
scope — what the work *was*, not what rank it carried. This keeps the identity portable
across employers. If you ever want a title on the page, add the field back deliberately
rather than by accident.

**Professional service is not employment.** `src/data/service.ts` is a separate model
from `src/data/work.ts` and is rendered in its own section. Critically, it is *not*
added to the `affiliation` array in the Person structured data: schema.org
`affiliation` reads as an employer relationship to search engines, which would
misrepresent a volunteer institutional review appointment. `BaseLayout.astro` carries a
comment to that effect — please keep service out of it.

### Adding LinkedIn

`src/data/site.ts` has a LinkedIn entry with an empty `href`:

```ts
{ label: 'LinkedIn', href: '', description: 'LinkedIn profile' },
```

Paste your profile URL into `href`. It will then appear automatically in the header,
the footer, the contact block, and the `sameAs` array of the Person structured data.
While `href` is empty the link is omitted everywhere rather than rendered dead — no
fake URLs are ever shipped.

### Switching contact to email

Once a custom address exists (for example `hao@hzhen.me`), set it in `src/data/site.ts`:

```ts
export const contact = {
  email: 'hao@hzhen.me',
  note: 'For research and professional inquiries, connect through ORCID or GitHub.',
} as const;
```

The contact block switches to a `mailto:` link automatically. Leave `email` empty to
keep the current wording.

### Replacing the favicon and social card

- `public/favicon.svg` — an "HZ" monogram placeholder. Replace with a real mark.
- `public/favicon.ico`, `public/apple-touch-icon.png` — 16/32px and 180px raster fallbacks.
- `public/og.png` — the 1200×630 card shown when the site is shared. Keep those exact
  dimensions; they are declared in `og:image:width` / `og:image:height`.

---

## Deploying to Cloudflare Pages

The domain `hzhen.me` is registered through Cloudflare, so DNS records are created
for you when you attach the custom domain.

### 1. Connect the GitHub repository

1. Sign in to the [Cloudflare dashboard](https://dash.cloudflare.com).
2. Go to **Workers & Pages → Create → Pages → Connect to Git**.
3. Authorise Cloudflare to access GitHub if prompted, and grant it access to the
   `hzhen.me` repository.
4. Select the `hzhen.me` repository and click **Begin setup**.

### 2. Build settings

| Field | Value |
| --- | --- |
| Project name | `hzhen-me` (this only affects the temporary `*.pages.dev` URL) |
| Production branch | `main` |
| Framework preset | **Astro** |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | *(leave blank)* |

Optionally set an environment variable `NODE_VERSION` = `22` to pin the build image's
Node version.

Click **Save and Deploy**. The first build takes about a minute and publishes to
`https://<project>.pages.dev`. Confirm that URL renders before attaching the domain.

### 3. Connect `hzhen.me`

1. Open the Pages project → **Custom domains** → **Set up a custom domain**.
2. Enter `hzhen.me` and continue.
3. Because the zone is already on your Cloudflare account, Cloudflare adds the DNS
   record itself. Approve it.
4. Wait for the status to move from *Initializing* to **Active** (usually a few
   minutes; certificate issuance can occasionally take longer).

### 4. Connect `www.hzhen.me`

Repeat step 3 with `www.hzhen.me`.

Add it as a custom domain even though it will only redirect. Cloudflare issues a TLS
certificate for each custom domain, and `www` needs its own certificate — the browser
completes the TLS handshake *before* it ever sees a redirect. Without it,
`https://www.hzhen.me` shows a certificate warning instead of redirecting.

### 5. Redirect `www.hzhen.me` → `hzhen.me`

Redirect Rules run at the edge, before Pages serves anything.

1. Go to the **hzhen.me** zone (not the Pages project) → **Rules → Redirect Rules**
   → **Create rule**.
2. Name it `www to apex`.
3. **When incoming requests match** → *Custom filter expression*:
   - Field `Hostname`, Operator `equals`, Value `www.hzhen.me`
   - (Expression editor equivalent: `http.host eq "www.hzhen.me"`)
4. **Then** → *URL redirect*:
   - Type: **Dynamic**
   - Expression: `concat("https://hzhen.me", http.request.uri.path)`
   - Status code: **301**
   - Tick **Preserve query string**.
5. Deploy.

### 6. Confirm HTTPS

1. In the **hzhen.me** zone → **SSL/TLS → Overview**, set encryption mode to **Full (strict)**.
2. Under **SSL/TLS → Edge Certificates**, enable **Always Use HTTPS**.
3. Optionally enable **HSTS**. The site already sends a
   `Strict-Transport-Security` header from `public/_headers`; enabling it at the zone
   level covers redirects that never reach Pages. Only enable HSTS once you are sure
   the domain will stay on HTTPS — it is hard to undo.

### 7. Verify the production deployment

```bash
# Apex serves the site over HTTPS
curl -sSI https://hzhen.me | head -n 1           # expect: HTTP/2 200

# www redirects to the apex, preserving the path
curl -sSI https://www.hzhen.me/#about | head -n 5 # expect: 301 + location: https://hzhen.me/

# HTTP is upgraded to HTTPS
curl -sSI http://hzhen.me | head -n 5             # expect: 301 → https://hzhen.me/

# Security headers are applied
curl -sSI https://hzhen.me | grep -i -e content-security-policy -e strict-transport

# Crawlable metadata resolves
curl -sS https://hzhen.me/robots.txt
curl -sS https://hzhen.me/sitemap.xml
curl -sSI https://hzhen.me/og.png | head -n 1     # expect: HTTP/2 200
```

Then check by eye:

- The page renders on a phone and a desktop browser.
- The padlock shows a valid certificate for both `hzhen.me` and `www.hzhen.me`.
- Sharing the URL in a messaging app or on LinkedIn shows the `og.png` card.
  Facebook's [Sharing Debugger](https://developers.facebook.com/tools/debug/) and
  LinkedIn's [Post Inspector](https://www.linkedin.com/post-inspector/) will force a
  re-scrape if a stale preview is cached.
- [Google Rich Results Test](https://search.google.com/test/rich-results) detects the
  `Person` structured data.

Every push to `main` triggers a new production deployment. Pull requests get their own
preview URL automatically.

---

## Notes

- **Astro telemetry.** Astro's CLI collects anonymous *build-time* usage data on your
  machine. It has nothing to do with the deployed site, which ships no tracking at all.
  Run `npx astro telemetry disable` to opt out.
- **Content Security Policy.** `public/_headers` sets a strict CSP. Because it
  disallows inline styles, `astro.config.mjs` pins `build.inlineStylesheets: 'never'`.
  If you ever add inline `<style>` or `<script>`, relax the policy to match — or
  better, keep them out.
- **Licensing.** No open-source licence is included. The site's text and design are
  © Hao Zhen; add a `LICENSE` file if you want to grant others rights to the code.
