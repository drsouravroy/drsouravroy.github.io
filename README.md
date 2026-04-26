# Dr. Sourav Roy Academic Website

This project is a premium static multi-page academic website for **Sourav Roy, Ph.D.** It is built with only **HTML, CSS, and minimal vanilla JavaScript** and is suitable for direct deployment on **GitHub Pages**.

The site presents Dr. Roy’s academic profile across computational biophysics, structural biology, protein dynamics, infectious disease biology, host-pathogen interaction, complement therapeutics, and therapeutic discovery.

## Project Overview

- Multi-page static site
- No React, Node, npm, backend, database, or build tools
- Works by opening `index.html` directly in a browser
- Includes light/dark mode, mobile navigation, publication filters, and responsive layouts

## File Structure

```text
dr-sourav-roy-website/
├── index.html
├── about.html
├── research.html
├── publications.html
├── projects.html
├── teaching.html
├── contact.html
├── styles.css
├── script.js
├── README.md
└── assets/
    ├── dr-sourav-roy.jpg
    ├── favicon.png
    └── og-image.jpg
```

## How to Run Locally

No server is required.

1. Open the `dr-sourav-roy-website` folder.
2. Double-click `index.html`, or open it in any modern browser.
3. Navigate between pages using the header menu.

## How to Replace the Portrait Image

1. Prepare the new portrait image.
2. Replace `assets/dr-sourav-roy.jpg` with the new file.
3. If needed, also replace `assets/og-image.jpg` so social preview images match the new portrait.
4. Keep the filename the same unless you also update the image references in the HTML files.

## How to Edit Publications

1. Open `publications.html`.
2. Locate the publication cards inside the publication grid.
3. Update the title, journal, year, and category tags as needed.
4. If you add new categories, also update the filter buttons near the top of `publications.html`.
5. If the publication list changes significantly, review the JSON-LD block in the page head as well.

## How to Deploy on GitHub Pages

1. Create a new GitHub repository.
2. Upload all files from the `dr-sourav-roy-website` folder.
3. Go to **Settings** in the repository.
4. Go to **Pages**.
5. Select the `main` branch.
6. Select the **root** folder.
7. Save and publish.

After GitHub Pages publishes the site, update the canonical URLs and Open Graph URLs in each HTML file from the placeholder `https://example.com/...` values to the final site URL.

## How to Update Content Later

- Edit page copy directly in the relevant `.html` files.
- Update styling in `styles.css`.
- Update interactive behavior in `script.js`.
- Replace assets in the `assets/` folder if profile media changes.
- Re-check internal links after any filename changes.
- Re-verify contact information, institutional role, and external profile links before republishing.

## Verification Reminder

Before publishing, verify all professional details, publications, and contact information from official sources.
