# Logistics Company Portfolio Website — Full Implementation Plan

> **Purpose:** This document is the complete blueprint for building a sample logistics company portfolio website.
> Hand this to Claude Code and it should be able to implement the full site from scratch.

---

## 1. Project Overview

| Field | Detail |
|---|---|
| **Company Name** | SwiftHaul Logistics *(sample name — swap as needed)* |
| **Tagline** | *"Moving Cargo. Building Trust."* |
| **Type** | Static portfolio/marketing website |
| **Goal** | Generate leads — visitors should call, email, or fill a quote request form |
| **Pages** | Single-page with anchor sections + a standalone Contact page |

---

## 2. Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | **React + Vite** | Fast dev server, clean build output |
| Styling | **Tailwind CSS** | Utility-first, clean output |
| Routing | **React Router v6** | Client-side routing for Contact page |
| Animations | **Framer Motion** | Smooth scroll animations |
| Icons | **Lucide React** | Clean, consistent icon set |
| Forms | **React Hook Form** | Lightweight form handling |
| Deployment | **Netlify / Vercel** | Drop-in static hosting for Vite builds |

---

## 3. Design System

### Colors
```
Primary Dark:   #0A1628   (navy — backgrounds, navbar)
Primary Blue:   #1565C0   (main brand color)
Accent Blue:    #1976D2   (hover states, CTAs)
Bright Blue:    #42A5F5   (highlights, icons)
Light Blue:     #E3F2FD   (section backgrounds, cards)
White:          #FFFFFF
Text Dark:      #0D1B2A
Text Mid:       #37474F
Text Light:     #78909C
```

### Typography
```
Headings:   Inter Bold / Helvetica Neue Bold
Body:       Inter Regular
Accent:     Inter Medium (for labels, tags)
```

### Spacing & Style Notes
- Clean, corporate but not stiff
- Heavy use of white space
- Cards with subtle drop shadows
- Blue gradient on hero
- Sections alternate: white bg → light blue bg → white

---

## 4. File & Folder Structure

```
/
├── public/
│   ├── images/
│   │   ├── hero-truck.jpg
│   │   ├── fleet/
│   │   └── team/
│   └── logo.svg
├── src/
│   ├── main.jsx              # Entry point
│   ├── App.jsx               # Router setup
│   ├── pages/
│   │   ├── Home.jsx          # All main sections assembled
│   │   └── Contact.jsx       # Standalone contact page
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Stats.jsx
│   │   ├── Services.jsx
│   │   ├── WhyUs.jsx
│   │   ├── Fleet.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Coverage.jsx
│   │   ├── QuoteForm.jsx
│   │   ├── CTA.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── content.js        # All static copy/content in one place
│   └── index.css             # Tailwind directives
├── index.html
├── vite.config.js
└── tailwind.config.js
```

---

## 5. Pages & Sections Breakdown

---

### 5.1 — Navbar

**Behavior:** Fixed top, transparent on hero → solid navy on scroll

**Content:**
- Logo left: SwiftHaul logo + wordmark
- Nav links center: Services · Fleet · About · Coverage · Contact
- CTA button right: "Get a Quote" → scrolls to quote form

**Mobile:** Hamburger menu, full-screen slide-down

---

### 5.2 — Hero Section

**Layout:** Full-height (100vh), dark navy overlay on a high-quality truck/logistics image

**Content:**
```
Tag:      [ Reliable Logistics Solutions ]
Heading:  Moving Cargo.
          Building Trust.
Sub:      We handle freight, last-mile delivery, and fleet logistics
          across East Africa — on time, every time.
CTA:      [ Request a Quote ]   [ Our Services ↓ ]
```

**Design Notes:**
- Background: dark blue gradient overlay on a truck/highway image
- Heading font size: 64px desktop / 38px mobile
- Subtle fade-up animation on text
- A floating "scroll down" indicator at the bottom

---

### 5.3 — Stats Bar

**Layout:** Full-width dark navy band, 4 stats in a row

**Content:**
```
500+           12+            98%              24/7
Deliveries     Years          On-Time Rate     Support
Completed      Experience     
```

**Design Notes:**
- Numbers animate up (count-up effect) when scrolled into view
- White text on navy background
- Dividers between stats on desktop

---

### 5.4 — Services Section

**Layout:** Section heading + 6 service cards in a 3x2 grid

**Heading:**
```
What We Do
Comprehensive logistics solutions tailored to your cargo needs.
```

**Services (cards):**
| # | Icon | Title | Description |
|---|---|---|---|
| 1 | Truck | Freight Transport | Long and short-haul transport for commercial and industrial cargo |
| 2 | Package | Last-Mile Delivery | Door-to-door delivery solutions for businesses and e-commerce |
| 3 | Warehouse | Warehousing | Secure, climate-aware storage facilities across key locations |
| 4 | Clock | Express Logistics | Time-critical deliveries handled with priority routing |
| 5 | BarChart | Supply Chain | End-to-end supply chain management and logistics consulting |
| 6 | Shield | Cargo Insurance | Peace of mind with full cargo protection on every job |

**Card Design:**
- White card, light shadow
- Blue icon top-left
- Title + 2-line description
- Subtle hover: lift + blue top border

---

### 5.5 — Why Choose Us

**Layout:** Left content + right image (alternating feel)

**Heading:**
```
Why Clients Trust SwiftHaul
We don't just move cargo — we move it right.
```

**Points (4 items with icon + text):**
```
✔ Vetted & experienced drivers
✔ Real-time job status updates
✔ Flexible vehicle options for any load
✔ Transparent, no-surprise pricing
```

**Right side:** Quality photo of truck fleet or loading dock

---

### 5.6 — Fleet Section

**Layout:** Section heading + 4 fleet cards in a row

**Heading:**
```
Our Fleet
The right vehicle for every job.
```

**Fleet Cards:**
| Vehicle | Capacity | Best For |
|---|---|---|
| Mini Van | Up to 1 ton | Small parcels, urban delivery |
| 3-Ton Truck | Up to 3 tons | Medium freight, retail |
| Flatbed | Up to 8 tons | Heavy equipment, construction |
| Semi-Trailer | Up to 20 tons | Industrial, long-haul bulk cargo |

**Card Design:**
- Vehicle illustration or silhouette icon (SVG)
- Capacity badge (blue pill)
- "Best for" tag in muted text
- Light blue background on card

---

### 5.7 — How It Works

**Layout:** Centered, 4-step horizontal process flow

**Heading:**
```
Simple. Fast. Reliable.
Getting your cargo moved in 4 easy steps.
```

**Steps:**
```
1. Request        2. Get Matched       3. We Dispatch       4. Delivered
Submit your       We assign the        Your driver           You receive
job details       right vehicle        picks up              confirmation +
online or         for your load        on schedule           status update
by phone
```

**Design:** Connected steps with a dotted line and numbered blue circles

---

### 5.8 — Testimonials

**Layout:** Light blue background, 3 testimonial cards

**Heading:**
```
What Our Clients Say
```

**Sample Testimonials:**
```
"SwiftHaul has been our go-to logistics partner for over 3 years.
 Always on time, always professional."
— James M., Operations Manager, RetailCo Kenya

"We moved our entire warehouse stock across three counties without
 a single issue. Impressive service."
— Sarah K., Supply Chain Lead, BuildRight Ltd

"Responsive team, fair pricing, and the drivers are courteous.
 Highly recommended."
— David O., Founder, QuickMart Supplies
```

**Card Design:**
- White card on light blue section background
- Stars (5) in gold
- Quote in italic
- Name + title below

---

### 5.9 — Coverage Section

**Layout:** Two columns — left text, right map or stylized coverage graphic

**Heading:**
```
Where We Operate
Covering major routes and corridors across the region.
```

**Content:**
```
Key Hubs:     Nairobi · Mombasa · Kisumu · Eldoret · Nakuru
Corridors:    Northern Corridor · Mombasa–Nairobi Highway
              Trans-African Highway
Coming Soon:  Uganda · Tanzania · Rwanda
```

**Design Note:** Use a styled SVG map or a clean card-list of coverage areas if an actual map is complex

---

### 5.10 — Quote Request Form (CTA Section)

**Layout:** Dark navy background, centered form

**Heading:**
```
Ready to Move Your Cargo?
Tell us what you need and we'll get back to you within the hour.
```

**Form Fields:**
```
Full Name         *
Company Name
Phone Number      *
Email Address     *
Cargo Type        (dropdown: General Freight / Heavy Equipment / Fragile / Perishable / Other)
Estimated Weight  (dropdown: <1T / 1–3T / 3–8T / 8T+)
Pickup Location   *
Delivery Location *
Preferred Date
Additional Notes  (textarea)

[ Submit Request ]
```

**On Submit:** Show a success message — "We've received your request. Expect a call within the hour."

---

### 5.11 — Footer

**Layout:** Dark navy, 4 columns + bottom bar

**Columns:**
```
Col 1: Logo + tagline + social icons (LinkedIn, Facebook, Instagram)

Col 2: Quick Links
        Home · Services · Fleet · How It Works · Contact

Col 3: Services
        Freight Transport · Last-Mile Delivery
        Warehousing · Express Logistics

Col 4: Contact
        📞 +254 700 000 000
        ✉ info@swifthaul.co.ke
        📍 Industrial Area, Nairobi
```

**Bottom bar:**
```
© 2025 SwiftHaul Logistics. All rights reserved.   |   Built by GlimmerInk Creations
```

---

## 6. Animations & Interactions

| Element | Animation |
|---|---|
| Hero text | Fade up on load |
| Stats numbers | Count-up when in viewport |
| Service cards | Fade up staggered when in viewport |
| How It Works steps | Slide in left-to-right on scroll |
| Testimonials | Fade in |
| Navbar | Background transition on scroll |
| Buttons | Scale up slightly on hover |

Use **Framer Motion** `whileInView` + `initial/animate` for all scroll animations.

---

## 7. Responsiveness Breakpoints

| Breakpoint | Behavior |
|---|---|
| Mobile (<768px) | Single column, stacked sections, hamburger nav |
| Tablet (768–1024px) | 2-column grids, adjusted font sizes |
| Desktop (>1024px) | Full layout as designed |

---

## 8. SEO Basics to Include

```
- react-helmet-async for dynamic <title> and meta tags per page
- Open Graph tags (for social sharing)
- Alt text on all images
- Semantic HTML (h1 → h2 → h3 hierarchy)
- robots.txt in /public
```

> Note: React/Vite is a CSR app — for full SEO, consider pre-rendering with vite-plugin-ssr 
> or just ensure meta tags are set. For a portfolio/brochure site this is fine.

---

## 9. Assets Needed

| Asset | Source |
|---|---|
| Hero image | Unsplash — search "logistics truck highway" |
| Fleet images / icons | Unsplash or custom SVG silhouettes |
| Operations photos | Unsplash — "warehouse logistics loading" |
| Logo | Create in Figma or use text-based logo |
| Testimonial avatars | UI Avatars or placeholder initials |

All Unsplash images are free for commercial use — no attribution required.

---

## 10. Claude Code Instructions

When handing this to Claude Code, use this prompt:

```
Build a logistics company portfolio website using React + Vite 
and Tailwind CSS. The company is called SwiftHaul Logistics with tagline 
"Moving Cargo. Building Trust."

Follow this plan exactly: [attach this file]

Use React Router v6 for routing, Framer Motion for scroll animations, 
Lucide React for icons, and React Hook Form for the quote form.

Use placeholder images from Unsplash (direct URLs are fine).
Put all static content/copy in src/data/content.js.
Make it fully responsive.
Build should be deployable on Netlify or Vercel.
```

---

*Plan prepared by GlimmerInk Creations*