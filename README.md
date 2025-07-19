# Business Landing Page

A modern, responsive business landing page built with React 18 and powered by cutting-edge frontend technologies. This project showcases a professional business presence with smooth animations, interactive data visualizations, and a mobile-first design approach.

## ✨ Features

- **Modern React Architecture**: Built with React 18's latest features including concurrent rendering
- **Lightning Fast**: Powered by Vite for instant hot module replacement and optimized builds
- **State Management**: Redux Toolkit for predictable state management
- **Responsive Design**: Mobile-first approach with TailwindCSS utility classes
- **Smooth Animations**: Framer Motion integration for fluid UI transitions
- **Data Visualization**: Interactive charts and graphs using D3.js and Recharts
- **Form Handling**: Efficient form management with React Hook Form
- **Modern Routing**: React Router v6 for seamless navigation
- **Type Safety**: Full TypeScript support for better development experience
- **Testing Ready**: Jest and React Testing Library setup included
- **SEO Optimized**: Built with performance and search engine optimization in mind

## 🛠️ Tech Stack

### Core Technologies
- **React 18** - Latest React version with improved rendering and concurrent features
- **Vite** - Lightning-fast build tool and development server
- **Redux Toolkit** - State management with simplified Redux setup
- **TailwindCSS** - Utility-first CSS framework with extensive customization

### UI & UX
- **Framer Motion** - Smooth UI animations and transitions
- **React Router v6** - Declarative routing for React applications
- **React Hook Form** - Efficient form handling and validation

### Data Visualization
- **D3.js** - Powerful data visualization library
- **Recharts** - React charting library built on D3

### Development & Testing
- **Jest** - JavaScript testing framework
- **React Testing Library** - Simple and complete testing utilities
- **ESLint** - Code linting and quality assurance

## 📋 Prerequisites

Before getting started, ensure you have the following installed:

- **Node.js** (v14.x or higher)
- **npm** or **yarn** package manager
- Modern web browser for testing

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/adas-ops/business_landing-page.git
cd business_landing-page
```

### 2. Install Dependencies

```bash
# Using npm
npm install

# Or using yarn
yarn install
```

### 3. Environment Setup

Create a `.env` file in the root directory:

```env
VITE_API_URL=your_api_endpoint
VITE_CONTACT_EMAIL=contact@yourbusiness.com
VITE_ANALYTICS_ID=your_analytics_id
```

### 4. Start Development Server

```bash
# Using npm
npm start

# Or using yarn
yarn start
```

Your application will be available at `http://localhost:3000`

## 📁 Project Structure

```
business_landing-page/
├── public/                    # Static assets
│   ├── images/               # Image assets
│   ├── icons/                # Icon files
│   └── favicon.ico           # Site favicon
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── common/          # Shared components
│   │   ├── forms/           # Form components
│   │   └── charts/          # Data visualization components
│   ├── pages/               # Page components
│   │   ├── HomePage/        # Landing page
│   │   ├── AboutPage/       # About section
│   │   └── ContactPage/     # Contact page
│   ├── styles/              # Global styles and Tailwind configuration
│   │   ├── globals.css      # Global CSS styles
│   │   └── components.css   # Component-specific styles
│   ├── store/               # Redux store configuration
│   │   ├── slices/          # Redux slices
│   │   └── index.js         # Store setup
│   ├── hooks/               # Custom React hooks
│   ├── utils/               # Utility functions
│   ├── App.jsx              # Main application component
│   ├── Routes.jsx           # Application routes
│   └── index.jsx            # Application entry point
├── .env                     # Environment variables
├── index.html               # HTML template
├── package.json             # Project dependencies and scripts
├── tailwind.config.js       # Tailwind CSS configuration
├── vite.config.js           # Vite configuration
└── README.md                # Project documentation
```

## 🎨 Styling & Theme

This project uses **TailwindCSS** with additional plugins for enhanced functionality:

### Included Plugins
- **Forms Plugin** - Enhanced form styling
- **Typography Plugin** - Beautiful text styling
- **Aspect Ratio Plugin** - Responsive element ratios
- **Container Queries** - Component-specific responsive design
- **Fluid Typography** - Responsive text scaling
- **Animation Utilities** - Custom animation classes

### Responsive Design
- Mobile-first approach
- Breakpoint system: `sm`, `md`, `lg`, `xl`, `2xl`
- Fluid typography that scales with screen size
- Optimized for all device types

## 🛣️ Routing

Add new routes to your application by updating the `Routes.jsx` file:

```jsx
import { useRoutes } from "react-router-dom";
import HomePage from "pages/HomePage";
import AboutPage from "pages/AboutPage";
import ContactPage from "pages/ContactPage";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/about", element: <AboutPage /> },
    { path: "/contact", element: <ContactPage /> },
    { path: "/services", element: <ServicesPage /> },
    // Add more routes as needed
  ]);
  
  return element;
};

export default ProjectRoutes;
```

## 📊 Data Visualization

The project includes integrated data visualization capabilities:

- **Interactive Charts** with Recharts
- **Custom Visualizations** with D3.js
- **Responsive Design** - Charts adapt to screen size
- **Animation Support** - Smooth chart transitions
- **Multiple Chart Types** - Line, bar, pie, area charts

## 🔧 Development Scripts

```bash
# Start development server
npm start

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm test

# Run linting
npm run lint

# Format code
npm run format
```

## 🚀 Production Build

Build the application for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory, optimized and ready for deployment.

## 📱 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on every push

### Netlify
1. Connect repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Traditional Hosting
1. Run `npm run build`
2. Upload the `dist` folder to your web server
3. Configure your server for SPA routing

## 🧪 Testing

The project includes a comprehensive testing setup:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## 🔧 Configuration

### Vite Configuration
Customize build settings in `vite.config.js`:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
  },
})
```

### Tailwind Configuration
Extend Tailwind in `tailwind.config.js`:

```javascript
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#your-brand-color',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support & Contact

For support, questions, or business inquiries:

- **Issues**: [GitHub Issues](https://github.com/adas-ops/business_landing-page/issues)
- **Discussions**: [GitHub Discussions](https://github.com/adas-ops/business_landing-page/discussions)
- **Email**: contact@adas-ops.com

## 🌟 Acknowledgments

- [React](https://reactjs.org/) - The library that powers our UI
- [Vite](https://vitejs.dev/) - For the amazing development experience
- [TailwindCSS](https://tailwindcss.com/) - For beautiful, responsive styling
- [Framer Motion](https://www.framer.com/motion/) - For smooth animations
- [Recharts](https://recharts.org/) - For interactive data visualizations

---

**Built with ❤️ by the ADAS Ops **

*Creating modern, responsive business solutions for the digital age.*
