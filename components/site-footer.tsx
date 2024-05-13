import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaFileDownload,
} from "react-icons/fa";
import { SiDjango, SiNextdotjs } from "react-icons/si";
import SigBlack from "../public/sig-black.png";
import SigLight from "../public/logo-dark.png";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SiteFooter() {
  return (
    <footer className="bg-gradient-to-r from-brandCol8/70 via-brandCol6/70 to-brandCol5/70 dark:from-brandCol9/70 dark:via-brandCol10/70 dark:to-brandCol10/70 drop-shadow-lg shadow-md">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sitemap */}
          <div className="bg-brandCol1 dark:bg-brandCol3 backdrop-blur-lg rounded-lg p-6 shadow">
            <h3 className="text-xl font-bold mb-4 text-center">Sitemap</h3>
            <ul className="grid grid-cols-2 gap-4">
              <li className="flex justify-center">
                <Link
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "lg" }),
                    "w-full sm:w-48 handwritten-font drop-shadow-lg flex items-center space-x-2 hover:text-brandCol5 dark:hover:text-brandCol6"
                  )}
                  href="/"
                >
                  <span>Home</span>
                </Link>
              </li>
              <li className="flex justify-center">
                <Link
                  href="/blog"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "lg" }),
                    "w-full sm:w-48 handwritten-font drop-shadow-lg flex items-center space-x-2 hover:text-brandCol5 dark:hover:text-brandCol6"
                  )}
                >
                  <span>Blog</span>
                </Link>
              </li>
              <li className="flex justify-center">
                <Link
                  href="/about"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "lg" }),
                    "w-full sm:w-48 handwritten-font drop-shadow-lg flex items-center space-x-2 hover:text-brandCol5 dark:hover:text-brandCol6"
                  )}
                >
                  <span>About</span>
                </Link>
              </li>
              <li className="flex justify-center">
                <Link
                  href="/projects"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "lg" }),
                    "w-full sm:w-48 handwritten-font drop-shadow-lg flex items-center space-x-2 hover:text-brandCol5 dark:hover:text-brandCol6"
                  )}
                >
                  <span>Projects</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Name */}
          <div className="bg-brandCol1 dark:bg-brandCol3 backdrop-blur-lg rounded-lg p-6 shadow flex flex-col items-center justify-center">
            <div className="text-center">
              <div className="flex justify-center">
                <Image
                  src={SigBlack}
                  alt="Art Beckett"
                  width={100}
                  height={100}
                  className="dark:hidden"
                />
                <Image
                  src={SigLight}
                  alt="Art Beckett"
                  width={100}
                  height={100}
                  className="hidden dark:block"
                />
              </div>
              <p className="mb-4">Web Developer | Creative | Innovator</p>
              <div className="flex flex-wrap justify-center space-x-4">
                <FaHtml5 className="h-6 w-6 text-brandCol2 dark:text-brandCol6" />
                <FaCss3Alt className="h-6 w-6 text-brandCol2 dark:text-brandCol6" />
                <FaJs className="h-6 w-6 text-brandCol2 dark:text-brandCol6" />
                <FaReact className="h-6 w-6 text-brandCol2 dark:text-brandCol6" />
                <SiNextdotjs className="h-6 w-6 text-brandCol2 dark:text-brandCol6" />
                <FaPython className="h-6 w-6 text-brandCol2 dark:text-brandCol6" />
                <SiDjango className="h-6 w-6 text-brandCol2 dark:text-brandCol6" />
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-brandCol1 dark:bg-brandCol3 backdrop-blur-lg rounded-lg p-6 shadow">
            <h3 className="text-xl font-bold mb-4 text-center">
              Contact info and CV
            </h3>
            <ul className="space-y-4">
              <li className="flex justify-center">
                <a
                  href="mailto:art.b.beckett@gmail.com"
                  className="flex items-center space-x-2 hover:text-brandCol5 dark:hover:text-brandCol6"
                >
                  <Mail className="h-5 w-5" />
                  <span>art.b.beckett@gmail.com</span>
                </a>
              </li>
              <li className="flex justify-center">
                <a
                  href="tel:+447925578819"
                  className="flex items-center space-x-2 hover:text-brandCol5 dark:hover:text-brandCol6"
                >
                  <Phone className="h-5 w-5" />
                  <span>+44 7925 578819</span>
                </a>
              </li>
              <li className="flex justify-center">
                <a
                  href="/path/to/your/cv.pdf"
                  download
                  className="flex items-center space-x-2 hover:text-brandCol5 dark:hover:text-brandCol6"
                >
                  <FaFileDownload className="h-5 w-5" />
                  <span>Download CV</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-brandCol2 dark:border-brandCol1 pt-4">
          <p className="text-center text-muted-foreground">
            &copy; {new Date().getFullYear()} Art Beckett. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
