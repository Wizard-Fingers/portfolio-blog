"use client";

import Link from "next/link";
import { Icons } from "./icons";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function MainNav() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center space-x-4 lg:space-x-6 header-font lg:font-bold">
      <Link href="/" className="mr-4 flex items-center space-x-2 pb-2">
        <Icons.logo />
      </Link>
      <Link
        href="/blog"
        className={cn(
          "text-sm transition-colors hover:text-brandCol5 dark:hover:text-brandCol6 font-semibold tracking-wide hidden sm:inline-block",
          pathname === "/blog"
            ? "text-brandCol5 dark:text-brandCol6"
            : "text-brandCol3 dark:text-brandCol1"
        )}
      >
        BLOG
      </Link>
      <Link
        href="/about"
        className={cn(
          "text-sm transition-colors hover:text-brandCol5 dark:hover:text-brandCol6 font-semibold tracking-wide hidden sm:inline-block",
          pathname === "/about"
            ? "text-brandCol5 dark:text-brandCol6"
            : "text-brandCol3 dark:text-brandCol1"
        )}
      >
        ABOUT
      </Link>
      <Link
        href="/projects"
        className={cn(
          "text-sm transition-colors hover:text-brandCol5 dark:hover:text-brandCol6 font-semibold tracking-wide hidden sm:inline-block",
          pathname === "/projects"
            ? "text-brandCol5 dark:text-brandCol6"
            : "text-brandCol3 dark:text-brandCol1"
        )}
      >
        PROJECTS
      </Link>
    </nav>
  );
}
