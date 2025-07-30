import { NavLink } from "react-router-dom";

interface SidebarMenuItemProps {
  to: string;
  icon: string;
  title: string;
}

export const SidebarMenuItem = ({ to, icon, title }: SidebarMenuItemProps) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-3 px-4 py-2 rounded-lg transition-colors duration-200 text-base font-medium
      ${isActive ? "bg-indigo-200 text-indigo-800 shadow font-bold" : "text-indigo-700 hover:bg-indigo-100 hover:text-indigo-900"}`
    }
    style={{ minHeight: 44 }}
  >
    <i className={`${icon} text-xl`} />
    <span className="text-base">{title}</span>
  </NavLink>
);
