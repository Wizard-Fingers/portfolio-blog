import { siteConfig } from "@/config/site";
// import { cn } from "@/lib/utils";
import Link from "next/link";
// import { buttonVariants } from "./ui/button";
import { Icons } from "./icons";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { ModeToggle } from "./mode-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]bg-background/30 z-10">
      <div className="container flex h-[4rem] max-w-screen-xl items-center">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center">
            <section>
              <Link
                href={siteConfig.links.facebook}
                target="_blank"
                rel="noreferrer"
                className="lg:mx-2"
              >
                <div className="w-10 px-0 hidden sm:inline-flex justify-center">
                  <Icons.facebook className="h-5 w-5 text-brandCol2 dark:text-brandCol1 transition-colors duration-300 ease-in-out hover:text-brandCol5 dark:hover:text-brandCol6 hover:drop-shadow-md hover:scale-110" />
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
                  <Icons.linkedin className="h-5 w-5 text-brandCol2 dark:text-brandCol1 transition-colors duration-300 ease-in-out hover:text-brandCol5 dark:hover:text-brandCol6 hover:drop-shadow-md hover:scale-110" />
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
                  <Icons.github className="h-5 w-5 text-brandCol2 dark:text-brandCol1 transition-colors duration-300 ease-in-out hover:text-brandCol5 dark:hover:text-brandCol6 hover:drop-shadow-md hover:scale-110" />
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
