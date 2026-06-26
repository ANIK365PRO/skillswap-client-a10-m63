"use client";

import { Button } from "@heroui/react";
import { 
  Briefcase, 
  Users, 
  Home, 
  Bell, 
  LayoutDashboard, 
  User, 
  LogOut, 
  Menu, 
  X,
  Layers
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";


import { useEffect, useState } from "react";

import { ThemeSwitch } from "./ThemeSwitch";
import Image from "next/image";
import { usePathname } from "next/navigation";





export default function NavBar2 () {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const [mounted, setMounted] = useState(false);
   
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const [activeRoute, setActiveRoute] = useState();

    useEffect(() => { setMounted(true);}, []);

    const pathname = usePathname('Home');

    if (!mounted) return null;


  const navLinks = [
    { label: "Home", href: "/", icon: Home },
    { label: "Browse Tasks", href: "/brows-tasks", icon: Briefcase },
    { label: "Browse Freelancers", href: "/browse-freelancers", icon: Users },
    { label: "Dashboard", href: "/Dashboard", icon: LayoutDashboard },
  ];

  return (
    <div>
       <nav
            className="
            sticky top-0 z-50 w-full
            border-b border-[var(--border)]
            bg-[var(--background)]
            backdrop-blur-lg
            transition-colors duration-300
            "
        >
        <header className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          
          {/* LEFT SIDE: Brand Logo & Mobile Trigger */}
          <div className="flex items-center gap-4">
            <button
                className="
                    rounded-lg p-2 md:hidden
                    text-[var(--muted)]
                    hover:bg-black/5
                    dark:hover:bg-white/5
                    "
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            
              <div 
                className="
                    flex h-9 w-9 items-center justify-center
                    rounded-xl shadow-md
                    bg-[var(--primary)]
                    text-[var(--accent)]
                "
            >
                <Layers className="h-5 w-5" />

              </div>

              <span>
                Skill
                <span className="text-[var(--secondary)] dark:text-[var(--accent)]">Swap</span>
              </span>
          
          </div>

          {/* CENTER: Desktop Nav Links */}
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.label;
              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    //  onClick={() => setActiveRoute(link.label)}
                     className={`
                            relative px-4 py-2 text-sm font-semibold transition-colors
                            ${
                            pathname === link.href
                                ? "text-[var(--primary)] dark:text-[var(--accent)]"
                                : "text-[var(--muted)]"
                            }
                        `}
                  >
                    {link.label}
                    {pathname===link.href && (
                      <motion.div
                        layoutId="activeIndicator"
                         className="
                                absolute bottom-0 left-4 right-4 h-0.5
                                bg-[var(--primary)]
                                dark:bg-[var(--accent)]
                            "
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* RIGHT SIDE: Utilities & Auth Action States */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Theme Switcher */}

            <ThemeSwitch></ThemeSwitch>
        

            {/* Authenticated View vs Guest View */}
            {isLoggedIn ? (
              <>
                {/* Alert Notifications */}
                {/* <Button
                  isIconOnly
                  variant="light"
                  radius="full"
                  className="
                        relative
                        text-[var(--muted)]
                    "
                >
                  <span className="
                        absolute right-2.5 top-2.5
                        flex h-2 w-2 rounded-full
                        bg-[var(--accent)]
                    "/>
                  <Bell className="h-5 w-5" />
                </Button> */}

                {/* Dashboard Button */}
                {/* <Button
                  size="sm"
                  variant="flat"
                  className="
                        hidden sm:flex font-semibold
                        bg-[rgba(30,96,145,0.1)]
                        text-[var(--secondary)]
                        dark:bg-[rgba(255,195,0,0.1)]
                        dark:text-[var(--accent)]
                    "
                  startContent={<LayoutDashboard className="h-4 w-4" />}
                >
                  Dashboard
                </Button> */}

                {/* Profile Profile Dropdown Menu */}
                <div className="group relative flex items-center gap-1 cursor-pointer pl-1">
                  <div 
                     className="
                        h-9 w-9 overflow-hidden rounded-full border-2
                        border-[var(--primary)]
                        dark:border-[var(--accent)]
                    "
                  >
                    <Image
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                      alt="Avatar User"
                      className="h-full w-full object-cover"
                      width={36}
                      height={36}
                    />
                  </div>
                  
                  {/* Dropdown Card */}
                  <div 
                    className="
                        invisible absolute right-0 top-full z-50 mt-2
                        w-48 scale-95 rounded-xl border p-2 shadow-xl
                        opacity-0 transition-all duration-150

                        bg-[var(--surface)]
                        border-[var(--border)]

                        group-hover:visible
                        group-hover:scale-100
                        group-hover:opacity-100
                    "
                  >
                    <Link 
                      href="#" 
                      className="
                        flex items-center gap-2
                        rounded-lg p-2 text-sm
                        text-[var(--muted)]
                        hover:bg-black/5
                        dark:hover:bg-white/5
                        "
                    >
                      <User className="h-4 w-4" /> Profile
                    </Link>

                    <Link 
                      href="#" 
                      className="
                        flex items-center gap-2
                        rounded-lg p-2 text-sm
                        text-[var(--muted)]
                        hover:bg-black/5
                        dark:hover:bg-white/5
                        "
                    >
                      <LayoutDashboard className="h-4 w-4" /> Dashboard
                    </Link>


                    <hr className="my-1 border-[var(--border)]"/>
                    <button 
                      onClick={() => setIsLoggedIn(false)}
                      className="flex w-full items-center gap-2 rounded-lg p-2 text-left text-sm font-semibold text-[#EF4444] hover:bg-red-500/10"
                    >
                      <LogOut className="h-4 w-4" /> Logout
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Guest State Buttons */}
                <Link href="/auth/login">
                    <Button 
                        variant="light" 
                        size="sm"
                        className="
                          font-semibold
                          text-[var(--muted)]
        "
                        // onClick={() => setIsLoggedIn(true)}
                      >
                        Sign In
                    </Button>
                </Link>
                <Link href="/auth/register">
                    <Button 
                  size="sm"
                  className="
                        font-bold shadow-md
                        bg-[var(--accent)]
                        text-[#111827]
                        transition-transform
                        hover:scale-105
                        active:scale-95
                    "
                >
                  Get Started
                </Button>
                </Link>
              </>
            )}
          </div>
        </header>




        {/* MOBILE SLIDE-DOWN DRAWER MENU */}


        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
                    className="
                        border-t md:hidden
                        bg-[var(--background)]
                        border-[var(--border)]
                    "
            >
              <ul className="flex flex-col gap-1 p-4">
                {navLinks.map((link) => {
                  const isActive = pathname === link.label;
                  const LinkIcon = link.icon;
                  return (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        onClick={() => {
                          // setActiveRoute(link.label);
                          setIsMenuOpen(false);
                        }}
                        className={`
                            flex items-center gap-3 rounded-xl p-3
                            text-sm font-semibold transition-colors

                            ${
                                pathname===link.href
                                ? "text-[var(--primary)] dark:text-[var(--accent)]"
                                : "text-[var(--muted)]"
                            }
                            `}
                      >
                        <LinkIcon className="h-4 w-4" />
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}



// "use client";

// import { useState } from "react";
// import { Button } from "@heroui/react";
// import { 
//   Briefcase, 
//   Users, 
//   Home, 
//   Sun, 
//   Moon, 
//   Bell, 
//   LayoutDashboard, 
//   User, 
//   LogOut, 
//   Menu, 
//   X,
//   Layers
// } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";

// import { ThemeSwitch } from "./ThemeSwitch";

// export default function NavBar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
  
//   // Toggle dark mode classes natively for testing/implementation
//   const [isDarkMode, setIsDarkMode] = useState(false);
  
//   // Interactive mock state: true = Logged In view, false = Guest view
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [activeRoute, setActiveRoute] = useState("Home");

//   const navLinks = [
//     { label: "Home", href: "/", icon: Home },
//     { label: "Browse Tasks", href: "/brows-tasks", icon: Briefcase },
//     { label: "Browse Freelancers", href: "/browse-freelancers", icon: Users },
//     { label: "Dashboard", href: "/Dashboard", icon: LayoutDashboard },
//   ];

//   return (
//     <div className={isDarkMode ? "dark" : ""}>
//       <nav 
//         style={{
//           backgroundColor: isDarkMode ? "rgba(15, 23, 42, 0.7)" : "rgba(248, 250, 252, 0.7)",
//           borderColor: isDarkMode ? "#334155" : "#E5E7EB"
//         }}
//         className="sticky top-0 z-50 w-full border-b backdrop-blur-lg transition-colors duration-300"
//       >
//         <header className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          
//           {/* LEFT SIDE: Brand Logo & Mobile Trigger */}
//           <div className="flex items-center gap-4">
//             <button
//               style={{ color: isDarkMode ? "#CBD5E1" : "#6B7280" }}
//               className="rounded-lg p-2 hover:bg-black/5 dark:hover:bg-white/5 md:hidden"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               aria-label="Toggle menu"
//             >
//               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
            
//             <Link 
//               href="/" 
//               style={{ color: isDarkMode ? "#F8FAFC" : "#111827" }}
//               className="flex items-center gap-2 font-bold text-xl tracking-tight"
//             >
//               <div 
//                 style={{ backgroundColor: "#0F4C81", color: "#FFC300" }}
//                 className="flex h-9 w-9 items-center justify-center rounded-xl shadow-md"
//               >
//                 <Layers className="h-5 w-5" />
//               </div>
//               <span>
//                 Skill
//                 <span style={{ color: isDarkMode ? "#FFC300" : "#1E6091" }}>Swap</span>
//               </span>
//             </Link>
//           </div>

//           {/* CENTER: Desktop Nav Links */}
//           <ul className="hidden items-center gap-1 md:flex">
//             {navLinks.map((link) => {
//               const isActive = activeRoute === link.label;
//               return (
//                 <li key={link.label}>
//                   <Link
//                     href={link.href}
//                     onClick={() => setActiveRoute(link.label)}
//                     style={{
//                       color: isActive 
//                         ? (isDarkMode ? "#FFC300" : "#0F4C81") 
//                         : (isDarkMode ? "#CBD5E1" : "#6B7280")
//                     }}
//                     className="relative px-4 py-2 text-sm font-semibold transition-colors"
//                   >
//                     {link.label}
//                     {isActive && (
//                       <motion.div
//                         layoutId="activeIndicator"
//                         style={{ backgroundColor: isDarkMode ? "#FFC300" : "#0F4C81" }}
//                         className="absolute bottom-0 left-4 right-4 h-0.5"
//                         transition={{ type: "spring", stiffness: 380, damping: 30 }}
//                       />
//                     )}
//                   </Link>
//                 </li>
//               );
//             })}
//           </ul>

//           {/* RIGHT SIDE: Utilities & Auth Action States */}
//           <div className="flex items-center gap-2 sm:gap-3">
            
//             {/* Theme Switcher */}

//             <ThemeSwitch></ThemeSwitch>
//             {/* <Button
//               isIconOnly
//               variant="light"
//               radius="full"
//               style={{ color: isDarkMode ? "#FFC300" : "#6B7280" }}
//               onClick={() => setIsDarkMode(!isDarkMode)}
//               aria-label="Toggle Theme"
//             >
//               {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
//             </Button> */}

//             {/* Authenticated View vs Guest View */}
//             {isLoggedIn ? (
//               <>
//                 {/* Alert Notifications */}
//                 <Button
//                   isIconOnly
//                   variant="light"
//                   radius="full"
//                   style={{ color: isDarkMode ? "#CBD5E1" : "#6B7280" }}
//                   className="relative"
//                 >
//                   <span style={{ backgroundColor: "#FFC300" }} className="absolute right-2.5 top-2.5 flex h-2 w-2 rounded-full" />
//                   <Bell className="h-5 w-5" />
//                 </Button>

//                 {/* Dashboard Button */}
//                 <Button
//                   size="sm"
//                   variant="flat"
//                   style={{ 
//                     backgroundColor: isDarkMode ? "rgba(255, 195, 0, 0.1)" : "rgba(30, 96, 145, 0.1)",
//                     color: isDarkMode ? "#FFC300" : "#1E6091" 
//                   }}
//                   className="hidden font-semibold sm:flex"
//                   startContent={<LayoutDashboard className="h-4 w-4" />}
//                 >
//                   Dashboard
//                 </Button>

//                 {/* Profile Profile Dropdown Menu */}
//                 <div className="group relative flex items-center gap-1 cursor-pointer pl-1">
//                   <div 
//                     style={{ borderColor: isDarkMode ? "#FFC300" : "#0F4C81" }}
//                     className="h-9 w-9 overflow-hidden rounded-full border-2"
//                   >
//                     <img
//                       src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
//                       alt="Avatar User"
//                       className="h-full w-full object-cover"
//                     />
//                   </div>
                  
//                   {/* Dropdown Card */}
//                   <div 
//                     style={{ 
//                       backgroundColor: isDarkMode ? "#1E293B" : "#FFFFFF",
//                       borderColor: isDarkMode ? "#334155" : "#E5E7EB"
//                     }}
//                     className="invisible absolute right-0 top-full z-50 mt-2 w-48 scale-95 rounded-xl border p-2 shadow-xl opacity-0 transition-all duration-150 group-hover:visible group-hover:scale-100 group-hover:opacity-100"
//                   >
//                     <Link 
//                       href="#" 
//                       style={{ color: isDarkMode ? "#CBD5E1" : "#6B7280" }}
//                       className="flex items-center gap-2 rounded-lg p-2 text-sm hover:bg-black/5 dark:hover:bg-white/5"
//                     >
//                       <User className="h-4 w-4" /> Profile
//                     </Link>
//                     <Link 
//                       href="#" 
//                       style={{ color: isDarkMode ? "#CBD5E1" : "#6B7280" }}
//                       className="flex items-center gap-2 rounded-lg p-2 text-sm hover:bg-black/5 dark:hover:bg-white/5 md:hidden"
//                     >
//                       <LayoutDashboard className="h-4 w-4" /> Dashboard
//                     </Link>
//                     <hr style={{ borderColor: isDarkMode ? "#334155" : "#E5E7EB" }} className="my-1" />
//                     <button 
//                       onClick={() => setIsLoggedIn(false)}
//                       className="flex w-full items-center gap-2 rounded-lg p-2 text-left text-sm font-semibold text-[#EF4444] hover:bg-red-500/10"
//                     >
//                       <LogOut className="h-4 w-4" /> Logout
//                     </button>
//                   </div>
//                 </div>
//               </>
//             ) : (
//               <>
//                 {/* Guest State Buttons */}
//                 <Button 
//                   variant="light" 
//                   size="sm"
//                   style={{ color: isDarkMode ? "#CBD5E1" : "#6B7280" }}
//                   className="font-semibold"
//                   onClick={() => setIsLoggedIn(true)}
//                 >
//                   Sign In
//                 </Button>
//                 <Link href="/auth/register">
//                     <Button 
//                   size="sm"
//                   style={{ backgroundColor: "#FFC300", color: "#111827" }}
//                   className="font-bold shadow-md transition-transform hover:scale-105 active:scale-95"
//                 >
//                   Get Started
//                 </Button>
//                 </Link>
//               </>
//             )}
//           </div>
//         </header>

//         {/* MOBILE SLIDE-DOWN DRAWER MENU */}
//         <AnimatePresence>
//           {isMenuOpen && (
//             <motion.div 
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.2 }}
//               style={{ 
//                 backgroundColor: isDarkMode ? "#0F172A" : "#F8FAFC",
//                 borderTopColor: isDarkMode ? "#334155" : "#E5E7EB"
//               }}
//               className="border-t md:hidden"
//             >
//               <ul className="flex flex-col gap-1 p-4">
//                 {navLinks.map((link) => {
//                   const isActive = activeRoute === link.label;
//                   const LinkIcon = link.icon;
//                   return (
//                     <li key={link.label}>
//                       <Link
//                         href={link.href}
//                         onClick={() => {
//                           setActiveRoute(link.label);
//                           setIsMenuOpen(false);
//                         }}
//                         style={{
//                           backgroundColor: isActive 
//                             ? (isDarkMode ? "rgba(255, 195, 0, 0.1)" : "rgba(15, 76, 129, 0.1)") 
//                             : "transparent",
//                           color: isActive 
//                             ? (isDarkMode ? "#FFC300" : "#0F4C81") 
//                             : (isDarkMode ? "#CBD5E1" : "#6B7280")
//                         }}
//                         className="flex items-center gap-3 rounded-xl p-3 text-sm font-semibold transition-colors"
//                       >
//                         <LinkIcon className="h-4 w-4" />
//                         {link.label}
//                       </Link>
//                     </li>
//                   );
//                 })}
//               </ul>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </nav>
//     </div>
//   );
// }
