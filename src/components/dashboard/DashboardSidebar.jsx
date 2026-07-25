"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  PlusCircle,
  Briefcase,
  FileText,
  CreditCard,
  User,
  Settings,
  LogOut,
  Layers,
} from "lucide-react";

const navLinks = [
  {
    label: "Dashboard",
    href: "/dashboard/client",
    icon: LayoutDashboard,
  },
  {
    label: "Post Task",
    href: "/dashboard/client/post-task",
    icon: PlusCircle,
  },
  {
    label: "My Tasks",
    href: "/dashboard/client/my-tasks",
    icon: Briefcase,
  },
  {
    label: "Manage Proposals",
    href: "/dashboard/client/manage-proposals",
    icon: FileText,
  },
  {
    label: "Payments",
    href: "/dashboard/client/payments",
    icon: CreditCard,
  },
  {
    label: "Profile",
    href: "/dashboard/client/profile",
    icon: User,
  },
  {
    label: "Settings",
    href: "/dashboard/client/settings",
    icon: Settings,
  },
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside
    className="
        hidden lg:flex flex-col
        w-[var(--sidebar-width)]
        bg-[var(--sidebar-bg)]
        border-r border-[var(--border)]
    "
    >
      {/* Logo */}
      <div className="border-b p-6">
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
              <span className="text-[#1E6091] dark:text-[#FFC300]">
                Swap
              </span>
            </h2>

            <p className="text-xs text-default-500">
              Client Dashboard
            </p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <div className="flex-1 p-4">
        <ul className="space-y-2">
          {navLinks.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`
                        flex items-center gap-3
                        rounded-2xl px-4 py-3
                        transition-all duration-200

                        ${
                        pathname === item.href
                            ? "bg-[var(--primary)] text-white"
                            : "text-[var(--muted)] hover:bg-[var(--primary)]/10"
                        }
                    `
                    }
                >
                  <Icon size={18} />

                  <span className="font-medium">
                    {item.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Logout */}
      <div className="border-t p-4">
        <button
            className="
                flex w-full items-center gap-3
                rounded-2xl px-4 py-3
                text-[var(--danger)]
                transition-all duration-200
                hover:bg-red-500/10
            "
            >
            <LogOut size={18} />
            <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
}