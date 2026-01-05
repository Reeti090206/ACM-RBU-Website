# ACM RBU Student Chapter Website 🚀

A stunning, futuristic website for the ACM RBU Student Chapter featuring glassmorphism effects, particle animations, and interactive components.

## ✨ Features

### 🎨 Visual Design
- **Glassmorphism UI** with backdrop blur effects
- **Animated Mesh Gradient Background**
- **Custom Sky Blue Scrollbar**
- **Particle System Canvas** with interactive mouse effects
- **Neon Glow Effects** and pulsing animations

### 📱 Sections

#### 1. **Navbar**
- Floating glassmorphic design
- Shimmer animation on "Join Now" button
- Responsive mobile menu
- Smooth scroll navigation

#### 2. **Hero Section**
- Split-screen layout
- Typewriter effect for headline
- Interactive 3D digital sphere that follows mouse
- Canvas particle background with 80+ particles
- Animated scroll indicator

#### 3. **Mission Section**
- 3 feature cards (Innovation, Leadership, Networking)
- 3D tilt effect on mouse movement
- Glassmorphic cards with pulsing glow
- Icon containers with gradient backgrounds

#### 4. **About Section**
- Asymmetrical grid layout
- Vertical sidebar text
- Animated counting statistics (500+ members, 50+ events)
- Intersection Observer for scroll animations

#### 5. **Events Calendar**
- Vertical cyber-timeline with glowing nodes
- 6 sample events with real details
- Filter system (All, Workshops, Hackathons, Seminars, Competitions)
- Neon date badges
- Status indicators (Upcoming, Live, Completed)
- Border-trace animation on register buttons
- Slide-in animations on scroll

#### 6. **Team Section**
- **33 team members** across 5 hierarchical rows
  - Row 1: Lead Office Bearers (5 members) - Gold borders
  - Row 2: Technical Team (8 members)
  - Row 3: Event Management (4 members)
  - Row 4: Graphics & Design (4 members)
  - Row 5: Publicity & Outreach (4 members)
- Squircle image masks
- Hover overlays with social icons
- Click-to-open bio modals
- Staggered fade-in animations
- Responsive grid (5→3→2→1 columns)

#### 7. **FAQ Section**
- Cyber-accordion with 7 questions
- Plus/minus icon toggle
- Spring animation on expand
- Left-border glow effect when active
- Smooth height transitions

#### 8. **Footer**
- Wave separator at top
- 4-column layout (About, Quick Links, Resources, Contact)
- Social media icons with float animation
- Newsletter subscription form
- Contact information

### 🛠️ Technical Features

- **Smooth Scroll** to all sections
- **Back-to-Top Button** (appears after 500px scroll)
- **Intersection Observer API** for scroll animations
- **Responsive Design** for all screen sizes
- **Performance Optimized** with lazy loading
- **Accessibility** with ARIA labels
- **SEO Friendly** with semantic HTML

## 📁 Project Structure

```
ACM_UI/front/
├── index.html           # Main HTML file
├── css/
│   ├── global.css      # Global styles, theme, utilities
│   ├── navbar.css      # Navbar styles
│   ├── hero.css        # Hero section styles
│   ├── mission.css     # Mission & About styles
│   ├── events.css      # Events timeline styles
│   ├── team.css        # Team grid & modal styles
│   ├── faq.css         # FAQ accordion styles
│   └── footer.css      # Footer styles
└── js/
    ├── particles.js    # Particle system canvas
    ├── navbar.js       # Navbar functionality
    ├── hero.js         # Hero animations & interactions
    ├── mission.js      # 3D tilt effects & counters
    ├── events.js       # Event filters & animations
    ├── team.js         # Team modals & animations
    ├── faq.js          # FAQ accordion logic
    └── utils.js        # Smooth scroll, back-to-top
```

## 🎨 Color Palette

```css
--sky-blue: #E0F2FE       /* Light accents */
--deep-navy: #0F172A      /* Primary background */
--electric-blue: #38BDF8  /* Primary accent */
--white: #FFFFFF          /* Text */
```

## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No build process required - pure HTML/CSS/JS

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ACM_UI/front
```

2. Open `index.html` in your browser:
```bash
# Windows
start index.html

# Mac
open index.html

# Linux
xdg-open index.html
```

Or use a local server:
```bash
# Python 3
python -m http.server 8000

# Node.js with http-server
npx http-server
```

3. Visit `http://localhost:8000` in your browser

## 📦 Dependencies

All dependencies are loaded via CDN:

- **Tailwind CSS** - Utility-first CSS framework
- **Google Fonts (Sora)** - Typography
- **Lucide Icons** - Icon library

No npm install required!

## 🎯 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- **Desktop**: > 968px
- **Tablet**: 768px - 968px
- **Mobile**: < 768px

## 🔧 Customization

### Changing Colors

Edit `css/global.css`:
```css
:root {
  --sky-blue: #YOUR_COLOR;
  --deep-navy: #YOUR_COLOR;
  --electric-blue: #YOUR_COLOR;
}
```

### Adding Team Members

Edit `index.html` in the team section:
```html
<div class="member-card" 
     data-bio="Member bio text"
     data-linkedin="https://linkedin.com/..."
     data-twitter="https://twitter.com/..."
     data-github="https://github.com/...">
  <!-- Member card content -->
</div>
```

### Adding Events

Edit `index.html` or use JavaScript:
```javascript
const eventData = {
  day: '15',
  month: 'JAN',
  category: 'workshop',
  title: 'Event Title',
  description: 'Event description...',
  status: 'upcoming',
  time: '10:00 AM - 4:00 PM',
  location: 'Venue Name',
  capacity: '50'
};
```

## 🐛 Known Issues

None currently. Please report issues via GitHub Issues.

## 🤝 Contributing

This is an educational project. Feel free to fork and customize for your own chapter!

## 📄 License

MIT License - Feel free to use this template for your student chapter.

## 👥 Credits

**Design & Development**: ACM RBU Web Team
**Framework**: Vanilla JavaScript, CSS3, HTML5
**Icons**: Lucide Icons
**Fonts**: Google Fonts (Sora)

## 📞 Support

For questions or support:
- Email: acm@rbu.edu
- Discord: [Join our server]
- Twitter: @acmrbu

## 🎓 Learning Resources

This project demonstrates:
- Modern CSS (Flexbox, Grid, Custom Properties)
- Vanilla JavaScript (ES6+, Classes, Modules)
- Canvas API for particle systems
- Intersection Observer API
- Responsive Design principles
- Glassmorphism effects
- Animation techniques

---

**Made with 💙 by ACM RBU Web Team**

*Last Updated: January 5, 2026*
