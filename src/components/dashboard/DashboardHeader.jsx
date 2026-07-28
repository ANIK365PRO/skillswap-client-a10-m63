"use client";

import { Bell, Search, Menu } from "lucide-react";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import Image from "next/image";
import SidebarMenu from "./SidebarMenu";

export default function DashboardHeader({
  user,
  onMenuClick,
}) {
  return (
    <header
      className="
        sticky top-0 z-40
        flex h-16 md:h-20 items-center justify-between
        border-b border-[var(--border)]
        bg-[var(--background)]/80
        px-3 sm:px-4 md:px-6
        backdrop-blur-xl
        gap-2
      "
    >
      {/* LEFT */}
      <div className="flex min-w-0 items-center gap-2 sm:gap-4">
        {/* Mobile Sidebar Button */}
        <SidebarMenu user={user}/>

        <div className="min-w-0">
          <h1 className="truncate text-base sm:text-xl md:text-2xl font-bold">
            Welcome Back,
            <span className="text-[var(--primary)]">
              {" "}
              {user?.name || "Client"}
            </span>
          </h1>

          <p className="hidden sm:block truncate text-xs md:text-sm text-[var(--muted)]">
            Manage your tasks and projects.
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex shrink-0 items-center gap-1.5 sm:gap-2 md:gap-3">
        {/* Search - full input on desktop */}
        <div className="relative hidden lg:block">
          <Search
            size={18}
            className="
              absolute left-3 top-1/2
              -translate-y-1/2
              text-[var(--muted)]
            "
          />

          <input
            type="text"
            placeholder="Search..."
            className="
              h-11 w-48 xl:w-64 rounded-2xl
              border border-[var(--border)]
              bg-[var(--surface)]
              pl-10 pr-4
              outline-none
              focus:border-[var(--primary)]
            "
          />
        </div>

        {/* Search - icon only on mobile/tablet */}
        <button
          className="
            lg:hidden
            rounded-2xl p-2.5 sm:p-3
            border border-[var(--border)]
            hover:bg-[var(--primary)]/10
          "
          aria-label="Search"
        >
          <Search size={18} />
        </button>

        {/* Theme */}
        <ThemeSwitch />

        {/* Notification */}
        <button
          className="
            relative rounded-2xl p-2.5 sm:p-3
            border border-[var(--border)]
            hover:bg-[var(--primary)]/10
          "
          aria-label="Notifications"
        >
          <Bell size={18} className="sm:h-5 sm:w-5" />

          <span
            className="
              absolute right-1.5 top-1.5 sm:right-2 sm:top-2
              h-2 w-2 rounded-full
              bg-[var(--danger)]
            "
          />
        </button>

        {/* User */}
        <div
          className="
            flex items-center gap-2 sm:gap-3
            rounded-2xl border
            border-[var(--border)]
            bg-[var(--surface)]
            px-1.5 py-1.5 sm:px-3 sm:py-2
          "
        >
          <Image
            src={user?.image || "/avatar.png"}
            width={36}
            height={36}
            alt="user"
            className="
              h-8 w-8 sm:h-9 sm:w-9 md:h-[42px] md:w-[42px]
              rounded-full object-cover
              border-2 border-[var(--primary)]
            "
          />

          <div className="hidden md:block max-w-[120px]">
            <h3 className="truncate text-sm font-semibold">
              {user?.name}
            </h3>

            <p className="truncate text-xs capitalize text-[var(--muted)]">
              {user?.role}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}