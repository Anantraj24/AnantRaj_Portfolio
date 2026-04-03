# Anant Raj 

Welcome to the source code for my interactive portfolio website! This project is a visually immersive, 3D-driven personal portfolio built with React, Vite, and Three.js. It highlights my marketing background and projects through an engaging, interactive web experience.

## 🚀 Technologies Used

This project leverages modern web technologies to create a high-performance 3D experience:

- **Frontend Framework**: [React 18](https://react.dev/) with [Vite](https://vitejs.dev/)
- **3D Graphics & Rendering**: 
  - [Three.js](https://threejs.org/) (Core WebGL API)
  - [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/) (React renderer for Three.js)
  - [@react-three/drei](https://github.com/pmndrs/drei) (Useful helpers for R3F)
  - [@react-three/postprocessing](https://github.com/pmndrs/react-postprocessing) (Visual effects)
- **Physics Engine**: [@react-three/rapier](https://github.com/pmndrs/react-three-rapier) / [@react-three/cannon](https://github.com/pmndrs/use-cannon)
- **Animations**: [GSAP](https://gsap.com/) (GreenSock Animation Platform)
- **Styling & UI**: Custom CSS, React Icons, React Fast Marquee
- **Analytics**: Vercel Analytics

## 🛠️ Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Anantraj24/AnantRaj_Portfolio.git
   cd AnantRaj_Portfolio
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

## 📦 Building for Production

To create a production build, run:

```bash
npm run build
```

This will compile the TypeScript code and bundle the assets into the `dist` directory. You can preview the production build using:

```bash
npm run preview
```

