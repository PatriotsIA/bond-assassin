# Bond Assassins — React + Vite site

Sleek, responsive marketing + action site for **BondAssassins.com**, styled in the spirit of `patriotsinaction.com` (navy/red/cream, bold hero, animated sections, polished cards/forms).

## Pages

- `/` — Home  
- `/bond-watch` — Bond Watch Texas (includes Submit + Alerts forms)
- `/how-to-fight` — How to Fight a Bond (step-by-step guide)
- `/request-help` — Request Help (intake form)
- `/about` — About & Support

## Run locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Notes

- Forms are **front-end only** right now (they validate + show a toast). Hook them up to your backend/API when ready.
- Core page copy lives in `src/content/siteCopy.ts`.
