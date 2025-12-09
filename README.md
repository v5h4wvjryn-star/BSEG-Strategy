# Blue Star Equity Group - Website

A modern, professional single-page application built with React and Tailwind CSS showcasing Blue Star Equity Group's investment strategy and business divisions.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean, professional design using Tailwind CSS
- **Single Page Application**: Smooth scrolling navigation
- **5 Business Divisions**: Detailed presentation of each pillar
- **10-Year Strategy Timeline**: Clear visualization of growth phases
- **Wealth Flywheel**: Interactive representation of the business ecosystem

## Technology Stack

- React 18
- Tailwind CSS 3
- Vite (Build tool)
- PostCSS & Autoprefixer

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Deployment

This site can be easily deployed to:

- **GitHub Pages**: Use `gh-pages` branch
- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the `dist` folder
- **AWS S3**: Upload the `dist` folder contents

## Structure

```
BSEG-Strategy/
├── src/
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # React entry point
│   └── index.css        # Tailwind CSS imports
├── index.html           # HTML template
├── package.json         # Dependencies
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
└── vite.config.js       # Vite configuration
```

## Customization

- **Colors**: Edit `tailwind.config.js` to change the color scheme
- **Content**: Edit `src/App.jsx` to update text and structure
- **Styling**: Modify `src/index.css` for global styles

## Contact Information

Update the contact details in the Contact section of `src/App.jsx`:
- Email: contact@bluestarequity.com
- Phone: (123) 456-7890

## License

Copyright © 2024 Blue Star Equity Group. All rights reserved.