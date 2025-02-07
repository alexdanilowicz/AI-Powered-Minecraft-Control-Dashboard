import React, { useEffect, useState, createContext, useContext } from "react";
type Theme = "light" | "dark" | "system";
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  resolvedTheme: "light" | "dark";
}
const ThemeContext = createContext<ThemeContextType>({
  theme: "system",
  toggleTheme: () => {},
  setTheme: () => {},
  resolvedTheme: "light"
});
export const ThemeProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark" || saved === "system") {
      return saved;
    }
    return "system";
  });
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const updateResolvedTheme = () => {
      if (theme === "system") {
        setResolvedTheme(media.matches ? "dark" : "light");
      } else {
        setResolvedTheme(theme === "dark" ? "dark" : "light");
      }
    };
    updateResolvedTheme();
    media.addEventListener("change", updateResolvedTheme);
    return () => media.removeEventListener("change", updateResolvedTheme);
  }, [theme]);
  useEffect(() => {
    const root = document.documentElement;
    if (resolvedTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [resolvedTheme]);
  const toggleTheme = () => {
    setTheme(prev => {
      const newTheme = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };
  const updateTheme = (newTheme: Theme) => {
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };
  return <ThemeContext.Provider value={{
    theme,
    toggleTheme,
    setTheme: updateTheme,
    resolvedTheme
  }}>
      {children}
    </ThemeContext.Provider>;
};
export const useTheme = () => useContext(ThemeContext);