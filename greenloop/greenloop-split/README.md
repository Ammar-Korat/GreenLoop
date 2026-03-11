# GreenLoop 🌿
> Close the Loop. Recycle Smarter.

## Project Structure

```
greenloop/
├── index.html              ← Entry point — assembles all screens
│
├── css/
│   ├── variables.css       ← Design tokens (colors, radii, shadows) + CSS reset
│   ├── layout.css          ← Screen system, topbar, nav bar, wrappers, toast, typography
│   ├── components.css      ← Reusable UI: buttons, cards, inputs, divider, upload, radio
│   └── screens.css         ← Per-screen styles: loading, survey, auth, dashboard,
│                              pickup, payment, confirm, impact, support
│
├── js/
│   ├── data.js             ← Materials array, qty state, POST_AUTH list
│   ├── router.js           ← goTo() navigation + load-screen timeout
│   ├── survey.js           ← pickS1, pickS2, toggleS3
│   ├── auth.js             ← switchTab, handleUpload, clearFile
│   ├── materials.js        ← renderMats, chQty, calcSummary, updatePayout
│   ├── logistics.js        ← pickPickup, pickPay
│   └── support.js          ← toggleFaq, showToast, sendMsg
│
└── screens/                ← Reference HTML partials (one per screen)
    ├── loading.html
    ├── survey.html
    ├── auth.html
    ├── dashboard.html
    ├── pickup.html
    ├── payment.html
    ├── confirm.html
    ├── impact.html
    └── support.html
```

## How to Run

Open `index.html` directly in any modern browser — no build step required.

> **Note:** The `screens/` folder contains standalone HTML snippets for reference
> and easier editing. The actual running app lives in `index.html`.
> If you add a server-side templating system (e.g. PHP, Nunjucks, Jinja),
> you can `{% include %}` each partial instead of keeping them inline.

## CSS Load Order

CSS files must be loaded in this order (already set in `index.html`):
1. `variables.css` — tokens used by everything else
2. `layout.css` — structural rules
3. `components.css` — reusable components
4. `screens.css` — screen-specific overrides

## JS Load Order

JS files must be loaded in this order (already set in `index.html`):
1. `data.js` — defines `MATS`, `qty`, `POST_AUTH` (globals used by all other modules)
2. `router.js` — `goTo()` calls `renderMats` and `updatePayout` from later modules
3. `survey.js`, `auth.js`, `materials.js`, `logistics.js`, `support.js`
