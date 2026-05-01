# The Rainbow Schoolhouse Website

Static site for [therainbowschoolhouse.com](https://therainbowschoolhouse.com), exported from WordPress via the Simply Static plugin.

## Serving locally

```bash
cd site
python3 -m http.server 8080
```

Then open [http://localhost:8080](http://localhost:8080) in your browser.

## Updating copy

All content is in static HTML files under `site/`. Edit the relevant file directly, then redeploy.

| Section | File |
|---|---|
| Homepage | `site/index.html` |
| Staff profiles | `site/profile/<name>/index.html` |
| Contacts | `site/contacts/index.html` |


> **Note:** This site was exported from WordPress via Simply Static. If the live WordPress site is ever re-exported, manual edits here will be overwritten. Make copy changes in WordPress first if that workflow is still active.
