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
import { authClient } from "@/lib/auth-client";





export default function NavBar2 () {
    

    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const [mounted, setMounted] = useState(false);
   
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [activeRoute, setActiveRoute] = useState();


    const { data: session } = authClient.useSession();

    const user = session?.user;
    const role = user?.role || "client";
    // console.log('user' , user)

    const handleLogout = async () => {
      await authClient.signOut(
        // {
        //   fetchOptions: {
        //     onSuccess: () => {
        //       window.location.href = "/";
        //     },
        //   },
        // }
    );
    };

    useEffect(() => { setMounted(true);}, []);

    const pathname = usePathname('Home');
    if(pathname.includes('/dashboard')) {
      return null;
    }

    if (!mounted) return null;

    





  const navLinks = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
      label: "Browse Tasks",
      href: "/browse-tasks",
      icon: Briefcase,
  },
  {
      label: "Browse Freelancers",
      href: "/browse-freelancers",
      icon: Users,
  }
];

// if (role !== "admin") {
//   navLinks.push(
//     {
//       label: "Browse Tasks",
//       href: "/browse-tasks",
//       icon: Briefcase,
//     },
//     {
//       label: "Browse Freelancers",
//       href: "/browse-freelancers",
//       icon: Users,
//     }
//   );
// }

// if (role === "client") {
//   navLinks.push({
//     label: "Post Task",
//     href: "/dashboard/client/post-task",
//     icon: Briefcase,
//   });
// }

// role base dashboard
  const dashboardLinks = {
    client: '/dashboard/client',
    freelancer: '/dashboard/freelancer',
    admin: '/dashboard/admin'
  }

if (user?.email) {
  navLinks.push({
    label: "Dashboard",
    href: dashboardLinks[role],
    icon: LayoutDashboard,
  });
}

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
            {/* <button
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
            </button> */}
            
              <div className="flex h-9 w-9 items-center justify-center rounded-xl shadow-md bg-[var(--primary)]
                    text-[var(--accent)]" >

                <Layers className="h-5 w-5" />

              </div>

              <span>
                Skill
                <span className="text-[var(--secondary)] dark:text-[var(--accent)]">Swap</span>
              </span>
          
          </div>

          {/* CENTER: Desktop Nav Links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.label;
              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                     onClick={() => setActiveRoute(link.label)}
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
            {!user?.email ? (
             <>
                {/* Guest State Buttons */}
                <Link href="/auth/login">
                    <Button 
                        variant="light" 
                        size="sm"
                        className="font-semibold text-[var(--muted)] hidden lg:block"
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
                        hidden lg:block
                    "
                >
                  Get Started
                </Button>
                </Link>
              </>
             
            ) : (


               <>

                {/* Profile Profile Dropdown Menu */}
                <div className="group relative flex cursor-pointer items-center gap-2">
                    <Image
                      src={user?.image || "/avatar.png"}
                      width={40}
                      height={40}
                      alt={user?.name || 'User'}

                      className="rounded-full h-[40] w-[40] border-2 border-[var(--primary)]"
                    />

                    <div className="hidden lg:block">
                      <h3 className="text-sm font-semibold">
                        {user?.name}
                      </h3>

                      <p className="text-xs capitalize text-default-500">
                        {role}
                      </p>
                    </div>

                    {/* profile image and name with dropdown menu for profile and logout options. */}
                    <div
                      className="
                        invisible absolute right-0 top-full mt-3
                        w-72 rounded-2xl border bg-[var(--surface)]
                        p-2 opacity-0 shadow-xl transition-all
                        group-hover:visible
                        group-hover:opacity-100
                      "
                    >
                      <div className="border-b p-3">
                        <div className="flex justify-center gap-3">
                          <Image
                            src={user?.image}
                            width={60}
                            height={60}
                            alt={user?.name}
                            className="rounded-full p-1 h-[60] w-[60] border-2 border-[var(--primary)]"
                          />

                          <div>
                            <h3 className="font-semibold">
                              {user?.name}
                            </h3>

                            <p className="text-xs text-default-500">
                              {user?.email}
                            </p>

                            <div className="mt-2 flex gap-2">
                              <span className="rounded-full bg-primary/10 px-2 py-1 text-xs capitalize">
                                {role}
                              </span>

                              <span className="rounded-full bg-warning/10 px-2 py-1 text-xs capitalize">
                                {user?.plan || "free"}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* <Link
                        href={`/dashboard/${role}`}
                        className="flex items-center gap-2 rounded-lg p-2 hover:bg-default-100"
                      >
                        <LayoutDashboard size={16} />
                        Dashboard
                      </Link> */}

                      <Link
                        href="/profile"
                        className="flex items-center gap-2 rounded-lg p-2 hover:bg-default-100"
                      >
                        <User size={16} />
                        Profile
                      </Link>

                      <button
                        onClick={handleLogout}
                        className="
                          flex w-full items-center gap-2
                          rounded-lg p-2 text-red-500
                          hover:bg-red-50
                        "
                      >
                        <LogOut size={16} />
                        Logout
                      </button>
                    </div>
                </div>
              </>
             
            )}


            {/* Right SIDE: Mobile Trigger */}
            <button
                className="
                    rounded-lg p-2 lg:hidden
                    text-[var(--muted)]
                    hover:bg-black/5
                    dark:hover:bg-white/5
                    "
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

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
                        
                        flex flex-col gap-2
                        rounded-xl
                        shadow-lg
                        overflow-hidden
                        border-t md:hidden
                        bg-[var(--surface)] 
                        border-[var(--border)]
                    "
            >
              {/* {user && (
                  <div className="mb-4 flex justify-center items-center gap-3 border-b pb-4">
                    <Image
                      src={user?.image}
                      width={50}
                      height={50}
                      alt={user?.name}
                      className="rounded-full"
                    />

                    <div>
                      <h3 className="font-semibold">
                        {user?.name}
                      </h3>

                      <p className="text-xs">
                        {user?.email}
                      </p>

                      <span className="text-xs capitalize text-primary">
                        {role}
                      </span>
                    </div>
                  </div>
              )} */}


                {/* login and register buttons for mobile menu */}
              {!user?.email && (
                  <div className="mb-4 flex justify-center items-center gap-4 border-b p-4">
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
             
                  </div>
              )}



              {/* route link for mobile  */}
              <ul className="flex flex-col gap-1 p-4">
                {navLinks.map((link) => {
                  const isActive = pathname === link.label;
                  const LinkIcon = link.icon;
                  return (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        onClick={() => {
                          setActiveRoute(link.label);
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

                {
                  user?.email && 
                
                  <li>
                     <Link href="/auth/logout">

                        <button
                            onClick={handleLogout}
                            className="
                              flex w-full items-center gap-2
                              rounded-lg px-3 py-2 text-red-500
                              hover:bg-red-50
                            "
                          >
                            <LogOut size={16} />
                            Logout
                        </button>

                     </Link>
                  </li>
      }

              </ul>
              
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}


