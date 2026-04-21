# 3D MERN Stack Developer Portfolio

A stunning, interactive 3D portfolio website built for a MERN stack developer using Next.js, Three.js, and modern web technologies.

## 🚀 Features

- **Immersive 3D Hero Section**: Interactive Three.js scene with floating geometric shapes and particle effects
- **3D Skill Cards**: Flip cards with 3D transformations showcasing your technical skills
- **Dynamic Project Showcase**: Filterable project gallery with 3D hover effects
- **Smooth Animations**: Powered by Framer Motion for fluid transitions and scroll animations
- **Responsive Design**: Fully responsive across all devices
- **Modern UI/UX**: Dark theme with cyan/purple gradient accents and glass morphism effects
- **Contact Form**: Professional contact section with social links
- **SEO Optimized**: Meta tags and Open Graph support

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **3D Library**: Three.js with React Three Fiber
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS
- **3D Helpers**: @react-three/drei

## 📦 Installation

1. **Clone the repository** (or use the existing folder)
   ```bash
   cd f:\qoder-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Personal Information

Update your personal details in the following files:

- **Hero Section** (`src/components/Hero.tsx`):
  - Your name
  - Title/role
  - Brief description

- **About Section** (`src/components/About.tsx`):
  - Your bio
  - Years of experience
  - Number of projects
  - Technologies count

- **Contact Section** (`src/components/Contact.tsx`):
  - Email address
  - Location
  - GitHub profile
  - LinkedIn profile

- **Footer** (`src/components/Footer.tsx`):
  - Social media links
  - Your name for copyright

### Projects

Edit the projects array in `src/components/Projects.tsx`:
```typescript
const projects = [
  {
    title: 'Your Project Name',
    description: 'Project description...',
    image: '🎯', // Emoji or use actual images
    techStack: ['React', 'Node.js', 'MongoDB'],
    category: 'fullstack', // 'fullstack', 'frontend', or 'backend'
    liveUrl: 'https://your-project.com',
    githubUrl: 'https://github.com/yourusername/project',
  },
  // Add more projects...
];
```

### Skills

Modify the skills array in `src/components/Skills.tsx`:
```typescript
const skills = [
  {
    name: 'Technology Name',
    icon: '⚡', // Emoji
    level: 90, // Proficiency percentage
    description: 'Brief description of your experience...',
  },
  // Add more skills...
];
```

### Colors & Theme

Edit `src/app/globals.css` to change the color scheme:
```css
:root {
  --accent-cyan: #00d4ff;
  --accent-purple: #7c3aed;
  --gradient-primary: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
}
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page combining all sections
│   └── globals.css         # Global styles and custom CSS
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section with 3D background
│   ├── About.tsx           # About me section
│   ├── Skills.tsx          # Skills showcase
│   ├── Projects.tsx        # Projects gallery
│   ├── Contact.tsx         # Contact form
│   ├── Footer.tsx          # Footer
│   └── 3d/
│       ├── HeroScene.tsx       # 3D hero canvas
│       ├── FloatingShapes.tsx  # 3D floating objects
│       ├── SkillCard3D.tsx     # 3D flip card for skills
│       └── ProjectCard3D.tsx   # 3D card for projects
public/
└── assets/                 # Static assets (images, etc.)
```

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Deploy automatically

### Deploy to Netlify

1. Build the project: `npm run build`
2. Upload the `.next` folder to Netlify
3. Configure build settings

## 🎯 Performance Optimizations

- **Lazy Loading**: 3D components are loaded dynamically
- **Suspense**: Three.js scenes use React Suspense
- **Memoization**: Particle positions are memoized
- **Responsive 3D**: Canvas adapts to screen size
- **Image Optimization**: Next.js Image component ready

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Design Features

- **Dark Theme**: Modern dark background with vibrant accents
- **Glass Morphism**: Frosted glass effects on cards and navigation
- **Gradient Accents**: Cyan to purple gradients throughout
- **3D Effects**: Perspective transforms and depth
- **Smooth Scrolling**: Smooth scroll navigation
- **Custom Scrollbar**: Themed scrollbar matching the design

## 📞 Support

For questions or issues, please open an issue in the repository.

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Three.js community for 3D capabilities
- Framer Motion for smooth animations
- Tailwind CSS for utility-first styling

---

**Built with ❤️ using Next.js, Three.js, and Tailwind CSS**
