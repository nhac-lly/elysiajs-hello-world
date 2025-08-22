# Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies

```bash
bun install
```

### 2. Build Frontend Assets

```bash
bun run build
```

### 3. Start Development Server

```bash
bun run dev
```

Open your browser to `http://localhost:3000` to see your React app!

## 🔥 Development Workflow

### Option 1: Backend Only (API Development)

```bash
bun run dev
```

### Option 2: Frontend Only (UI Development)

```bash
# Terminal 1: Watch Tailwind CSS 4
bun run dev:frontend

# Terminal 2: Watch React Components
bun run dev:react
```

### Option 3: Full Stack Development (Recommended)

```bash
bun run dev:all
```

This runs all three processes concurrently:

- ElysiaJS backend server
- Tailwind CSS 4 watcher
- React component watcher

## 📁 Project Structure

```
src/
├── components/     # React components
│   └── App.tsx    # Main app with full-stack integration
├── styles/        # CSS and Tailwind
│   └── input.css  # Tailwind CSS 4 directives
├── client.tsx     # React entry point
└── index.ts       # ElysiaJS server with mixed routes

public/            # Built assets
├── index.html     # Main HTML
├── styles/        # Compiled CSS
└── js/           # Compiled JavaScript
```

## 🎨 What's Included

- **React 19** with TypeScript
- **Tailwind CSS 4** for utility-first styling
- **DaisyUI 5** for beautiful components
- **Framer Motion 12** for smooth animations
- **ElysiaJS** backend with mixed client/API routes
- **Hot reload** for development
- **Theme switching** with server persistence
- **Server-managed state** for counter and theme
- **Remix-style architecture** for seamless full-stack experience

## 🛠️ Available Scripts

- `bun run dev` - Backend server only
- `bun run dev:frontend` - Watch Tailwind CSS 4
- `bun run dev:react` - Watch React components
- `bun run dev:all` - Full development setup
- `bun run build` - Build for production
- `bun run start` - Start production server

## 🌟 Features Demo

The included React app showcases:

- **Interactive Cards**: Click to test API endpoints
- **Server-Managed Counter**: State managed by the server
- **Theme Switching**: Persisted and validated by the server
- **Loading States**: Visual feedback during operations
- **Error Handling**: Graceful error handling
- **Real-time Feedback**: Server responses displayed to user

## 🔧 Customization

### Add New Components

1. Create in `src/components/`
2. Import in `App.tsx`
3. Style with Tailwind CSS 4 classes

### Add New API Routes

1. Edit `src/index.ts`
2. Add new routes using ElysiaJS syntax
3. Integrate with React components for full-stack experience
4. Test at `/docs` (Swagger)

### Modify Styling

1. Edit `src/styles/input.css`
2. Use `@layer` directives for organized styling
3. Add DaisyUI 5 themes

## 🚨 Troubleshooting

### Build Errors

```bash
# Clean and rebuild
rm -rf public/styles/output.css public/js/app.js
bun run build
```

### Port Already in Use

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### Dependencies Issues

```bash
# Clean install
rm -rf node_modules bun.lock
bun install
```

## 📚 Next Steps

1. **Customize the UI**: Modify `src/components/App.tsx`
2. **Add new API endpoints**: Edit `src/index.ts`
3. **Create new components**: Add to `src/components/`
4. **Deploy**: Use `bun run build` then deploy to your platform

## 🔗 Remix-Style Architecture

This project uses a **Remix-style approach** where:

- **Client and API routes are mixed** in the same server
- **No separate `/api/` prefix** - routes are direct and intuitive
- **Server manages state** for counter, theme, and other features
- **Seamless integration** between frontend and backend
- **Real-time feedback** from server operations

---

Happy coding! 🎉
