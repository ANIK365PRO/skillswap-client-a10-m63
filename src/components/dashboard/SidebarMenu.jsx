"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

import {
  Menu,
  LayoutDashboard,
  Briefcase,
  PlusCircle,
  FileText,
  CreditCard,
  User,
  Settings,
  LogOut,
  Layers,
  Users,
  ShieldCheck,
  BarChart3,
  Wallet,
  ClipboardList,
} from "lucide-react";

import { Drawer } from "@heroui/react";
import { NAV_CONFIG, ROLE_LABELS } from "@/lib/navConfig";
import { authClient } from "@/lib/auth-client";

// 🔹 Central nav config for all roles
// const NAV_CONFIG = {
//   client: [
//     { label: "Dashboard", href: "/dashboard/client", icon: LayoutDashboard },
//     { label: "Post Task", href: "/dashboard/client/post-task", icon: PlusCircle },
//     { label: "My Tasks", href: "/dashboard/client/my-tasks", icon: Briefcase },
//     { label: "Manage Proposals", href: "/dashboard/client/manage-proposals", icon: FileText },
//     { label: "Payments", href: "/dashboard/client/payments", icon: CreditCard },
//     { label: "Profile", href: "/dashboard/client/profile", icon: User },
//     { label: "Settings", href: "/dashboard/client/settings", icon: Settings },
//   ],

//   freelancer: [
//     { label: "Dashboard", href: "/dashboard/freelancer", icon: LayoutDashboard },
//     { label: "Browse Tasks", href: "/dashboard/freelancer/browse-tasks", icon: Briefcase },
//     { label: "My Proposals", href: "/dashboard/freelancer/my-proposals", icon: FileText },
//     { label: "Ongoing Work", href: "/dashboard/freelancer/ongoing-work", icon: ClipboardList },
//     { label: "Earnings", href: "/dashboard/freelancer/earnings", icon: Wallet },
//     { label: "Profile", href: "/dashboard/freelancer/profile", icon: User },
//     { label: "Settings", href: "/dashboard/freelancer/settings", icon: Settings },
//   ],

//   admin: [
//     { label: "Dashboard", href: "/dashboard/admin", icon: LayoutDashboard },
//     { label: "Manage Users", href: "/dashboard/admin/users", icon: Users },
//     { label: "Manage Tasks", href: "/dashboard/admin/tasks", icon: Briefcase },
//     { label: "Reports", href: "/dashboard/admin/reports", icon: BarChart3 },
//     { label: "Payments", href: "/dashboard/admin/payments", icon: CreditCard },
//     { label: "Permissions", href: "/dashboard/admin/permissions", icon: ShieldCheck },
//     { label: "Settings", href: "/dashboard/admin/settings", icon: Settings },
//   ],
// };

// const ROLE_LABELS = {
//   client: "Client Dashboard",
//   freelancer: "Freelancer Dashboard",
//   admin: "Admin Dashboard",
// };

export default function SidebarMenu({user}) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  //  const { data: session } = authClient.useSession();
  //  const user = session?.user;

  const role = user?.role;
  const navItems = NAV_CONFIG[role] || NAV_CONFIG.client;
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
    <Drawer isOpen={open} onOpenChange={setOpen}>
      {/* Trigger */}
      <Drawer.Trigger asChild>
        <div
          role="button"
          tabIndex={0}
          className="lg:hidden rounded-xl cursor-pointer p-2 hover:bg-[var(--primary)]/10"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </div>
      </Drawer.Trigger>

      <Drawer.Backdrop>
        <Drawer.Content placement="left">
          <Drawer.Dialog
            className="
              flex h-full w-[280px] flex-col
              bg-[var(--surface)]
              border-r border-[var(--border)]
            "
          >
            <Drawer.CloseTrigger />

            {/* Logo */}
            <div className="border-b border-[var(--border)] p-5">
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex h-11 w-11 items-center justify-center
                    rounded-xl
                    bg-[var(--primary)]
                    text-[var(--accent)]
                  "
                >
                  <Layers size={20} />
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

            {/* User */}
            {/* <div className="border-b border-[var(--border)] p-5">
              <div className="flex items-center gap-3">
                <Image
                  src={user?.image || "/avatar.png"}
                  alt="user"
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover border-2 border-[var(--primary)]"
                />
                <div className="min-w-0">
                  <h3 className="truncate font-semibold">
                    {user?.name || "User"}
                  </h3>
                  <p className="truncate text-xs text-[var(--muted)]">
                    {user?.email || ""}
                  </p>
                </div>
              </div>
            </div> */}

            {/* Navigation */}
            <Drawer.Body className="flex-1 overflow-y-auto p-4">
              <nav className="space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const active = isActive(item.href);

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setOpen(false)}
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
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </nav>
            </Drawer.Body>

            {/* Footer */}
            <div className="border-t border-[var(--border)] p-4">
              <button
                onClick={handleLogout}
                disabled={loggingOut}
                className="
                  flex w-full items-center gap-3
                  rounded-2xl px-4 py-3
                  text-[var(--danger)]
                  hover:bg-red-500/10
                  disabled:opacity-50
                "
              >
                <LogOut size={18} />
                <span>{loggingOut ? "Logging out..." : "Logout"}</span>
              </button>
            </div>
          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    </Drawer>
  );
}