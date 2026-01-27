"use client";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme(); // Using resolvedTheme instead of theme
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch 
  useEffect(() => setMounted(true), []);
  
  // Important: While mounting, we render a placeholder with the same dimensions
  // to prevent the layout from "jumping" when the icon finally appears.
  if (!mounted) {
    return <div className="p-2 w-[34px] h-[34px]" />; 
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full bg-slate-100 dark:bg-blue-500/10 hover:bg-blue-200 dark:hover:bg-blue-500/20 transition-all text-blue-600 dark:text-blue-400"
      aria-label="Toggle Theme"
    >
      {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}