"use client";

import { Skeleton } from "@/components/ui/Skeleton";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface NavbarThemeSwitcherProps {};

export function NavbarThemeSwitcher({}: NavbarThemeSwitcherProps) {
  const [isMounted, setIsMounted] = useState(false)
  const { theme, setTheme } = useTheme()

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
      setIsMounted(true)
    }, [])
  
    if (!isMounted) {
      return <Skeleton className="w-full h-8" />
    }

    function handleThemeChange() {
      setTheme(theme === "dark" ? "light" : "dark");
    }
  
    return (
      <button onClick={handleThemeChange}>
        Alternar exibição 
      </button>
    )
};
