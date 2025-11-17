# ConexIA 360

Corporate website for automation and artificial intelligence solutions. Built with Next.js 16, React 19, and Tailwind CSS v4.

## 🚀 Features

- **Next.js 16** with App Router
- **React 19** with TypeScript in strict mode
- **Tailwind CSS v4** for styling
- **Framer Motion** for smooth animations
- **Three.js** for 3D effects (interactive particle cloud)
- **Organized components** in logical folders (layout, sections, shared, animations, ui)
- **Responsive design** centered and professional
- **Custom logo** ConexIA 360 with glow effects

## 📦 Tech Stack

- **Framework:** Next.js 16.0.3
- **UI Library:** React 19.2.0
- **Language:** TypeScript 5.9.3
- **Styling:** Tailwind CSS v4 + PostCSS
- **Animations:** Framer Motion 12.23.24
- **3D Graphics:** Three.js 0.181.1
- **UI Components:** Radix UI (Toast, Slot)
- **Icons:** Lucide React
- **Package Manager:** pnpm

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/allanbarahona-web3/conexia360.git

# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
conexia-nextjs/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles + Tailwind v4 config
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main page
├── components/
│   ├── animations/        # Animated effects (TypingEffect, FloatingBubbles)
│   ├── layout/            # Layout components (Header, Footer, Logo, PointCloud)
│   ├── sections/          # Page sections (Hero, Services, Cases, Team, Contact)
│   ├── shared/            # Shared components (SectionWrapper, SectionHeader)
│   └── ui/                # Base UI components (Button, Toast)
├── lib/                   # Utilities
└── public/                # Static files
```

## 🎨 Main Components

### Layout
- **Header:** Fixed navigation with logo and horizontal menu
- **Logo:** Reusable component with configurable sizes
- **Footer:** Footer with links
- **PointCloud:** Interactive 3D background with particles

### Sections
- **Hero:** Landing with typing effect
- **Services:** Services grid (AI Chatbots, Automations, Marketing)
- **Cases:** Success stories
- **Team:** Team members
- **Contact:** Contact form

## 🎯 Available Scripts

```bash
pnpm dev      # Development server
pnpm build    # Production build
pnpm start    # Run production build
pnpm lint     # ESLint linter
```

## 🌈 Color Theme

- **Primary:** #00FFD1 (Cyan)
- **Accent:** #0066FF (Blue)
- **Background:** Black gradient (#000000 → #111111)
- **Text:** White (#FFFFFF) with grays for secondary

## 📝 Technical Notes

- Project migrated from React + Vite to Next.js + TypeScript
- Tailwind v4 uses CSS configuration (`@theme`) instead of `tailwind.config.ts`
- TypeScript strict mode enabled
- All components with explicit types
- Centered layout with `max-w-6xl` for main content

## 📄 License

© 2025 Cuenta Conmigo Solutions. All rights reserved.

## 🤝 Contributing

This is a private corporate project. For inquiries, contact the development team.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
