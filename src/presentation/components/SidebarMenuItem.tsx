import { NavLink } from "react-router-dom";

interface SidebarMenuItemProps {
  to: string;
  icon: string;
  title: string;
  description: string;
}

export const SidebarMenuItem = ({ to, icon, title, description }: SidebarMenuItemProps) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-start gap-3 px-4 py-2 rounded-lg transition-colors duration-200 text-base font-medium
      ${isActive ? "bg-indigo-200 text-indigo-800 shadow font-bold" : "text-indigo-700 hover:bg-indigo-100 hover:text-indigo-900"}`
    }
    style={{ minHeight: 56 }}
  >
    <i className={`${icon} text-xl mt-1`} />
    <span className="flex flex-col">
      <span className="text-base leading-tight">{title}</span>
      <span className="text-xs text-indigo-500 font-normal leading-tight">{description}</span>
    </span>
  </NavLink>
);
