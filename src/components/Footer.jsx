'use client'

// import { useState } from "react";
import { Layers } from "lucide-react";

import {
  LogoFacebook,
  LogoLinkedin,
  LogoGithub,
} from "@gravity-ui/icons";

import { TwitterNew } from "@deemlol/next-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  // const [activeRoute, setActiveRoute] = useState("Home");
  const currentYear = new Date().getFullYear();

  const pathname = usePathname();
  if (!pathname) return null;


  const navigationLinks = [
        { label: "Home", href: "/"},
        { label: "Browse Tasks", href: "/brows-tasks"},
        { label: "Browse Freelancers", href: "/browse-freelancers"},
        { label: "Sign In", href: "auth/login" },
  ];

  const socialLinks = [
    { icon: TwitterNew, label: "Twitter" },
    { icon: LogoFacebook, label: "Facebook" },
    { icon: LogoLinkedin, label: "LinkedIn" },
    { icon: LogoGithub, label: "GitHub" },
  ];

  return (
    <footer
      className="
        w-full border-t
        border-[var(--border)]
        bg-[var(--background)]
        transition-colors duration-300
      "
    >
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4 lg:gap-16">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <Link
              href="#"
              className="
                flex items-center gap-3
                text-xl font-bold tracking-tight
                text-[var(--foreground)]
              "
            >
              <div
                className="
                  flex h-9 w-9 items-center justify-center
                  rounded-xl shadow-md
                  bg-[var(--primary)]
                  text-[var(--accent)]
                  transition-transform
                  hover:scale-105
                "
              >
                <Layers className="h-5 w-5" />
              </div>

              <span>
                Skill
                <span className="text-[var(--secondary)] dark:text-[var(--accent)]">
                  Swap
                </span>
              </span>
            </Link>

            <p
              className="
                max-w-[260px]
                text-sm leading-relaxed
                text-[var(--muted)]
              "
            >
              Connect with skilled freelancers or find micro-tasks to grow
              your career.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h3
              className="
                text-sm font-bold uppercase tracking-wider
                text-[var(--foreground)]
              "
            >
              Navigation
            </h3>

            <ul className="flex flex-col gap-3">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}

                    className={`
                      text-sm transition-colors hover:text-[var(--primary)] dark:hover:text-[var(--accent)] font-semibold
                      text-[var(--muted)]
                    `}
                  >

                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3
              className="
                text-sm font-bold uppercase tracking-wider
                text-[var(--foreground)]
              "
            >
              Contact
            </h3>

            <ul
              className="
                flex flex-col gap-3
                text-sm
                text-[var(--muted)]
              "
            >
              <li>
                <a
                  href="mailto:support@skillswap.com"
                  className="
                    transition-colors duration-200
                    hover:text-[var(--primary)]
                    dark:hover:text-[var(--accent)]
                  "
                >
                  support@skillswap.com
                </a>
              </li>

              <li>Dhaka, Bangladesh</li>
            </ul>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-4">
            <h3
              className="
                text-sm font-bold uppercase tracking-wider
                text-[var(--foreground)]
              "
            >
              Follow Us
            </h3>

            <div className="flex flex-wrap items-center gap-3">
              {socialLinks.map((social, idx) => {
                const IconComponent = social.icon;

                return (
                  <a
                    key={idx}
                    href="#"
                    aria-label={`Follow us on ${social.label}`}
                    className="
                      flex h-10 w-10 items-center justify-center
                      rounded-xl border shadow-sm

                      bg-[var(--surface)]
                      border-[var(--border)]
                      text-[var(--muted)]

                      transition-all duration-200
                      hover:-translate-y-0.5
                      hover:shadow-md
                      hover:text-[var(--primary)]
                      hover:border-[var(--primary)]
                      dark:hover:text-[var(--accent)]
                      dark:hover:border-[var(--accent)]
                    "
                  >
                    <IconComponent width="16" height="16" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="
            mt-16 border-t pt-8
            border-[var(--border)]

            flex flex-col items-center
            justify-between gap-4

            sm:flex-row
          "
        >
          <p
            className="
              text-xs tracking-wide
              text-[var(--muted)]
              opacity-80
            "
          >
            © {currentYear} SkillSwap. All rights reserved.
          </p>

          <div className="flex gap-6 text-xs">
            <Link
              href="#"
              className="
                text-[var(--muted)]
                hover:underline
              "
            >
              Privacy Policy
            </Link>

            <Link
              href="#"
              className="
                text-[var(--muted)]
                hover:underline
              "
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}