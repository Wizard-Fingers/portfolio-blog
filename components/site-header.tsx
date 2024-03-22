import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Icons } from "./icons";
import { MainNav } from "./main-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]bg-background/60">
      <div className="container flex h-14 max-w-screen-xl items-center">
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
                <div
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "w-10 px-0"
                  )}
                >
                  <Icons.facebook className="h-5 w5" />
                  <span className="sr-only">facebook</span>
                </div>
              </Link>
              <Link
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="lg:mx-2"
              >
                <div
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "w-10 px-0"
                  )}
                >
                  <Icons.linkedin className="h-5 w5" />
                  <span className="sr-only">linkedin</span>
                </div>
              </Link>
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
                className="lg:mx-2"
              >
                <div
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "w-10 px-0"
                  )}
                >
                  <Icons.github className="h-5 w5" />
                  <span className="sr-only">github</span>
                </div>
              </Link>
            </section>
          </nav>
        </div>
      </div>
    </header>
  );
}
