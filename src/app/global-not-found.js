"use client";

// Import global styles and fonts
import './globals.css'
import { Inter } from 'next/font/google'
import { Link, Button } from '@heroui/react'
import { ArrowLeft, Home, Layers } from 'lucide-react'
import { useRouter } from 'next/navigation'
 
const inter = Inter({ subsets: ['latin'] })
 
export default function GlobalNotFound({ isDarkMode = false }) {
  const router = useRouter();

  return (
    <html lang="en" className={inter.className}>
      <body 
        style={{ 
          backgroundColor: isDarkMode ? '#0F172A' : '#F8FAFC',
          margin: 0 
        }}
      >
        {/* CENTERED LAYOUT WRAPPER */}
        <div className="fixed inset-0 w-screen h-screen flex flex-col items-center justify-center px-6 text-center select-none">
          
          {/* BRAND LOGO BADGE */}
          <div className="flex items-center gap-2.5 font-bold text-lg tracking-tight mb-8">
            <div 
              style={{ backgroundColor: '#0F4C81', color: '#FFC300' }}
              className="flex h-8 w-8 items-center justify-center rounded-xl shadow-md"
            >
              <Layers className="h-4 w-4" />
            </div>
            <span style={{ color: isDarkMode ? '#F8FAFC' : '#111827' }}>
              Skill<span style={{ color: isDarkMode ? '#FFC300' : '#1E6091' }}>Swap</span>
            </span>
          </div>

          {/* GIANT METRIC HEADER */}
          <h1 
            style={{ color: isDarkMode ? '#F8FAFC' : '#111827' }} 
            className="text-5xl lg:text-6xl font-bold tracking-tight mb-3"
          >
            404 - Page Not Found
          </h1>

          {/* PARAGRAPH BODY */}
          <p 
            style={{ color: isDarkMode ? '#CBD5E1' : '#6B7280' }} 
            className="text-base font-normal max-w-sm mb-8 leading-relaxed"
          >
            The page you're looking for doesn't exist, has been moved, or the URL may be incorrect.
          </p>

          {/* ACTION BUTTON SYSTEM */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            
            {/* GO BACK (Triggers browser back history) */}
            <Button
              onClick={() => router.back()}
              variant="bordered"
              style={{
                backgroundColor: isDarkMode ? 'transparent' : '#FFFFFF',
                borderColor: isDarkMode ? '#CBD5E1' : '#0F4C81',
                color: isDarkMode ? '#FFFFFF' : '#0F4C81'
              }}
              className="w-full sm:w-auto px-6 h-11 border rounded-xl font-semibold text-sm shadow-sm transition-transform duration-200 hover:scale-[1.02]"
              startContent={<ArrowLeft className="h-4 w-4" />}
            >
              Go Back
            </Button>

            {/* BACK TO HOME (Navigates to root marketplace) */}
            <Button
              as={Link}
              href="/"
              style={{
                backgroundColor: isDarkMode ? '#1E6091' : '#0F4C81',
                color: '#FFFFFF'
              }}
              className="w-full sm:w-auto px-6 h-11 rounded-xl font-semibold text-sm shadow-md transition-transform duration-200 hover:scale-[1.02]"
              startContent={<Home className="h-4 w-4" />}
            >
              Back to Home
            </Button>
            
          </div>

        </div>
      </body>
    </html>
  )
}