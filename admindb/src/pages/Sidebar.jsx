import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar({ activeItem, onItemClick, theme }) {
  const isLightTheme = theme === "light";
  const isDarkTheme = theme === "dark";
  const textColorClass = isDarkTheme ? "text-white" : "text-white-800";
  const bgColorClass = isLightTheme ? "bg-secondary-100" : "bg-secondary-900";

  return (
    <div
      className={`w-64 flex-col overflow-y-auto overflow-x-hidden rounded-tr-lg border-r ${bgColorClass} `}
      style={{ borderTopLeftRadius: "30px", borderTopRightRadius: "30px" }}
    >
      <div className="p-4">
        <h1 className={`text-primary text-3xl ${textColorClass}`}>
          FirstStep Admin
        </h1>
      </div>
      <nav className="mt-2">
        <ul className={`space-y-2 ${textColorClass}`}>
          <SidebarItem
            icon="📊"
            text="Overview"
            to="/dashboard"
            onItemClick={onItemClick}
            active={activeItem === "Overview"}
            textColorClass={textColorClass}
            theme={theme}
          />
          <SidebarItem
            icon="👩‍💼"
            text="Applicants"
            to="/applicants"
            onItemClick={onItemClick}
            active={activeItem === "Applicants"}
            textColorClass={textColorClass}
            theme={theme}
          />
          <SidebarItem
            icon="👔"
            text="Employers"
            to="/employers"
            onItemClick={onItemClick}
            active={activeItem === "Employers"}
            textColorClass={textColorClass}
            theme={theme}
          />
          <SidebarItem
            icon="📝"
            text="Feedback"
            to="/feedback"
            onItemClick={onItemClick}
            active={activeItem === "Feedback"}
            textColorClass={textColorClass}
            theme={theme}
          />
        </ul>
      </nav>
    </div>
  );
}

function SidebarItem({
  icon,
  text,
  to,
  active,
  onItemClick,
  textColorClass,
  theme,
}) {
  const handleClick = (event) => {
    event.preventDefault();
    onItemClick(text);
  };

  const hoverBgClass =
    theme === "light" ? "hover:bg-indigo-100" : "hover:bg-indigo-800";
  const hoverTextClass =
    theme === "light" ? "hover:text-indigo-600" : "hover:text-indigo-400";
  const activeBgClass = theme === "light" ? "bg-indigo-100" : "bg-indigo-800";
  const activeTextClass =
    theme === "light" ? "text-indigo-600" : "text-indigo-400";

  return (
    <li>
      <NavLink
        to={to}
        className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-md transition-colors duration-300 h-full w-full ${textColorClass} ${hoverTextClass} ${hoverBgClass} ${
          active ? `${activeBgClass} ${activeTextClass}` : ""
        }`}
        onClick={handleClick}
      >
        <span className="text-lg">{icon}</span>
        <span>{text}</span>
      </NavLink>
    </li>
  );
}
