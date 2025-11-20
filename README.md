# Apple MacBook Showcase (React + Three.js + GSAP)

A modern, scroll-driven product microsite inspired by Apple's MacBook marketing pages. It features a realtime 3D MacBook model rendered in the browser, synchronized with rich scroll animations, interactive features, and multilingual support.

## Key Features

* **3D MacBook model** rendered with react-three-fiber (three.js under the hood)
* **Scroll-synced animations** powered by GSAP and @gsap/react (ScrollTrigger)
* **Feature "chapters"** that fade in/out and swap textures/video on the laptop screen
* **Responsive model scaling** for mobile/desktop
* **Optimized media preloading** for smooth transitions
* **Custom internationalization (i18n)** with English + Indonesian support
* **Translation-driven UI** (footer, navbar, hero, performance copy, etc.)

## Tech Stack

**Frameworks:** React, react-three-fiber, @react-three/drei
**3D Rendering:** three.js
**Animation:** GSAP, @gsap/react, ScrollTrigger
**State Management:** zustand (custom `useMacBookStore` hook)
**Internationalization:** Custom lightweight i18n context (`I18nContext`, `t()`, `setLang()`)
**Utilities:** clsx, react-responsive
**Styling:** index.css

## Build

```
npm run build
```

## Project Structure

```
src/
├── App.jsx
├── index.css
├── main.jsx
├── constants/
│   ├── index.js            # static data: features, sequences, assets, footerLinks, navLinks
│   ├── i18n-core.jsx       # EN + ID translations, t(), resources, I18nContext
│   └── i18n-provider.jsx   # Provider for global language state
├── store/
│   └── index.js            # zustand store (e.g., setTexture, model state)
├── components/
│   ├── Features.jsx        # Scroll-pinned canvas + feature callouts
│   ├── Footers.jsx         # Footer + localized links
│   ├── Hero.jsx
│   ├── Highlights.jsx
│   ├── NavBar.jsx
│   ├── Performance.jsx
│   ├── ProductViewer.jsx   # Model viewer, color selector, size selector
│   ├── Showcase.jsx
│   └── models/
│       └── three/          # lighting, model loaders, ModelSwitcher
└── public/
    └── assets...
```

---

# Internationalization (i18n)

This project implements **full English + Indonesian language support** using a **lightweight custom i18n system**. It avoids heavy libraries like i18next and provides full control over translation loading and usage.

### How It Works

* All translations live in:
  `src/constants/i18n-core.jsx`
* Organized as:

```
resources
 ├── en
 │    └── footer, nav, showcase, highlights, performance, hero...
 └── id
      └── footer, nav, showcase, highlights, performance, hero...
```

* Components use:

```jsx
const { t, lang, setLang } = useI18n();
<p>{t("footer.privacy")}</p>
<a href={t("footer.privacy_link")}>
  {t("footer.privacy")}
</a>
```

### Footer Translation Example

```
footer: {
  fp1: "More ways to shop...",
  fp2: "Copyright © 2025 Apple Inc...",

  privacy: "Privacy Policy",
  privacy_link: "https://www.apple.com/legal/privacy/",

  terms: "Terms of Use",
  terms_link: "https://www.apple.com/legal/internet-services/terms/site.html",

  sales: "Sales Policy",
  sales_link: "https://www.apple.com/legal/sales-support/sales-policies/retail_us.html",

  legal: "Legal",
  legal_link: "https://www.apple.com/legal/",

  sitemap: "Sites Map",
  sitemap_link: "https://www.apple.com/sitemap/"
}
```

### Indonesian Version Example

```
footer: {
  fp1: "Ada banyak cara berbelanja...",
  fp2: "Hak cipta © 2025 Apple Inc...",

  privacy: "Kebijakan Privasi",
  privacy_link: "https://www.apple.com/legal/privacy/id/",

  terms: "Ketentuan Penggunaan",

  sales: "Kebijakan Penjual",

  legal: "Legal",

  sitemap: "Peta Situs",
}


Dokumentasi versi Bahasa Indonesia akan segera tersedia dalam file terpisah `README-ID.md`.
