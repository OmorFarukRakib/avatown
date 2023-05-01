# AvaTown

This is a marketplace to buy virtual avatar.

## Demo

[Web View Link](https://precious-gaufre-02a03f.netlify.app/)



## Installation

Install and run avatown as development mode with npm

```bash
  cd avatown
  npm install
  npm run dev
```

## Tech Stack

**Client:** Vite, ReactJs

- **Redux-toolkit:** Used for global state management for avatar and cart values.
- **Redux-persist:** Used for persisting cart value even after refresh.
- **Redux-router-v6:** Used for routing.
- **@mui/material:** Used for React UI Component such as snackbar, button, etc.
- **react-bootstrap:** Used for React UI Component such as modal, button, etc.
- **react-pro-sidebar:** Used for sidenav.
- **clsx:** Used for constructing className conditionally.
- **module.css:** Used for writing isolated and reusable CSS custom styles.
- **Prop-Types:** Used for props validation.

## Features

- Showing all the avatar cards with details
- Collapsible Sidebar for filtering avatar cards
- sorting avatar cards depending on new, price, polygon
- Add to cart if not already added
- Cart items can be removed by one or all
- Cart items will persist even after refresh
- Individual avatar page with details
- pagination if avatar card list is too long
- Show success and error snackbar
- Individual avatar page can be access through respective url.

## Lessons Learned

It was a nice opportunity to implement latest redux best practice redux-toolkit.
