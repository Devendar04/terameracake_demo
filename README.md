# Tera Mera Cake — React + Tailwind CSS Website

Udaipur's favourite bakery website, rebuilt with **React 18 + Vite + Tailwind CSS**.

## ✨ What's New (Upgrade from HTML)

- **Premium 3D cake SVG** replaces the flat cartoon — multi-tier with realistic gradients, drips, ruffles, candles with animated flames
- All sections converted to clean **React components**
- **Mouse parallax** on pop-out cards (tilt + depth shift on hover)
- **Scroll-reveal** animations via IntersectionObserver
- **Navbar** auto-frosted-glass on scroll
- **Floating WhatsApp** button
- SEO-ready: JSON-LD schema, canonical URL, Open Graph, Twitter card
- Fully **accessible**: skip link, ARIA labels, semantic HTML

## 📁 Project Structure

```
terameracake/
├── public/                 # Static assets
├── src/
│   ├── components/
│   │   ├── CakeSVG.jsx     ★ Premium 3D cake (replaces flat cartoon)
│   │   ├── Navbar.jsx      Responsive nav with scroll glass effect
│   │   ├── Hero.jsx        Hero section with pop-out cake card
│   │   ├── About.jsx       About section
│   │   ├── Products.jsx    Menu / product cards
│   │   ├── Showcase.jsx    2.5D pop-out showcase (dark section)
│   │   ├── Outlets.jsx     Two outlet cards
│   │   ├── Gallery.jsx     Gallery + testimonials
│   │   └── Footer.jsx      Footer with wave divider
│   ├── App.jsx             Root component
│   ├── index.css           Global styles + all keyframe animations
│   └── main.jsx            Entry point
├── index.html              HTML shell with SEO meta + JSON-LD
├── tailwind.config.js      Custom colours (rose, caramel, chocolate…)
├── vite.config.js
└── package.json
```

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Development server (hot reload)
npm run dev

# Production build → dist/
npm run build

# Preview production build locally
npm run preview
```

## 🎨 Replacing Cake with a Real Photo

To use a real transparent-background PNG of your cake instead of the SVG, edit **`src/components/Hero.jsx`** and **`src/components/Showcase.jsx`**:

```jsx
// In Hero.jsx — find the pop-out cake div and replace:
<div style={{ ...cakeStyles }}>
  <CakeSVG size={270} />
</div>

// Replace with:
<img
  src="/your-cake-photo.png"   // put photo in /public/
  alt="Custom birthday cake"
  style={{ width: 270, ...cakeStyles }}
/>
```

Do the same in `Showcase.jsx` for both cards.

## 🎨 Brand Colours

Defined in `tailwind.config.js`:

| Token       | Hex       | Usage                  |
|-------------|-----------|------------------------|
| `rose`      | `#E8635A` | Primary CTA, accents   |
| `caramel`   | `#C47B2B` | Secondary, gold tones  |
| `chocolate` | `#3D1F0D` | Dark backgrounds, text |
| `cream`     | `#FFF8F0` | Page background        |
| `gold`      | `#D4A843` | Shimmer, gems, stars   |
| `mint`      | `#C8EBD9` | Fresh accent           |
| `blush`     | `#F9C5BE` | Soft pink              |

## 📞 Contact Details

Update these in the components if they change:
- **Phone 1:** +91 97722 82666 (100 Feet Rd)
- **Phone 2:** +91 97722 03066 (Hiran Magri)
- **WhatsApp:** https://wa.link/7h56j5
- **Instagram:** https://www.instagram.com/terameracake/

## 🌐 Deployment

Works on **Netlify**, **Vercel**, or any static host:

```bash
npm run build
# Upload the dist/ folder
```

For Netlify: add `_redirects` to `public/`:
```
/*  /index.html  200
```


