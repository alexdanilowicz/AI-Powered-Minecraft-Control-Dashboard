import React from "react";
import { Home, Settings, Book, Users, Terminal } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
export const Sidebar = () => {
  const location = useLocation();
  const links = [{
    icon: Home,
    label: "Dashboard",
    path: "/"
  }, {
    icon: Settings,
    label: "AI Control",
    path: "/ai-control"
  }, {
    icon: Book,
    label: "Scripture",
    path: "/scripture"
  }, {
    icon: Users,
    label: "Players",
    path: "/players"
  }, {
    icon: Terminal,
    label: "Services",
    path: "/services"
  }];
  return <aside className="w-64 h-screen bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 fixed left-0 top-0 z-50 shadow-lg">
      <div className="p-6 border-b border-gray-200/50 dark:border-gray-700/50">
        <h1 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Stultus' Divine Control
        </h1>
      </div>
      <nav className="mt-6">
        <ul className="space-y-2">
          {links.map(link => {
          const Icon = link.icon;
          const isActive = location.pathname === link.path;
          return <li key={link.path}>
                <Link to={link.path} className={`flex items-center px-6 py-3 transition-all duration-200 ${isActive ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400" : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50"}`}>
                  <Icon className={`w-5 h-5 mr-3 transition-colors ${isActive ? "text-blue-600 dark:text-blue-400" : ""}`} />
                  {link.label}
                </Link>
              </li>;
        })}
        </ul>
      </nav>
    </aside>;
};