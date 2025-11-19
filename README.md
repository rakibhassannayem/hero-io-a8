# Name: HERO.IO
https://hero-io-store.netlify.app/

# Description:
This is a fully responsive app that has various mobile applications. It allows users to browse, search, sort, install and uninstall. It shows trending apps section and detailed information about each app.

# Technologies: JavaScript, React, tailwindCSS, daisyUI, recharts, lucide-react, vite

# HERO.IO

Description
-----------
HERO.IO is a React-based web marketplace that showcases mobile apps with detailed information, trending lists, installation management, and lightweight analytics.  
Live: https://hero-io-store.netlify.app/

Quick links
-----------
- Hooks: [`useApps`](src/hooks/useApps.js) — [src/hooks/useApps.js](src/hooks/useApps.js)  
- Components: [`LoadingAnimation`](src/components/LoadingAnimation.jsx) — [src/components/LoadingAnimation.jsx](src/components/LoadingAnimation.jsx)  
- Project manifest: [package.json](package.json)

Technologies
------------
- React
- Vite (dev/build)
- Tailwind CSS + DaisyUI (styling)
- Axios (data fetching)
- Recharts (charts/visualization)
- react-toastify (notifications)
- lucide-react (icons)
- Local storage for simple state persistence

Main features
-------------
- Browse and search apps
- Trending apps section
- App detail pages with ratings, reviews, and stats
- Install / uninstall app flow (local storage)
- Loading and error states
- Visual charts for app metrics

Dependencies
------------
(Install via npm / yarn — listed here as used in this project)
- react
- react-dom
- react-router-dom
- axios
- tailwindcss
- daisyui
- recharts
- lucide-react
- react-toastify
- vite

Run locally
-----------
1. Clone the repo and open the project folder:
   - PowerShell / CMD:
     ```
     git clone <repo-url>
     cd d:\phProjects\React\hero-io-a8
     ```
2. Install dependencies:
   - npm:
     ```
     npm install
     ```
   - or yarn:
     ```
     yarn
     ```
3. Start dev server (Vite):
   - npm:
     ```
     npm run dev
     ```
   - or yarn:
     ```
     yarn dev
     ```
4. Open the development URL printed by Vite (usually http://localhost:5173).

Build & preview
---------------
- Build for production:
  ```
  npm run build
  ```
- Preview the production build:
  ```
  npm run preview
  ```

Notes & useful files
--------------------
- Fetch hook: [`useApps`](src/hooks/useApps.js) — loads apps from `appsData.json`.  
- Loader component: [`LoadingAnimation`](src/components/LoadingAnimation.jsx) — simple spinner using project logo.

Other links
-----------
- Live app: https://hero-io-store.netlify.app
- Issues / Feature requests: https://github.com/rakibhassannayem/hero-io-a8.git
