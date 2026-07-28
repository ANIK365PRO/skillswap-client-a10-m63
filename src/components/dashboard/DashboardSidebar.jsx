"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LogOut, Layers } from "lucide-react";
import { useState } from "react";
import { NAV_CONFIG, ROLE_LABELS } from "@/lib/navConfig";
import { authClient } from "@/lib/auth-client";

export default function DashboardSidebar({user}) {
  const pathname = usePathname();
  const router = useRouter();
  const [loggingOut, setLoggingOut] = useState(false);

  // const { data: session } = authClient.useSession();
  // const user = session?.user;

  const role = user?.role;
  const navLinks = NAV_CONFIG[role] || NAV_CONFIG.client;
  const dashboardLabel = ROLE_LABELS[role] || "Dashboard";

  const isActive = (href) => {
    const baseHref = `/dashboard/${role}`;
    return href === baseHref
      ? pathname === href
      : pathname === href || pathname.startsWith(href + "/");
  };

  const handleLogout = async () => {
    try {
      setLoggingOut(true);
      await authClient.signOut();
      router.push("/");
    } catch (err) {
      console.error("Logout failed:", err);
    } finally {
      setLoggingOut(false);
    }
  };

  return (
    <aside
      className=" h-screen sticky top-0
        hidden lg:flex flex-col
        w-[var(--sidebar-width)]
        bg-[var(--sidebar-bg)]
        border-r border-[var(--border)]
      "
    >
      {/* Logo */}
      <div className="border-b border-[var(--border)] p-6">
        <div className="flex items-center gap-3">
          <div
            className="
              flex h-11 w-11 items-center justify-center
              rounded-xl
              bg-[var(--primary)]
              text-[var(--accent)]
            "
          >
            <Layers />
          </div>

          <div>
            <h2 className="text-xl font-bold">
              Skill
              <span className="text-[var(--secondary)] dark:text-[var(--accent)]">
                Swap
              </span>
            </h2>

            <p className="text-xs text-[var(--muted)]">
              {dashboardLabel}
            </p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <div className="flex-1 overflow-y-auto p-4">
        <ul className="space-y-2">
          {navLinks.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);

            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`
                    flex items-center gap-3
                    rounded-2xl px-4 py-3
                    transition-all duration-200
                    ${
                      active
                        ? "bg-[var(--primary)] text-white"
                        : "text-[var(--muted)] hover:bg-[var(--primary)]/10"
                    }
                  `}
                >
                  <Icon size={18} />
                  <span className="font-medium">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Logout */}
      <div className="border-t border-[var(--border)] p-4">
        <button
          onClick={handleLogout}
          disabled={loggingOut}
          className="
            flex w-full items-center gap-3
            rounded-2xl px-4 py-3
            text-[var(--danger)]
            transition-all duration-200
            hover:bg-red-500/10
            disabled:opacity-50
          "
        >
          <LogOut size={18} />
          <span className="font-medium">
            {loggingOut ? "Logging out..." : "Logout"}
          </span>
        </button>
      </div>
    </aside>
  );
}