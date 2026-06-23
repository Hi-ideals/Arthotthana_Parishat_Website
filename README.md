# Arthotthana Parishat — NGO Website

A complete, production-ready static website for Arthotthana Parishat, a registered society
based in Bidar, Karnataka, focused on economic development and social welfare.

---

## Project Structure

```
/
├── index.html          — Home page
├── about.html          — About Us
├── initiatives.html    — Initiatives (Namma Bidar, Localight, Parv)
├── projects.html       — Projects (Startup development, Digital Skills, etc.)
├── gallery.html        — Photo Gallery
├── events.html         — Events (upcoming & past)
├── volunteers.html     — Volunteer registration
├── donate.html         — Donations & FAQ
├── contact.html        — Contact form & map
│
├── css/
│   └── style.css       — All custom styles (CSS variables, responsive, animations)
│
├── js/
│   └── script.js       — All JS: counter, lightbox, gallery filter, FAQ, form validation
│
└── images/             — ← REPLACE WITH YOUR OWN PHOTOS
    ├── hero/
    │   ├── hero-main.jpg          (1920×1080 — background hero landscape)
    │   └── hero-community.jpg     (800×600 — right-column hero card image)
    ├── about/
    │   ├── about-main.jpg         (700×480 — About section main photo)
    │   ├── about-accent.jpg       (350×280 — Small accent photo)
    │   └── about-intro.jpg        (700×420 — About page intro section)
    ├── programs/
    │   ├── entrepreneurship.jpg   (800×400)
    │   ├── digital-skills.jpg     (800×400)
    │   ├── women-empowerment.jpg  (800×400)
    │   ├── education.jpg          (800×400)
    │   ├── health.jpg             (800×400)
    │   ├── skilled-services.jpg   (800×400)
    │   └── community.jpg          (800×400)
    ├── gallery/
    │   ├── workshop-1.jpg  through workshop-4.jpg
    │   ├── mela-1.jpg      through mela-4.jpg
    │   ├── health-1.jpg    through health-3.jpg
    │   ├── community-1.jpg through community-3.jpg
    │   └── team-1.jpg, team-2.jpg
    ├── events/
    │   ├── event-mela.jpg
    │   ├── event-health.jpg
    │   └── event-workshop.jpg
    ├── team/
    │   ├── president.jpg           (400×480 — President photo)
    │   ├── team-1.jpg through team-4.jpg
    │   └── testimonial-1.jpg, testimonial-2.jpg, testimonial-3.jpg
    └── icons/
        ├── favicon.png             (32×32 or 64×64)
        └── partner-1.png through partner-5.png  (partner/supporter logos)
```

---

## Getting Started

This is a fully static website — no build tools, no server, no database required.

**Option A — Open locally:**
Simply open `index.html` in any modern browser. All pages work with relative paths.

**Option B — Deploy to a web host:**
Upload the entire folder contents (including `css/`, `js/`, `images/`) to any:
- Static host: Netlify, Vercel, GitHub Pages (free)
- cPanel hosting: public_html folder
- Any traditional web host

---

## Adding Your Images

Every `<img>` tag references a file in the `images/` folder.
Replace placeholder paths with real photos:

1. Add your photos to the appropriate subfolder
2. Rename them to match the expected filenames above, OR
3. Update the `src` attribute in the HTML to match your filenames

**Recommended image sizes:**
- Hero backgrounds: 1920×1080px, JPEG, < 300KB (use compression)
- Card images: 800×400px, JPEG, < 100KB each
- Team photos: 400×480px portrait orientation
- Gallery: 800×600px, JPEG, < 150KB each

---

## Customisation

### Colours (css/style.css, line ~1–16)
```css
:root {
  --green-dark:  #1B4332;  /* Primary dark — navbar, hero */
  --green-mid:   #2D6A4F;  /* Buttons, links */
  --green-light: #52B788;  /* Accents, tags */
  --amber:       #E9A826;  /* Highlights, CTA */
}
```

### Contact Details
Search for `XXXXX XXXXX` (phone) and `info@arthotthanaparishat.org` (email)
across all HTML files and replace with real details.

### Bank Details (donate.html)
Update the bank account number and IFSC code in the "Bank Transfer Details" section.

### Google Maps (contact.html)
Replace the `.map-placeholder` div with a real Google Maps embed:
```html
<iframe
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
  width="100%" height="380"
  style="border:0;border-radius:16px;"
  allowfullscreen loading="lazy">
</iframe>
```

### Social Media Links
Search for `href="#"` on social link anchors and replace `#` with your actual URLs.

---

## Features

- ✅ Sticky responsive navbar (Bootstrap 5)
- ✅ Mobile hamburger menu
- ✅ Full-screen hero with animated stats
- ✅ Scroll-triggered fade-up animations (IntersectionObserver)
- ✅ Animated counter numbers
- ✅ Gallery with category filter + lightbox
- ✅ FAQ accordion
- ✅ Donation amount selector with live total update
- ✅ Contact form with frontend validation
- ✅ Volunteer registration form
- ✅ Newsletter subscription UI
- ✅ Back-to-top button
- ✅ Preloader animation
- ✅ Toast notification system
- ✅ Progress bars (animated on scroll)
- ✅ SEO meta tags on all pages
- ✅ Open Graph tags (home page)
- ✅ Accessibility: aria-labels, keyboard nav, focus states
- ✅ No backend / database — fully static

---

## Browser Support

Chrome, Firefox, Safari, Edge (last 2 versions). IE not supported.

---

## Credits

Built for Arthotthana Parishat, Bidar, Karnataka.
Stack: HTML5 · CSS3 · Vanilla JavaScript · Bootstrap 5.3 · Bootstrap Icons 1.11
