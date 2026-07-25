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
        flex h-20 items-center justify-between
        border-b border-[var(--border)]
        bg-[var(--background)]/80
        px-4 md:px-6
        backdrop-blur-xl
      "
    >
      {/* LEFT */}
      <div className="flex items-center gap-4">
        {/* Mobile Sidebar Button */}
        {/* <button
          onClick={onMenuClick}
          className="
            rounded-xl p-2 lg:hidden
            hover:bg-[var(--primary)]/10
          "
        >
          <Menu size={22} />
        </button> */}

    
        <SidebarMenu></SidebarMenu>


        <div>
          <h1 className="text-2xl font-bold">
            Welcome Back,
            <span className="text-[var(--primary)]">
              {" "}
              {user?.name || "Client"}
            </span>
          </h1>

          <p className="text-sm text-[var(--muted)]">
            Manage your tasks and projects.
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="relative hidden md:block">
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
              h-11 w-64 rounded-2xl
              border border-[var(--border)]
              bg-[var(--surface)]
              pl-10 pr-4
              outline-none
              focus:border-[var(--primary)]
            "
          />
        </div>

        {/* Theme */}
        <ThemeSwitch />

        {/* Notification */}
        <button
          className="
            relative rounded-2xl p-3
            border border-[var(--border)]
            hover:bg-[var(--primary)]/10
          "
        >
          <Bell size={20} />

          <span
            className="
              absolute right-2 top-2
              h-2 w-2 rounded-full
              bg-[var(--danger)]
            "
          />
        </button>

        {/* User */}
        <div
          className="
            flex items-center gap-3
            rounded-2xl border
            border-[var(--border)]
            bg-[var(--surface)]
            px-3 py-2
          "
        >
          <Image
            src={user?.image || "/avatar.png"}
            width={42}
            height={42}
            alt="user"
            className="
              rounded-full
              border-2 border-[var(--primary)]
            "
          />

          <div className="hidden md:block">
            <h3 className="text-sm font-semibold">
              {user?.name}
            </h3>

            <p className="text-xs capitalize text-[var(--muted)]">
              {user?.role}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}