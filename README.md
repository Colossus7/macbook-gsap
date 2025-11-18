README — Apple MacBook Showcase (3D + GSAP)
A modern, scroll-driven product microsite inspired by Apple’s MacBook marketing pages. It features a realtime 3D MacBook model rendered in the browser, synchronized with rich scroll animations and feature callouts.
Demo
•
Live demo: <add-your-deployment-url>
•
Preview video/GIF: <drop a short screen capture>
Key Features
•
3D MacBook model rendered with react-three-fiber (three.js under the hood)
•
Scroll-synced animations powered by GSAP and @gsap/react
•
Feature “chapters” that fade in/out and swap textures/video on the laptop screen
•
Responsive model scaling for mobile/desktop
•
Optimized media preloading for smooth transitions
Tech Stack
•
Framework: React
•
3D/Rendering: three.js, @react-three/fiber, @react-three/drei
•
Animation: gsap, @gsap/react (with ScrollTrigger)
•
State management: zustand (via a custom useMacBookStore hook)
•
Utilities: clsx, react-responsive
•
Styling: index.css (plain CSS; replace or extend with your preferred system)

Project Structure
src/
  App.jsx
  index.css
  constants/
    index.js              # static data: features, sequences, assets
  store/
    index.js              # zustand store (e.g., `setTexture`)
  components/
    Features.jsx          # Scroll-pinned canvas + feature callouts
    Highlights.jsx        # <section> with marketing highlights
    Performance.jsx       # <section> with performance specifics
    Footers.jsx           # Footer/links
    three/
      studioLight.jsx     # lighting setup for the scene
    models/
      Macbook.jsx         # Main 3D model
      Macbook-16.jsx      # Variant (16-inch)

How It Works (high level)
•
Features.jsx
◦
Renders a scroll-pinned <Canvas> with StudioLight and the Macbook model.
◦
Uses useGSAP to build two timelines:
▪
A model rotation timeline pinned to #f-canvas.
▪
A content timeline that reveals .box1–.box5 feature cards and calls setTexture to swap the video texture on the model.
◦
Preloads videos from featureSequence for smoother playback.
•
useMacBookStore (Zustand)
◦
Exposes setTexture(videoPath) used by GSAP callbacks.
•
@react-three/drei/Html
◦
Displays a lightweight fallback while the model is loading.
•
react-responsive
◦
Adjusts the model scale based on viewport width.
