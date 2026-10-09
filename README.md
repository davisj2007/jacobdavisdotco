# jacobdavis.co

Personal site of Jacob Davis. Built with Jekyll and published by GitHub Pages from the `site/` folder. Every push to `main` that touches `site/` rebuilds the site in about a minute.

## How to edit

You can make every edit on github.com: open the file, click the pencil icon, change the text, then click **Commit changes**. To see the build, open the **Actions** tab. A green check means the site is live. A red X means the edit broke the build, usually because of YAML indentation; the log names the file and line.

### Where each piece of text lives

| To change | Edit this file |
|---|---|
| Home page headline, intro, buttons, Writing block | `site/index.md` (the lines between the two `---`) |
| Home page "Track record" numbers | `site/_data/proof_points.yml` |
| About page intro, photo, Outside work, Education | `site/about.md` (top section) |
| About page "How I think about analytics" | `site/about.md` (text below the second `---`) |
| Career timeline (About **and** Work pages) | `site/_data/career.yml` |
| Speaking page intro, headings, photos, booking text | `site/speaking.md` (top section) |
| Speaking "For universities" paragraphs | `site/speaking.md` (text below the second `---`) |
| Speaking topics and talk titles (and the three home page cards) | `site/_data/topics.yml` |
| Past talks | `site/_data/talks.yml` |
| Speaking formats | `site/_data/formats.yml` |
| Speaker kit bios | `site/_data/bios.yml` |
| Work page intro and headings | `site/work.md` (top section) |
| Work page Advisory paragraph | `site/work.md` (text below the second `---`) |
| Case studies on the Work page (show, hide, reorder) | `site/_data/case_studies.yml` |
| Contact email, LinkedIn, tagline, footer text, copyright year | `site/_data/site.yml` |
| Navigation links | `site/_data/navigation.yml` |
| Page titles and search descriptions | `title:` and `description:` at the top of each page's `.md` file |

### Common edits

**Add a past talk.** In `site/_data/talks.yml`, copy an existing block that starts with `- label:`, paste it where you want it in the list, and change the text. You can leave out `points` and `figure` entirely.

**Hide a case study.** In `site/_data/case_studies.yml`, change `show: true` to `show: false`. To reorder case studies, move the whole block.

**Feature a different topic on the home page.** In `site/_data/topics.yml`, add `home: true` and a `link_text:` to the topic you want, and remove `home: true` from another. Keep three.

**Change a photo.** Upload the new image to `site/assets/` (Add file, then Upload files), then update the file name in the page's `.md` file. Keep the alt text accurate.

### Rules that keep the build working

- In `.yml` files and the top section of `.md` files, keep the indentation of the line you copied. Use spaces, never tabs.
- Put text in double quotes. If the text itself contains a double quote, use single quotes around it instead.
- Text below the second `---` in a `.md` file is Markdown. A blank line starts a new paragraph, and `[link text](https://...)` makes a link.
- Site copy uses no em dashes.

### Files that need design help

`site/_layouts/`, `site/_includes/`, `site/styles.css`, and `site/site.js` hold the layout, styling, and behavior. The charts on the Speaking and Work pages are in `site/_includes/figures/`, and their numbers are written into the markup, so changing a chart means editing that file.

## Redirects

`services.html` and `prism-methodology.html` from the old site redirect to `work.html`. They are listed under `redirect_from` in `site/work.md`.

## Building locally (optional)

Not required for editing. With Ruby installed: `gem install github-pages`, then `jekyll serve --source site`, then open http://localhost:4000.
