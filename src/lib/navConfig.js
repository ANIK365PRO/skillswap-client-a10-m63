// lib/navConfig.js
import {
  LayoutDashboard, PlusCircle, Briefcase, FileText,
  CreditCard, User, Settings, Users, ShieldCheck,
  BarChart3, Wallet, ClipboardList,
} from "lucide-react";

export const NAV_CONFIG = {
  client: [
    { label: "Dashboard", href: "/dashboard/client", icon: LayoutDashboard },
    { label: "Post Task", href: "/dashboard/client/post-task", icon: PlusCircle },
    { label: "My Tasks", href: "/dashboard/client/my-tasks", icon: Briefcase },
    { label: "Manage Proposals", href: "/dashboard/client/manage-proposals", icon: FileText },
    { label: "Payments", href: "/dashboard/client/payments", icon: CreditCard },
    { label: "Profile", href: "/dashboard/client/profile", icon: User },
    { label: "Settings", href: "/dashboard/client/settings", icon: Settings },
  ],
  freelancer: [
    {
      label: "Dashboard", href: "/dashboard/freelancer", icon: LayoutDashboard,
    },
    {
      label: "Browse Tasks", href: "/dashboard/freelancer/browse-tasks", icon: Briefcase,
    },
    {
      label: "My Proposals", href: "/dashboard/freelancer/my-proposals", icon: FileText,
    },
    {
      label: "Active Projects", href: "/dashboard/freelancer/active-projects", icon: ClipboardList,
    },
    {
      label: "My Earnings", href: "/dashboard/freelancer/earnings", icon: Wallet,
    },
    {
      label: "Edit Profile", href: "/dashboard/freelancer/profile", icon: User,
    },
  ],
  admin: [
    { label: "Dashboard", href: "/dashboard/admin", icon: LayoutDashboard },
    { label: "Manage Users", href: "/dashboard/admin/users", icon: Users },
    { label: "Manage Tasks", href: "/dashboard/admin/tasks", icon: Briefcase },
    { label: "Reports", href: "/dashboard/admin/reports", icon: BarChart3 },
    { label: "Payments", href: "/dashboard/admin/payments", icon: CreditCard },
    { label: "Permissions", href: "/dashboard/admin/permissions", icon: ShieldCheck },
    { label: "Settings", href: "/dashboard/admin/settings", icon: Settings },
  ],
};

export const ROLE_LABELS = {
  client: "Client Dashboard",
  freelancer: "Freelancer Dashboard",
  admin: "Admin Dashboard",
};