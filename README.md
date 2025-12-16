# 🎬 Movie Discovery Web Application

A modern, responsive movie discovery platform built with React, featuring movie browsing, search, user authentication, and personalized favorites management.

## ✨ Features

### Core Features
- 🎥 **Browse Movies** - Explore a vast collection of movies with grid and slider views
- 🔍 **Advanced Search** - Search movies by title, genre, or keywords
- 📄 **Movie Details** - View comprehensive information about any movie
- 👤 **Person/Actor Details** - Explore actor profiles and filmography
- ⭐ **Top Rated Movies** - Discover the highest-rated films
- 🔥 **Most Popular Movies** - See what's trending now
- 🎠 **Movie Carousels** - Interactive sliders for featured content

### User Features
- 🔐 **User Authentication** - Secure login and registration system
- 👨‍💼 **User Profile** - Manage personal information
- ✏️ **Edit Profile** - Update user details and preferences
- ❤️ **Favorite Movies** - Save and manage your favorite films
- 🌓 **Dark/Light Theme** - Toggle between dark and light modes for comfortable viewing

### UI/UX Features
- 📱 **Responsive Design** - Seamless experience across all devices
- 🎨 **Modern UI** - Built with Tailwind CSS and Radix UI components
- 🔄 **Pagination** - Navigate through large collections efficiently
- ⚡ **Fast Performance** - Optimized with Vite for lightning-fast builds
- 🎭 **Loading States** - Smooth loading indicators for better UX

## 🛠️ Tech Stack

### Frontend Framework
- **React 19.2.0** - Latest React with hooks and modern features
- **React Router DOM 7.10.1** - Client-side routing and navigation
- **Vite 7.2.4** - Next-generation frontend tooling

### UI & Styling
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **Radix UI** - Accessible, unstyled component primitives
  - Dropdown Menu
  - Label
  - Separator
  - Switch
- **Lucide React** - Beautiful, customizable icons
- **class-variance-authority** - Component variant management
- **tailwind-merge** - Efficient Tailwind class merging

### Form & Validation
- **React Hook Form 7.68.0** - Performant form management
- **Zod 4.2.0** - TypeScript-first schema validation
- **@hookform/resolvers** - Form validation integration

### Development Tools
- **ESLint 9.39.1** - Code quality and consistency
- **Vite Plugin React** - Fast refresh and JSX support

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── AppPagination.jsx
│   ├── BannerSlider.jsx
│   ├── MovieCard.jsx
│   ├── MovieGrid.jsx
│   ├── MovieSlider.jsx
│   ├── PersonCard.jsx
│   ├── icons/          # Custom icon components
│   ├── layouts/        # Layout components
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Loading.jsx
│   │   ├── MainLayout.jsx
│   │   ├── MostPopularMovies.jsx
│   │   ├── NavBar.jsx
│   │   └── TopRatingMovies.jsx
│   └── ui/             # Shadcn-style UI primitives
│       ├── button.jsx
│       ├── dropdown-menu.jsx
│       ├── field.jsx
│       ├── input.jsx
│       ├── label.jsx
│       ├── pagination.jsx
│       ├── separator.jsx
│       └── switch.jsx
├── contexts/           # React Context providers
│   ├── AuthContext.jsx
│   └── ThemeContext.jsx
├── hooks/              # Custom React hooks
│   └── useFetch.jsx
├── lib/                # Utility functions
│   └── utils.js
├── pages/              # Application pages
│   ├── EditProfile.jsx
│   ├── FavoriteMovies.jsx
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── MovieDetail.jsx
│   ├── PersonDetail.jsx
│   ├── Profile.jsx
│   ├── Register.jsx
│   └── SearchResult.jsx
├── services/           # API services
│   └── api.js
├── assets/             # Static assets
├── App.jsx             # Root application component
├── main.jsx            # Application entry point
└── index.css           # Global styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Web-development-Homework-2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm start` | Alias for `npm run dev` |
| `npm run build` | Build production-ready bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |

## 🎨 Key Components

### Layout Components
- **MainLayout** - Main application wrapper with header, navigation, and footer
- **Header** - Top header with branding and user controls
- **NavBar** - Navigation menu with routing links
- **Footer** - Site footer with information and links

### Movie Components
- **MovieCard** - Individual movie display card with poster and details
- **MovieGrid** - Grid layout for movie collections
- **MovieSlider** - Carousel/slider for featured movies
- **BannerSlider** - Hero banner with rotating movie highlights

### User Components
- **Profile** - User profile page displaying user information
- **EditProfile** - Form for updating user details
- **FavoriteMovies** - Collection of user's saved favorite movies

### UI Components
- **Button** - Customizable button with variants
- **Input** - Form input fields with validation
- **Switch** - Toggle switch for theme and settings
- **Pagination** - Navigation for paginated content
- **DropdownMenu** - Accessible dropdown menus

## 🔐 Authentication

The application includes a complete authentication system:
- User registration with form validation
- Secure login functionality
- Protected routes for authenticated users
- Persistent authentication state via AuthContext

## 🌓 Theme Support

- **Light/Dark Mode** - Toggle between themes
- **Theme Persistence** - Remember user preference
- **ThemeContext** - Global theme state management
- **Smooth Transitions** - Animated theme switching

## 🔗 API Integration

The application integrates with a movie database API (likely TMDB - The Movie Database):
- Fetch popular movies
- Fetch top-rated movies
- Search movies by query
- Get movie details
- Get person/actor information
- Manage user favorites

## 🎯 Responsive Breakpoints

The application is fully responsive with the following breakpoints:
- Mobile: < 576px
- Tablet: 576px - 768px
- Desktop: 768px - 992px
- Large Desktop: > 992px

## 🧩 State Management

- **React Context API** - Global state for authentication and theme
- **Custom Hooks** - Reusable logic (useFetch for API calls)
- **React Hook Form** - Form state management
- **Local State** - Component-level state with useState/useReducer

## 🎨 Styling Approach

- **Tailwind CSS** - Utility-first styling
- **Component Variants** - class-variance-authority for component states
- **CSS Variables** - Theme customization
- **Responsive Design** - Mobile-first approach

## 📦 Build & Deployment

### Build for Production
```bash
npm run build
```

Output will be in the `dist/` folder, ready for deployment.

### Preview Production Build
```bash
npm run preview
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is created for educational purposes as part of Web Development coursework.

## 👨‍💻 Author

**Student ID:** 23120387  
**Course:** Web Development - Homework 2

## 🙏 Acknowledgments

- [TMDB API](https://www.themoviedb.org/documentation/api) - Movie database
- [React](https://react.dev/) - Frontend framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Radix UI](https://www.radix-ui.com/) - UI components
- [Vite](https://vitejs.dev/) - Build tool

---

Made with ❤️ for Web Development Course
