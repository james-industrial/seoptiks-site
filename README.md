# SEOptiks Website

Marketing website for [seoptiks.com](https://seoptiks.com) — built as a static site, deployed via Vercel.

## Setup

### 1. Connect Formspree

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form and copy the form ID (looks like `xpzgabcd`)
3. In `index.html`, find this line:
   ```html
   <form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
   Replace `YOUR_FORM_ID` with your actual form ID.

### 2. Deploy to Vercel

1. Push this repo to GitHub (already done)
2. Go to [vercel.com](https://vercel.com) → Import Project
3. Select this repository
4. Vercel will auto-detect a static site — no build settings needed
5. Click Deploy

### 3. Custom Domain

In your Vercel project settings → Domains, add `seoptiks.com` and follow the DNS instructions.

## File Structure

```
seoptiks-site/
├── index.html       # Main page
├── style.css        # All styles
├── main.js          # Nav, form, animations
├── vercel.json      # Vercel config
├── images/
│   ├── logo.png     # SEOptiks logo
│   └── favicon.png  # Browser icon
└── README.md
```

## Updating Content

- **Copy / text** → edit `index.html` directly
- **Colours** → CSS variables at the top of `style.css` (`:root { ... }`)
- **Contact email shown on page** → search for `hello@seoptiks.com` in `index.html`
- **Form destination** → update the Formspree form ID in `index.html`
