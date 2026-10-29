# Lee Thorley Construction — website

The one-page website for Lee Thorley Construction (renovations and new builds,
North Shore & Vancouver). It is built with [Astro](https://astro.build), which
turns the files in `src/` into a plain, fast HTML page. There is no database
and nothing to log in to.

## Run it on your computer

You need [Node.js](https://nodejs.org) version 22.22 or newer.

```bash
npm install      # first time only: downloads Astro
npm run dev      # starts a live preview at http://localhost:4321
```

Leave `npm run dev` running and the browser refreshes every time you save a file.
Press `Ctrl + C` to stop it.

Other commands:

```bash
npm run build    # makes the finished site in the dist/ folder
npm run preview  # shows that finished site at http://localhost:4321
```

## Where to change things

| What you want to change | File |
| --- | --- |
| Phone, email, address, hours, Facebook link | `src/data/site.js` (top of the file) |
| Services, story blocks, promise lines, testimonials, form project types | `src/data/site.js` (the lists further down) |
| Page title and Google description | `src/data/site.js` → `seo` |
| Colours, fonts, spacing | `src/styles/global.css` → the `:root` block at the top |
| Headings and paragraphs written into the page | `src/pages/index.astro` |
| Logo | replace `src/assets/logo.png` and `src/assets/logo-white.png` (keep the names) |
| Browser tab icon / sharing image | `public/favicon.png`, `public/apple-touch-icon.png`, `public/og-image.png` |

The styles file is split into sections with comment headers in the same order
as the page (Header, Hero, Statement, Services, About, Promise, Testimonials,
Contact, Footer, Mobile bar), so you can find the bit you want quickly.

## The contact form

Right now `FORM_ENDPOINT` in `src/data/site.js` is empty (`''`). In that case,
pressing **Request a free estimate** opens the visitor's own email app with a
message already written to thorleyconstruction@gmail.com, and the page shows
the thank-you message. This works with no setup, but it relies on the visitor
having an email app.

To receive submissions straight to your inbox instead (recommended):

1. Sign up for free at [formspree.io](https://formspree.io) and create a new form
   using thorleyconstruction@gmail.com.
2. Formspree gives you an address like `https://formspree.io/f/abcdwxyz`.
3. Paste it into `src/data/site.js`:
   ```js
   export const FORM_ENDPOINT = 'https://formspree.io/f/abcdwxyz';
   ```
4. Save, commit and push (see below). The form now sends quietly in the
   background and shows the thank-you message. If sending fails, visitors see
   a short message asking them to call.

There is a hidden spam trap field (`_gotcha`) that Formspree understands.

## Put it online (Vercel)

1. Push this repository to GitHub.
2. At [vercel.com](https://vercel.com), choose **Add New → Project** and import it.
   Vercel recognises Astro automatically; just press **Deploy**.
3. Every push to the main branch updates the live site.

**To confirm:** the real web address. `astro.config.mjs` currently uses the
placeholder `https://leethorleyconstruction.com`. Once the domain is decided,
change the `site:` line there (it is used for Google and link previews).

## Undo a change

Every change is saved as a "commit" in git, so nothing is lost.

```bash
git log --oneline          # list recent changes, newest first
git revert <commit-id>     # make a new commit that undoes that one
git push                   # publish the undo
```

If you have edited a file but not committed yet and want to throw the edit away:

```bash
git restore path/to/file
```
