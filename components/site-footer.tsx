import { Mail, Phone, Home, User, FileText, Code } from "lucide-react";
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

export function SiteFooter() {
  return (
    <footer className="bg-gradient-to-r from-brandCol8/70 via-brandCol6/70 to-brandCol5/70 dark:from-brandCol3/70 dark:via-brandCol2/70 dark:to-brandCol3/70">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Sitemap */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold mb-4 text-center">Sitemap</h3>
            <div className="flex justify-center items-center">
              <ul className="grid grid-cols-2 gap-4">
                <li>
                  <Link
                    href="/"
                    className="flex items-center space-x-2 hover:text-brandCol1 dark:hover:text-brandCol5"
                  >
                    <Home className="h-5 w-5" />
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="flex items-center space-x-2 hover:text-brandCol1 dark:hover:text-brandCol5"
                  >
                    <FileText className="h-5 w-5" />
                    <span>Blog</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="flex items-center space-x-2 hover:text-brandCol1 dark:hover:text-brandCol5"
                  >
                    <User className="h-5 w-5" />
                    <span>About</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="flex items-center space-x-2 hover:text-brandCol1 dark:hover:text-brandCol5"
                  >
                    <Code className="h-5 w-5" />
                    <span>Projects</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Name */}
          <div className="md:col-span-2 lg:col-span-1 flex flex-col items-center">
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
            </div>
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

          {/* Contact */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold mb-4 text-center">
              Contact info and CV
            </h3>
            <ul className="space-y-2">
              <li className="flex justify-center">
                <a
                  href="mailto:art.b.beckett@gmail.com"
                  className="flex items-center space-x-2 hover:text-brandCol1 dark:hover:text-brandCol5"
                >
                  <Mail className="h-5 w-5" />
                  <span>art.b.beckett@gmail.com</span>
                </a>
              </li>
              <li className="flex justify-center">
                <a
                  href="tel:+447925578819"
                  className="flex items-center space-x-2 hover:text-brandCol1 dark:hover:text-brandCol5"
                >
                  <Phone className="h-5 w-5" />
                  <span>+44 7925 578819</span>
                </a>
              </li>
              <li className="flex justify-center">
                <a
                  href="/path/to/your/cv.pdf"
                  download
                  className="flex items-center space-x-2 hover:text-brandCol1 dark:hover:text-brandCol5"
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
