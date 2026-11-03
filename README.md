# AURELLE Invitations — website (v1, static)

A bilingual (Arabic default / English) boutique digital-invitation site. Pure HTML + CSS + vanilla JavaScript. No build step, no backend, no paid services.

## Folder structure

```
aurelle/
├── index.html            ← the page (structure + SVG ornament sprite)
├── README.md             ← this guide
└── assets/
    ├── css/style.css     ← all styling (colors are CSS variables at the top)
    └── js/app.js         ← translations, template data, gallery, preview, WhatsApp links
```

Everything you will edit most often lives in `assets/js/app.js`:
- `T` → all Arabic/English text
- `TPL` → the 10 sample designs (names, dates, venues are placeholders)
- `WA_NUMBER` → the WhatsApp number (`201069711151`)

## Publish on GitHub Pages (replacing an old site safely)

1. **Back up the old site first.** In your repo, create a branch: GitHub → branch dropdown → type `old-site-backup` → *Create branch*. (Or download the repo as a ZIP from *Code → Download ZIP*.) Nothing on that branch is ever touched.
2. Create a second branch called `new-aurelle` from `main`.
3. On the `new-aurelle` branch: delete the old site files (or *Add file → Upload files* and let the new ones overwrite them), then upload `index.html` and the whole `assets` folder (drag the folder in, keeping the structure above) and commit.
4. Open a *Pull request* from `new-aurelle` into `main`, review it, and *Merge*. Your old site stays recoverable on `old-site-backup` and in Git history.
5. *Settings → Pages* → Source: *Deploy from a branch* → Branch: `main`, folder `/ (root)` → Save.
6. After about a minute your site appears at `https://<username>.github.io/<repo>/`. Hard-refresh (Ctrl+Shift+R) if you still see the old one.

To roll back: *Settings → Pages* → choose branch `old-site-backup` instead, or revert the merge.

If you prefer a separate address and want to keep the old site live, create a new repo (e.g. `aurelle`) and publish it with the same Pages steps.

## Features that fully work in this version

- Arabic (RTL, default) and English (LTR) with instant switching, no reload; choice is remembered in the browser
- Responsive navigation with mobile menu, sticky header
- Five occasion cards that jump to the filtered gallery
- 10 original CSS/SVG invitation designs, category filters, bilingual search
- Immersive preview: envelope opening, cover, message, date/time/venue, live countdown (sample date), feature list, replay, close (button or Esc)
- Optional preview music: starts only when the visitor taps it (generated in the browser, no audio files)
- WhatsApp buttons everywhere, with a prefilled message in the current language (design, category, request for customization)
- Inquiry form that opens WhatsApp with the message ready (no data is stored anywhere)
- Works without Google Fonts (falls back to system fonts)

## Needs a backend or extra integrations (later)

- Storing inquiry-form submissions (database, or a form service such as Formspree)
- Real RSVP collection and guest lists per invitation
- Per-customer private invitation links with their own photos, videos and music (file storage + an admin tool)
- Online payments and order tracking
- Email notifications and automated reminders
- Analytics (e.g. Google Analytics or Plausible)
- Google Maps embeds (links are possible now; embedded maps need a key for some uses)

## Before you launch — please check

- The WhatsApp number you gave was `+20 106 971 11151` (11 digits after +20), but the link you gave, `wa.me/201069711151`, has 10. I used the link's number and displayed it as `+20 106 971 1151`. Please confirm which is correct; to change it, edit `WA_NUMBER` in `assets/js/app.js` and the displayed number in `index.html` (two places).
- Sample names, venues and dates in the designs are placeholders.
- No testimonials, awards, social accounts or customer numbers are invented.
