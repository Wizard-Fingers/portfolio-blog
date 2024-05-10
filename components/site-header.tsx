import { siteConfig } from "@/config/site";

import Link from "next/link";

import { Icons } from "./icons";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { ModeToggle } from "./mode-toggle";

export function SiteHeader() {
  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/30 z-10 drop-shadow-lg shadow-md">
      <div className="container flex h-[4rem] max-w-screen-xl items-center">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center">
            <section className="mt-2">
              <Link
                href={siteConfig.links.facebook}
                target="_blank"
                rel="noreferrer"
                className="lg:mx-2"
              >
                <div className="w-10 px-0 hidden sm:inline-flex justify-center">
                  <Icons.facebook className="lg:h-7 lg:w-7 text-brandCol2 dark:text-brandCol1 transition-colors duration-300 ease-in-out hover:text-brandCol5 dark:hover:text-brandCol6 hover:drop-shadow-md hover:scale-110" />
                  <span className="sr-only">facebook</span>
                </div>
              </Link>
              <Link
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="lg:mx-2"
              >
                <div className="w-10 px-0 hidden sm:inline-flex justify-center">
                  <Icons.linkedin className="lg:h-7 lg:w-7 text-brandCol2 dark:text-brandCol1 transition-colors duration-300 ease-in-out hover:text-brandCol5 dark:hover:text-brandCol6 hover:drop-shadow-md hover:scale-110" />
                  <span className="sr-only">linkedin</span>
                </div>
              </Link>
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
                className="lg:mx-2"
              >
                <div className="w-10 px-0 hidden sm:inline-flex justify-center">
                  <Icons.github className="lg:h-7 lg:w-7 text-brandCol2 dark:text-brandCol1 transition-colors duration-300 ease-in-out hover:text-brandCol5 dark:hover:text-brandCol6 hover:drop-shadow-md hover:scale-110" />
                  <span className="sr-only">github</span>
                </div>
              </Link>
            </section>
            <ModeToggle />
            <MobileNav />
          </nav>
        </div>
      </div>
    </header>
  );
}
