# ElysiaJS + React + Tailwind CSS + DaisyUI + Framer Motion

A modern full-stack web application built with cutting-edge technologies using **Remix-style mixed client and API routes**:

- **Backend**: [ElysiaJS](https://elysiajs.com/) - Fast, type-safe web framework for Bun
- **Frontend**: [React 19](https://react.dev/) - Latest React with TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework via CDN
- **Components**: [DaisyUI](https://daisyui.com/) - Beautiful component library for Tailwind
- **Animations**: [Framer Motion 12](https://www.framer.com/motion/) - Latest motion library
- **Runtime**: [Bun](https://bun.sh/) - Fast JavaScript runtime with native TSX support
- **Architecture**: **Remix-style** - Mixed client and API routes for seamless full-stack development

## Features

- 🚀 **Fast Backend**: ElysiaJS with Swagger documentation
- ⚛️ **Modern Frontend**: React 19 with TypeScript
- 🎨 **Beautiful UI**: Tailwind CSS + DaisyUI components
- ✨ **Smooth Animations**: Framer Motion 12 animations
- 🌙 **Theme Switching**: Light/Dark mode support with server persistence
- 📱 **Responsive Design**: Mobile-first approach
- 🔥 **Hot Reload**: Development with file watching
- 🆕 **Latest Versions**: All packages are up-to-date
- 🔗 **Remix-Style**: Mixed client and API routes for seamless full-stack experience
- 💾 **Server State**: Counter and theme state managed by the server
- ⚡ **Zero Build Step**: Bun handles TypeScript/TSX natively

## Project Structure

```
├── src/
│   ├── components/     # React components
│   │   └── App.tsx    # Main App component with full-stack integration
│   ├── styles/        # CSS and Tailwind
│   │   └── input.css  # Tailwind CSS directives
│   ├── client.tsx     # React entry point
│   └── index.ts       # ElysiaJS server with mixed routes
├── public/            # Static HTML (committed to git)
│   └── index.html     # Main HTML file with CDN dependencies
├── package.json       # Dependencies and scripts
└── tsconfig.json      # TypeScript configuration
```

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed on your system

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

3. Start the development server:

```bash
bun run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## Development

### Available Scripts

- `bun run dev` - Start the ElysiaJS development server with hot reload
- `bun run start` - Start production server
- `bun run build` - No build step needed (Bun handles TSX natively)

### Development Workflow

1. **Backend Development**: Edit `src/index.ts` for API changes
2. **Frontend Development**: Edit React components in `src/components/`
3. **Styling**: Modify `src/styles/input.css` for custom styles
4. **No Build Step**: Bun automatically handles TypeScript/TSX compilation

### How It Works

- **Bun Runtime**: Executes TypeScript/TSX files directly without compilation
- **Hot Reload**: File watching automatically restarts the server on changes
- **CDN Dependencies**: Tailwind CSS loaded from CDN for simplicity
- **Native Support**: Full TypeScript and JSX support out of the box

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
3. Style with Tailwind CSS classes and DaisyUI components

### Adding New API Routes

1. Edit `src/index.ts`
2. Add new routes using ElysiaJS syntax
3. Integrate with React components for seamless full-stack experience
4. Test with the Swagger documentation at `/docs`

### Customizing Tailwind CSS

1. Modify the Tailwind config in `public/index.html`
2. Add custom CSS in `src/styles/input.css`
3. Use DaisyUI components and themes

### Adding Animations

1. Import `motion` from `framer-motion`
2. Wrap components with motion components
3. Add animation properties like `initial`, `animate`, `whileHover`

## Production

### Starting Production Server

```bash
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
- **Tailwind CSS**: Utility-first CSS framework via CDN
- **DaisyUI**: Beautiful component library for Tailwind
- **Framer Motion 12**: Latest animation library for React
- **Bun**: Fast JavaScript runtime with native TSX support
- **Remix-Style Architecture**: Mixed client and API routes

## Why No Build Step?

Thanks to [Bun's native capabilities](https://bun.com/docs/bundler/fullstack):

- ✅ **Native TypeScript/TSX support** - No compilation needed
- ✅ **Fast execution** - Direct file execution
- ✅ **Hot reload** - Automatic server restart on changes
- ✅ **Zero configuration** - Works out of the box
- ✅ **Production ready** - Same performance as compiled code

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
2. Review the [Bun fullstack docs](https://bun.com/docs/bundler/fullstack)
3. Check [DaisyUI documentation](https://daisyui.com/)
4. Review [Framer Motion 12 docs](https://www.framer.com/motion/)
5. Open an issue in this repository

---

Built with ❤️ using the latest modern web technologies and Bun's native capabilities
