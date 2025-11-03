# Next.js + Supabase MVP

A minimal MVP template featuring:
- 🌓 Dark Mode Support
- 🎨 Landing Page with animations
- 📊 User Dashboard
- 👤 User Profile Management

Built with Next.js 15, TypeScript, Tailwind CSS, and Supabase.

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- A Supabase account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/gitmvp-com/nextjs-supabase-mvp.git
cd nextjs-supabase-mvp
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file:
```bash
cp .env.example .env.local
```

4. Configure Supabase:
   - Create a new project at [Supabase](https://supabase.com)
   - Get your project URL and anon key from Project Settings > API
   - Update `.env.local` with your credentials

5. Start the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

### Dark Mode Support
- Automatic dark mode based on system preferences
- Custom color palette optimized for both light and dark themes
- Smooth transitions between themes

### Landing Page
- Modern, animated hero section
- Responsive design
- Framer Motion animations
- Interactive scroll sections

### User Dashboard
- Protected route for authenticated users
- Clean, intuitive interface
- Real-time data updates

### User Profile Management
- View and edit user information
- Account settings
- Profile customization

## Project Structure

```
├── app/                  # Next.js app directory
│   ├── dashboard/        # Dashboard pages
│   ├── profile/          # Profile pages
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Landing page
│   └── globals.css       # Global styles
├── components/           # Reusable components
├── contexts/             # React contexts
├── utils/                # Utility functions
└── public/               # Static assets
```

## Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Backend:** Supabase (placeholder for auth)

## Customization

### Colors
Edit `tailwind.config.ts` to customize the color palette:
```typescript
colors: {
  primary: {
    DEFAULT: '#A78BFA',
    light: '#C4B5FD',
    dark: '#8B5CF6',
  },
  // ... more colors
}
```

### Animations
Modify animations in components using Framer Motion.

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## License

MIT License

## Acknowledgments

Based on [launch-mvp-stripe-nextjs-supabase](https://github.com/ShenSeanChen/launch-mvp-stripe-nextjs-supabase) by ShenSeanChen
