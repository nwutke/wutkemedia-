# Wutke Media

Production site for Wutke Media, Nicholas Wutke’s creative studio on Vancouver Island, BC. Web design, graphic design, photography, video, social media, headshots, and real estate media.

The visual design follows the approved static mockup. Real estate prices, contact details, and portfolio photography are taken from that mockup. Web and graphic design samples stay as labelled placeholders until real projects are ready.

## Scripts

```bash
npm install
npm run dev
npm run build
npm start
npm run lint
```

The app lives at the repository root so Vercel can detect it without a root directory setting.

## Environment variables

Copy `.env.example` to `.env.local` for local development. Do not commit secrets.

| Variable | Required to send mail | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | Yes | Resend API key. The contact route calls the Resend REST API. No SDK is installed. |
| `CONTACT_TO_EMAIL` | Yes | Inbox that receives enquiries, for example `nicholaswutke@gmail.com`. |
| `CONTACT_FROM_EMAIL` | Yes | Verified sender. Either `hello@yourdomain.com` or `Wutke Media <hello@yourdomain.com>`. |
| `NEXT_PUBLIC_SITE_URL` | No | Public site origin for canonical links, Open Graph, and the sitemap. Example: `https://wutkemedia.com`. On Vercel, the deployment URL is used when this is unset. |

If `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, or `CONTACT_FROM_EMAIL` is missing or invalid, `POST /api/contact` does not send mail. It returns a message asking the visitor to email or call, and the server logs which variables are missing. Nothing in the repository contains an API key.

The form checks name, email, an optional phone number, a project-type dropdown, and a message. A honeypot field is discarded without sending mail when it is filled in.

## Logo

The real brush logo (black W, orange-red `#FF4422` M) is not available yet. The temporary WM mark is isolated so it can be replaced in one place:

- `public/logo.svg` — the mark used in the header and footer
- `components/Logo.tsx` — the only component that renders it
- `app/icon.svg`, `app/favicon.ico`, and `app/apple-icon.png` — favicons. Update these when the final mark arrives.

## Photography

Gallery and hero photos are from Nicholas Wutke’s ZList portfolio. Source URLs for the files used on the site are in `content/image-sources.json`.

## Fonts

Inter (SIL Open Font License) and Syncopate (Apache 2.0) are self-hosted from the approved mockup and subset for Latin. See `fonts/NOTICE.txt`.
