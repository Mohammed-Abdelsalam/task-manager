import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router";
import ThemeToggle from "./ThemeToggle";

const navigationItems = [
  { path: "/", label: "Home" },
  { path: "/kanban", label: "Kanban" },
  { path: "/list", label: "List" },
  { path: "/productivity", label: "Productivity" },
];

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl 
      bg-theme-surface/60 backdrop-blur-xl rounded-2xl
      border-[0.5px] border-theme-surface-light/30
      dark:border-theme-accent
      shadow-[0_8px_32px_rgb(0,0,0,0.08)]"
    >
      <div className="px-6">
        <div className="flex justify-between h-16">
          <div className="flex items-center gap-3 pl-2">
            <div className="bg-gradient-to-br from-theme-secondary to-theme-primary w-10 h-10 flex justify-center items-center p-2 rounded-xl shadow-lg shadow-theme-primary/20">
              <FontAwesomeIcon
                icon={faListCheck}
                className="text-theme-surface text-lg"
              />
            </div>
            <NavLink
              to="/"
              className="text-xl font-bold bg-gradient-to-r from-theme-secondary via-theme-primary to-theme-text bg-clip-text text-transparent 
                hover:to-theme-accent transition-all duration-300"
            >
              TaskApp
            </NavLink>
          </div>

          <div className="hidden md:flex items-center space-x-6 pr-2">
            {navigationItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-xl transition-all duration-500 relative group ${
                    isActive
                      ? "text-theme-primary font-medium"
                      : "text-theme-text-light hover:text-theme-text"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="pl-4 border-l border-theme-surface-light/30">
              <ThemeToggle />
            </div>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-theme-surface-light/50 hover:bg-theme-surface-light transition-all duration-300"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5">
                {[1, 2, 3].map((i) => (
                  <span
                    key={i}
                    className={`block w-5 h-0.5 bg-gray-600 dark:bg-gray-400 transform transition-all duration-300 ${
                      isOpen && i === 1 ? "rotate-45 translate-y-2" : ""
                    } ${isOpen && i === 2 ? "opacity-0" : ""} ${
                      isOpen && i === 3 ? "-rotate-45 -translate-y-2" : ""
                    }`}
                  />
                ))}
              </div>
            </button>
          </div>
        </div>

        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen
              ? "max-h-60 opacity-100 pb-4"
              : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="space-y-2 pt-2 border-t border-theme-surface-light/30">
            {navigationItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `block px-4 py-2.5 rounded-xl transition-all duration-500 relative group ${
                    isActive
                      ? "text-theme-primary bg-theme-surface-light/50 font-medium"
                      : "text-theme-text-light hover:text-theme-text hover:bg-theme-surface-light/30"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
