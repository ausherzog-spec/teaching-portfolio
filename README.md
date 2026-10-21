# Austin Herzog — Teaching Portfolio

A static site (no build step). Files:

- `data.js` — **all content lives here.** Edit this to update the site.
- `index.html`, `styles.css`, `app.js` — layout and design; normally untouched.
- `Austin-Herzog-CV-October-2026.pdf` — public CV (home address and phone removed).
- `source/` — the .docx the public PDF was made from.

## Adding a new teaching experience

Open `data.js`, find `const TEACHING = [`, and paste a new line at the top:

```js
{ date: "2026-11", dateLabel: "Nov. 2026", title: "Session name", type: "lab", role: "Lead Facilitator", audience: "P2 students", setting: PCP },
```

`type` is one of `didactic`, `lab`, `discussion`, `precepting`, `assessment`, `coordination`.
To add a reflection and evidence, add a `details` object (see the 2024–25 entries for examples):

```js
details: { summary: "...", reflection: "...", strengths: "...", growth: "...", feedback: "...",
           evidence: [{ label: "Preceptor evaluation (PDF)", url: "files/my-eval.pdf" }] }
```

The headline counts, academic-year grouping, and filters update automatically.

## Updating the CV

Replace the PDF, then update `cv` and `cvUpdated` in `PROFILE` at the top of `data.js`.

## Previewing locally

```bash
python3 -m http.server 8765 --directory ~/teaching-portfolio
```

Then open http://localhost:8765.

## Publishing (free)

GitHub Pages: create a public repo, upload these files, then Settings → Pages → Deploy from branch `main` / root.
Netlify: drag this folder onto https://app.netlify.com/drop.

Evidence files live in `files/`. Originals with student identifiers are kept locally in `private-originals/` (git-ignored, never published).
