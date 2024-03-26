"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import Link, { LinkProps } from "next/link";
import { Icons } from "./icons";
import { siteConfig } from "@/config/site";
import { FaArrowLeft } from "react-icons/fa6";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="w-10 p-0 sm:hidden">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle Theme</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <MobileLink
          onOpenChange={setOpen}
          href="/"
          className="flex items-center"
        >
          <Link href="/">
            <Icons.navLogo />
          </Link>
        </MobileLink>
        <div className="flex flex-col gap-6 mt-8 text-xl">
          <MobileLink onOpenChange={setOpen} href="/blog">
            <div className="flex">
              BLOG{" "}
              <div className="ml-2 flex items-center dark:text-brandCol6 text-brandCol5">
                <FaArrowLeft />
              </div>
            </div>
          </MobileLink>
          <MobileLink onOpenChange={setOpen} href="/about">
            <div className="flex">
              ABOUT{" "}
              <div className="ml-2 flex items-center dark:text-brandCol6 text-brandCol5">
                {" "}
                <FaArrowLeft />
              </div>
            </div>
          </MobileLink>
          <MobileLink onOpenChange={setOpen} href="/projects">
            <div className="flex">
              PROJECTS{" "}
              <div className="ml-2 flex items-center dark:text-brandCol6 text-brandCol5">
                {" "}
                <FaArrowLeft />
              </div>
            </div>
          </MobileLink>

          <div className="flex justify-around mt-[3rem]">
            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.facebook}
            >
              <div className="flex items-center gap-2">
                <Icons.facebook className="h-7 w-7" />
                <span className="sr-only">Facebook</span>
              </div>
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.linkedin}
            >
              <div className="flex items-center gap-2">
                <Icons.linkedin className="h-7 w-7" />
                <span className="sr-only">Linkedin</span>
              </div>
            </Link>

            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.github}
            >
              <div className="flex items-center gap-2">
                <Icons.github className="h-7 w-7" />
                <span className="sr-only">Github</span>
              </div>
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends LinkProps {
  children: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  children,
  className,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
}
