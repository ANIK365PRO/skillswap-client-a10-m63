"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
} from "lucide-react";

import { Button, Drawer } from "@heroui/react";

export default function SidebarMenu() {
  const pathname = usePathname();

  const navItems = [
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

  return (
    <Drawer>
      {/* Trigger */}
       <Drawer.Trigger asChild>
          <div className="lg:hidden rounded-xl cursor-pointer p-2">
            <Menu size={24} />
          </div>
        </Drawer.Trigger>

      <Drawer.Backdrop>
        <Drawer.Content placement="left">
          <Drawer.Dialog
            className="
              h-full w-[280px]
              bg-[var(--surface)]
              border-r border-[var(--border)]
            "
          >
            {/* Close Button */}
            <Drawer.CloseTrigger />

            {/* Logo */}
            <div className="border-b p-5">
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
                    Client Dashboard
                  </p>
                </div>
              </div>
            </div>

            {/* User */}
            <div className="border-b p-5">
              <div className="flex items-center gap-3">
                <img
                  src="/avatar.png"
                  alt=""
                  className="h-12 w-12 rounded-full"
                />

                <div>
                  <h3 className="font-semibold">
                    Client BD
                  </h3>

                  <p className="text-xs text-[var(--muted)]">
                    client@bd.com
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <Drawer.Body className="p-4">
              <nav className="space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.label}
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
            <div className="border-t p-4">
              <button
                className="
                  flex w-full items-center gap-3
                  rounded-2xl px-4 py-3
                  text-[var(--danger)]
                  hover:bg-red-500/10
                "
              >
                <LogOut size={18} />

                <span>Logout</span>
              </button>
            </div>
          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    </Drawer>
  );
}