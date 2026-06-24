##
use this component  give me simple 404 page :
// Import global styles and fonts
import './globals.css'
import { Inter } from 'next/font/google'
 
const inter = Inter({ subsets: ['latin'] })
 
export const metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
}
 
export default function GlobalNotFound() {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <h1>404 - Page Not Found</h1>
        <p>This page does not exist.</p>
      </body>
    </html>
  )
}

, using color plate image which i provided before


## correction

ok good just add button link to hoom and go back