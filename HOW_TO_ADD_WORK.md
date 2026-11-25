# How to Add Pawankumar Prajapati's Real Graphic Design Work

Until real projects are added, the portfolio displays **4 dummy placeholder projects** (`01 Kaveri Botanicals`, `02 Aarambh Issue 04`, `03 Forum & Sound Series`, and `04 Solis Coffee Roasters`).

You have **two easy ways** to add real graphic design projects:

---

## Option 1 — Directly Inside the Website UI (Instant Preview)
1. Click **"+ add work"** in the header, **"+ ADD WORK"** in Section 01, or the dashed **"05+ Add your next design piece"** sketchbook slot card.
2. Upload an image file or paste an image path/URL, enter the title, discipline, client, year, summary, and case study notes, and click **PUBLISH TO PORTFOLIO**.
3. You can also click **"replace placeholder"** on any dummy card to swap it directly with real work.
4. Click **"Export JSON"** in Section 01 (or inside the modal) to download `pawankumar-prajapati-works.json`.

---

## Option 2 — Permanently in the Codebase (Recommended for Deployment)
1. Drop your project images inside `public/images/works/` (for example `public/images/works/brand-project.jpg`).
2. Open [`src/data/works.ts`](src/data/works.ts).
3. Replace any placeholder entry in `DUMMY_WORKS` or append a new entry:

```ts
{
  id: 'my-brand-project',
  title: 'My Brand Project',
  italicWord: 'Brand',
  category: 'Brand Identity', // 'Brand Identity' | 'Print & Editorial' | 'Packaging' | 'Poster & Type' | 'Digital & Social'
  client: 'Client Name',
  year: '2026',
  role: 'Graphic Designer',
  summary: 'Short 1-2 sentence overview shown on the showcase card.',
  story: 'Detailed case study notes shown when a visitor clicks the card.',
  deliverables: ['Logo Design', 'Brand Guidelines', 'Print Collateral'],
  imageUrl: '/images/works/brand-project.jpg',
  awardBadge: true,
  isPlaceholder: false,
  createdAt: Date.now(),
}
```

4. Update Pawankumar's portrait by replacing `public/images/avatar-pawan.jpg` with his headshot, and update `DESIGNER_PROFILE` in [`src/data/works.ts`](src/data/works.ts) with his real email, Behance, Instagram, and LinkedIn links.
