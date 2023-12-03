"use client";

import { Skeleton } from "@/components/ui/Skeleton";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { ButtonHTMLAttributes, useEffect, useState } from "react";
import { Button } from "./ui/Button";

interface ThemeSwitcherProps extends ButtonHTMLAttributes<HTMLButtonElement> {};

export function ThemeSwitcher(props: ThemeSwitcherProps) {
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
    <Button variant="ghost" size="icon" className="text-muted-foreground" onClick={handleThemeChange} {...props}>
      {theme === "dark" ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
    </Button>
  )
};
