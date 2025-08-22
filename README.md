# ElysiaJS + React + Tailwind CSS 4 + DaisyUI + Framer Motion

A modern full-stack web application built with cutting-edge technologies using **Remix-style mixed client and API routes**:

- **Backend**: [ElysiaJS](https://elysiajs.com/) - Fast, type-safe web framework for Bun
- **Frontend**: [React 19](https://react.dev/) - Latest React with TypeScript
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) - Latest utility-first CSS framework
- **Components**: [DaisyUI 5](https://daisyui.com/) - Latest component library for Tailwind
- **Animations**: [Framer Motion 12](https://www.framer.com/motion/) - Latest motion library
- **Runtime**: [Bun](https://bun.sh/) - Fast JavaScript runtime
- **Architecture**: **Remix-style** - Mixed client and API routes for seamless full-stack development

## Features

- 🚀 **Fast Backend**: ElysiaJS with Swagger documentation
- ⚛️ **Modern Frontend**: React 19 with TypeScript
- 🎨 **Beautiful UI**: Tailwind CSS 4 + DaisyUI 5 components
- ✨ **Smooth Animations**: Framer Motion 12 animations
- 🌙 **Theme Switching**: Light/Dark mode support with server persistence
- 📱 **Responsive Design**: Mobile-first approach
- 🔥 **Hot Reload**: Development with file watching
- 🆕 **Latest Versions**: All packages are up-to-date
- 🔗 **Remix-Style**: Mixed client and API routes for seamless full-stack experience
- 💾 **Server State**: Counter and theme state managed by the server

## Project Structure

```
├── src/
│   ├── components/     # React components
│   │   └── App.tsx    # Main App component with full-stack integration
│   ├── styles/        # CSS and Tailwind
│   │   └── input.css  # Tailwind CSS 4 directives
│   ├── client.tsx     # React entry point
│   └── index.ts       # ElysiaJS server with mixed routes
├── public/            # Static HTML (committed to git)
│   └── index.html     # Main HTML file
├── dist/              # Built assets (ignored by git, generated during CI/CD)
│   ├── styles/        # Compiled CSS
│   └── js/           # Compiled JavaScript
├── package.json       # Dependencies and scripts
└── tsconfig.json      # TypeScript configuration
```

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed on your system
- Node.js 18+ (for some build tools)

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd elysiajs-hello-world
```

2. Install dependencies:

```bash
bun install
```

3. Build the frontend assets:

```bash
bun run build
```

4. Start the development server:

```bash
bun run dev
```

5. Open your browser and navigate to `http://localhost:3000`

## Development

### Available Scripts

- `bun run dev` - Start the ElysiaJS development server
- `bun run dev:frontend` - Watch and compile Tailwind CSS 4
- `bun run dev:react` - Watch and compile React components
- `bun run dev:all` - Full development setup (recommended)
- `bun run build` - Build all frontend assets for production
- `bun run start` - Start production server

### Development Workflow

1. **Backend Development**: Edit `src/index.ts` for API changes
2. **Frontend Development**: Edit React components in `src/components/`
3. **Styling**: Modify `src/styles/input.css` for custom styles
4. **Build**: Run `bun run build` to compile all assets

### File Watching

For development, you can run multiple watch processes:

```bash
# Terminal 1: Backend server
bun run dev

# Terminal 2: Frontend assets
bun run dev:frontend

# Terminal 3: React components
bun run dev:react
```

## API Endpoints (Remix-Style Mixed Routes)

- `GET /` - Serves the React application
- `POST /hello` - Hello message from ElysiaJS
- `POST /test` - Test endpoint
- `POST /hau` - Custom endpoint
- `POST /counter` - Server-managed counter state
- `POST /theme` - Server-managed theme switching
- `GET /docs` - Swagger API documentation

## Full-Stack Features

### Server-Managed State

- **Counter**: Increment/decrement operations processed by the server
- **Theme**: Theme changes persisted and validated by the server
- **Real-time Feedback**: Server responses provide immediate user feedback

### Interactive Components

- **Clickable Cards**: Each technology card tests its corresponding API endpoint
- **Loading States**: Visual feedback during server operations
- **Error Handling**: Graceful error handling with user-friendly messages

## Customization

### Adding New Components

1. Create new components in `src/components/`
2. Import and use them in `App.tsx`
3. Style with Tailwind CSS 4 classes and DaisyUI components

### Adding New API Routes

1. Edit `src/index.ts`
2. Add new routes using ElysiaJS syntax
3. Integrate with React components for seamless full-stack experience
4. Test with the Swagger documentation at `/docs`

### Customizing Tailwind CSS 4

1. Modify `src/styles/input.css` for custom CSS
2. Use `@layer` directives for organized styling
3. Add new DaisyUI themes in your CSS

### Adding Animations

1. Import `motion` from `framer-motion`
2. Wrap components with motion components
3. Add animation properties like `initial`, `animate`, `whileHover`

## Production

### Building for Production

```bash
bun run build
NODE_ENV=production bun run start
```

### Deployment

The project includes a `render.yaml` file for easy deployment on Render.com. You can also deploy to:

- Vercel
- Netlify
- Railway
- Any Node.js hosting platform

## Technologies Used

- **ElysiaJS**: Modern web framework for Bun
- **React 19**: Latest UI library with hooks and concurrent features
- **TypeScript**: Type-safe JavaScript development
- **Tailwind CSS 4**: Latest utility-first CSS framework
- **DaisyUI 5**: Latest component library for Tailwind
- **Framer Motion 12**: Latest animation library for React
- **Bun**: Fast JavaScript runtime and package manager
- **esbuild**: Fast JavaScript bundler
- **Remix-Style Architecture**: Mixed client and API routes

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you encounter any issues or have questions:

1. Check the [ElysiaJS documentation](https://elysiajs.com/)
2. Review the [Tailwind CSS 4 docs](https://tailwindcss.com/docs)
3. Check [DaisyUI 5 documentation](https://daisyui.com/)
4. Review [Framer Motion 12 docs](https://www.framer.com/motion/)
5. Open an issue in this repository

---

Built with ❤️ using the latest modern web technologies and Remix-style architecture
