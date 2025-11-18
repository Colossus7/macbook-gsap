# Apple MacBook Showcase (React + Three.js + GSAP)

A modern, scroll-driven product microsite inspired by Apple’s MacBook marketing pages. It features a realtime 3D MacBook model rendered in the browser, synchronized with rich scroll animations and feature callouts.

##Key Features
-  3D MacBook model rendered with react-three-fiber (three.js under the hood)
-  Scroll-synced animations powered by GSAP and @gsap/react
-  Feature “chapters” that fade in/out and swap textures/video on the laptop screen
-  Responsive model scaling for mobile/desktop
-  Optimized media preloading for smooth transitions
  
## Tech Stack
Framework: React
3D/Rendering: three.js, @react-three/fiber, @react-three/drei
Animation: gsap, @gsap/react (with ScrollTrigger)
State management: zustand (via a custom useMacBookStore hook)
Utilities: clsx, react-responsive
Styling: index.css 

## Build
npm run build

## Structure
src/
  App.jsx
  index.css
  constants/
  store/
  components/
    Features.jsx
    Highlights.jsx
    Performance.jsx
    Footers.jsx
    three/studioLight.jsx
    models/Macbook.jsx
