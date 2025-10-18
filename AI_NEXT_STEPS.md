# AI NEXT STEPS — Gallery-Photo

Date: 2025-10-18
Branch: Willsen

This file records the current state from my pairing session and the exact next steps to continue the Pokedex feature.

---

## What we discussed / files I showed or created
- I explained the project structure and suggested changes to make a persistent navbar and a Pokedex page.
- Files I showed you (content was provided for you to copy/paste):
  - `src/Gallery/Page/Home.jsx` (suggested simple home page content)
  - `src/Gallery/Page/Pokedex.jsx` (full component JSX was created/shown during the session)
  - `src/Gallery/Page/pokedex.css` (I showed full CSS; you asked me to show CSS only when requested)
  - `src/Gallery/Page/PokemonDetail.jsx` (not yet created; planned)
  - `src/App.jsx` edits (I showed the exact edit to make `Navbar` persistent and wire routes — not applied unless you asked)
  - `src/Gallery/Page/GalleryPage.jsx` — we discussed a small localStorage seed change (I provided the snippet to seed Pokémon into `galleryImages`)

Note: Some edits were made in-session and some were later reverted/changed; check the files above to confirm your working copy before continuing.

---

## Current recommended next steps (one at a time)
Follow these in order. I will only make changes when you explicitly tell me to "Apply" or ask me to show the exact code to paste.

1) Wire routing & navbar (recommended next step)
   - Edit `src/App.jsx` to render `Navbar` outside `<Routes>` and add routes:
     - `/` -> `Home` (create `Home.jsx` if missing)
     - `/pokedex` -> `Pokedex` (we already prepared `Pokedex.jsx`)
     - `/detail/:id` -> `ImageDetail` or `PokemonDetail`
   - I can show the exact `App.jsx` file content to paste when you say "Show App edit".

2) Create Pokemon detail page
   - Add `src/Gallery/Page/PokemonDetail.jsx` or adapt `ImageDetail.jsx` so clicking a Pokedex card shows full stats and a Back button to `/pokedex`.
   - I can show full code for that page on request.

3) Create/confirm CSS
   - If `src/Gallery/Page/pokedex.css` is not yet created, add the CSS I showed (responsive grid and controls).
   - If you prefer different spacing/col widths, tell me and I will adjust.

4) (Optional) Clean up GalleryPage and localStorage
   - If you want the gallery and pokedex to share the same detail route, ensure IDs are consistently numeric.
   - Optionally seed `galleryImages` from `src/assets/asset.js` if you want built-in Pokemon visible in the gallery. I provided the snippet to add into `GalleryPage.jsx`.

5) Remove/Archive `Dashboard.jsx`
   - If `Dashboard.jsx` is not part of your desired site, you can remove it or rename it to `Dashboard.old.jsx` so you keep it for reference.

6) Run and test
   - From project root (Windows PowerShell):

```powershell
npm install
npm run dev
```

Open the printed localhost URL (usually http://localhost:5173) and test these pages:
- `/` (Home)
- `/pokedex` (Pokedex)
- Click a card -> `/detail/:id` (detail page)

---

## How to resume with me next time
When you come back, tell me one of these and I'll continue from there:
- "Continue: wire App.jsx" — I'll show or apply the App.jsx edit.
- "Continue: create detail page" — I'll show/create `PokemonDetail.jsx`.
- "Continue: apply gallery seed" — I'll show/apply the seed snippet into `GalleryPage.jsx`.
- Or say "Show status" and I'll scan the workspace and produce an updated todo list and diffs.

If you'd like me to make any of the edits right now, say exactly which step and whether I should "Show" the code or "Apply" the edit.

---

Notes
- I don't retain memory between sessions here — the repo files are the single source of truth. Keep this file or a similar note in the repo so it's easy to pick up next time.

End of file.
