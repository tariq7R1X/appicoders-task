# Appicoders Website

A modern, responsive React.js website built with Material-UI, replicating the Appicoders company website design from Figma screenshots.

## Features

- **Responsive Design**: Fully responsive across all device sizes
- **Modern UI**: Built with Material-UI components and custom styling
- **Clean Architecture**: Well-organized component structure
- **Professional Sections**:
  - Hero Section with animated elements
  - Services showcase
  - Why Choose Us section
  - Industries we serve
  - Technologies section with 3D visualizations
  - Products portfolio
  - Awards and recognitions
  - Client testimonials
  - Contact form
  - Professional footer

## Tech Stack

- React.js 18
- Material-UI (MUI) 5
- JavaScript (ES6+)
- CSS-in-JS with emotion

## Project Structure

```
src/
├── components/
│   ├── Header/
│   ├── HeroSection/
│   ├── ServicesSection/
│   ├── WhyChooseUsSection/
│   ├── IndustriesSection/
│   ├── TechnologiesSection/
│   ├── ProductsSection/
│   ├── AwardsSection/
│   ├── TestimonialsSection/
│   ├── ContactSection/
│   └── Footer/
├── theme/
│   └── theme.js
├── App.js
└── index.js
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App

## Design Features

- **Color Scheme**: Red (#E53E3E) primary with dark gray (#2D3748) secondary
- **Typography**: Inter font family for modern, clean text
- **Animations**: Subtle hover effects and floating animations
- **3D Elements**: CSS-based 3D visualizations for tech sections
- **Mobile-First**: Responsive design starting from mobile devices

## Components Overview

Each component is self-contained with its own styling and logic:

- **Header**: Responsive navigation with mobile drawer
- **HeroSection**: Eye-catching banner with call-to-action
- **ServicesSection**: Grid of services with icons and descriptions
- **WhyChooseUsSection**: Three-column feature highlights
- **IndustriesSection**: Industry-specific service cards
- **TechnologiesSection**: Interactive 3D cloud visualization
- **ProductsSection**: Tabbed product showcase
- **AwardsSection**: Recognition badges and awards
- **TestimonialsSection**: Client feedback with professional styling
- **ContactSection**: Contact form with company information
- **Footer**: Links, contact info, and social media

## Customization

The theme can be customized in `src/theme/theme.js` to match different brand colors and typography preferences.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)