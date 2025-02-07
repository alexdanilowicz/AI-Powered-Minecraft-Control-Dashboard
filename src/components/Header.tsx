import React from "react";
import { Sun, Moon, Monitor } from "lucide-react";
import { useTheme } from "./ThemeProvider";
export const Header = () => {
  const {
    theme,
    setTheme,
    resolvedTheme
  } = useTheme();
  return <header className="flex justify-between items-center mb-8">
      <h2 className="text-2xl font-semibold dark:text-white">
        Dashboard Overview
      </h2>
      <div className="flex items-center gap-2">
        <button onClick={() => setTheme("light")} className={`p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 ${theme === "light" ? "text-blue-500" : "text-gray-500 dark:text-gray-400"}`} title="Light Mode">
          <Sun className="w-5 h-5" />
        </button>
        <button onClick={() => setTheme("dark")} className={`p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 ${theme === "dark" ? "text-blue-500" : "text-gray-500 dark:text-gray-400"}`} title="Dark Mode">
          <Moon className="w-5 h-5" />
        </button>
        <button onClick={() => setTheme("system")} className={`p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 ${theme === "system" ? "text-blue-500" : "text-gray-500 dark:text-gray-400"}`} title="System Theme">
          <Monitor className="w-5 h-5" />
        </button>
      </div>
    </header>;
};