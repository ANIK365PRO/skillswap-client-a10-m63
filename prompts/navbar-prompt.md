## No-1: navbar prompt --
Create a modern, premium, fully responsive navbar for a freelance marketplace website called "SkillSwap" using Next.js 15, Tailwind CSS, HeroUI, and Lucide React icons.
Color System:

Primary: #0F4C81
Secondary: #1E6091
Accent: #FFC300
Light Mode Background: #F8FAFC
Dark Mode Background: #0F172A
Requirements:

Sticky navbar with backdrop blur effect
Modern SaaS-style design
Logo on the left (SkillSwap)
Navigation links:
Home
Browse Tasks
Browse Freelancers
Theme Toggle (Light/Dark)
Notification icon
User avatar dropdown
Guest User View:

Login button
Register button (accent color)
Logged-in User View:

Dashboard button
Profile dropdown
Logout button
Responsive Requirements:

Desktop: horizontal menu
Tablet: compact layout
Mobile: hamburger menu with slide drawer
Smooth animations using Framer Motion
UI/UX Requirements:

Clean spacing
Active route highlight
Hover animations
Modern glassmorphism effect
Professional freelance marketplace appearance
Similar quality to Upwork, Fiverr, and Linear
Output:

Complete React component
Tailwind classes included
Dark mode support
Accessible navigation
Production-ready code


Design the navbar as a screenshot:

Data is the component already already loaded:

export default function NavBar() {


  return (
    <div>
      navbar 
    </div>
  );
}


to create the navbar use the heroui component struture:

import { useState } from "react";
import { Link, Button } from "@heroui/react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <div>Logo</div>
        </div>
        <ul className="hidden items-center gap-4 md:flex">
          <li>
            <Link href="#">Features</Link>
          </li>
          <li>
            <Link href="#">Pricing</Link>
          </li>
        </ul>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            <li>
              <Link href="#" className="block py-2">
                Features
              </Link>
            </li>
            <li>
              <Link href="#" className="block py-2">
                Pricing
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}


## No-2: navbar prompt (corrections) + color plate image--

i am using JS not TS . use this color plate image code :