"use client";

import { useTheme } from "next-themes";
import { DropdownMenu, DropdownMenuContent } from "./ui/dropdown-menu";
import {
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="w-10 p-0">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle Theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          className="text-muted-foreground hover:text-primary cursor-pointer"
          onClick={() => setTheme("light")}
        >
          LIGHT
        </DropdownMenuItem>
        <DropdownMenuItem
          className="text-muted-foreground hover:text-primary cursor-pointer"
          onClick={() => setTheme("dark")}
        >
          DARK
        </DropdownMenuItem>
        <DropdownMenuItem
          className="text-muted-foreground hover:text-primary cursor-pointer"
          onClick={() => setTheme("system")}
        >
          SYSTEM
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
