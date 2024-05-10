"use client";
import { useTheme } from "next-themes";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn, sortPosts } from "@/lib/utils";
import Link from "next/link";
import { posts } from "#site/content";
import { PostItem } from "@/components/post-item";
import Image from "next/image";
import crownDark from "../public/crown-dark.png";
import crownLight from "../public/crown-light.png";
import letterLight from "../public/letter-light.png";
import letterDark from "../public/letter-dark.png";
import { ReviewsComponent } from "@/components/reviews-component";
import SmileDark from "../public/smile-dark.png";
import SmileLight from "../public/smile-light.png";
export default function Home() {
  const latestPosts = sortPosts(posts).slice(0, 3);
  const { theme } = useTheme();
  return (
    <>
      <div
        className={`${theme === "dark" ? "dark-graph-paper" : "graph-paper"}  `}
      >
        <section className="">
          <div className="container flex flex-col gap-4 text-center">
            <div className="flex justify-center lg:translate-y-10 translate-y-7">
              <Image
                height={70}
                width={70}
                src={crownDark}
                alt="crown"
                className="hidden dark:block h-[2rem] w-[2rem] md:h-[4rem] md:w-[4rem]"
              />
              <Image
                height={70}
                width={70}
                src={crownLight}
                alt="crown"
                className="dark:hidden h-[2rem] w-[2rem] md:h-[4rem] md:w-[4rem]"
              />
            </div>
            <h1 className="text-4xl sm:text-7xl md:text-6xl lg:text-7xl text-balance header-font font-bold leading-tight lg:mb-6">
              Hi, I&apos;m{" "}
              <span className="tracking-widest">
                <span className="dark:text-brandCol6 text-brandCol5 drop-shadow-md">
                  Art
                </span>
                hur
              </span>
            </h1>
            <div className="flex justify-center h-[5.5rem] xl:h-[6.5rem]">
              <div className="absolute -translate-y-[6rem]">
                <Image
                  src={SmileLight}
                  alt="smile"
                  className="dark:hidden"
                  width={300}
                  height={300}
                />
                <Image
                  src={SmileDark}
                  alt="smile"
                  className="hidden dark:block"
                  width={300}
                  height={300}
                />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="max-w-[50rem] max-h-[40rem] p-4 rounded-md bg-gradient-to-r from-brandCol8/70 via-brandCol6/70 to-brandCol5/70 dark:from-brandCol3/70 dark:via-brandCol2/70 dark:to-brandCol3/70 animate-subtle-glow">
                <div className="bg-brandCol1 dark:bg-brandCol3 backdrop-blur-lg rounded-lg p-4 shadow-lg supports-[backdrop-filter]bg-background/30">
                  <p className="max-w-[50rem] mx-auto text-brandCol2 dark:text-brandCol1 sm:text-xl text-balance handwritten-font">
                    Welcome to my portfolio and personal corner of the web.
                    <br /> As a passionate{" "}
                    <span className="font-bold text-brandCol5 dark:text-brandCol6">
                      web developer
                    </span>
                    , I love building websites and helping others achieve their
                    online goals. Whether you&apos;re here to peep at my
                    projects or gain insights from{" "}
                    <span className="font-bold text-brandCol5 dark:text-brandCol6">
                      my blog
                    </span>
                    , I&apos;m stoked to share my knowledge with you.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 justify-center sm:flex-row mt-8 lg:mb-[7rem] mb-[4rem] relative">
              <div className="hidden lg:block">
                <Link
                  href={siteConfig.links.github}
                  target="_blank"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "lg" }),
                    "w-full sm:w-48 handwritten-font drop-shadow-lg"
                  )}
                >
                  my Github
                </Link>
              </div>
              <Link
                href="/blog"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "w-full sm:w-48 handwritten-font drop-shadow-lg"
                )}
              >
                my Blog
              </Link>
            </div>
          </div>
          <div className="border-dashed border-brandCol2 dark:border-brandCol1 dash-spacing border-t" />
          <div className="bg-brandCol1/70 dark:bg-brandCol3/70 space-y-2">
            <ReviewsComponent />
          </div>
        </section>

        <div className="border-dashed border-brandCol2 dark:border-brandCol1 dash-spacing border-t mt-1" />
        <section className="container max-w-4xl py-12 lg:py-16 flex flex-col space-y-8">
          <div className="relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-12">
              <Image
                src={letterDark}
                alt="letter"
                className="hidden dark:block"
                width={70}
                height={70}
              />
              <Image
                src={letterLight}
                alt="letter"
                className="dark:hidden"
                width={70}
                height={70}
              />
            </div>
          </div>

          <h2 className="text-3xl sm:text-5xl md:6xl lg:text-7xl text-center font-bold header-font">
            Latest{" "}
            <span className="dark:text-brandCol6 text-brandCol5 drop-shadow-md">
              Posts
            </span>
          </h2>
          <div className="flex justify-center">
            <div className="max-w-[50rem] p-4 rounded-lg bg-gradient-to-r from-brandCol8/70 via-brandCol6/70 to-brandCol5/70 dark:from-brandCol3/70 dark:via-brandCol2/70 dark:to-brandCol3/70 animate-subtle-glow">
              <div className="bg-brandCol1 dark:bg-brandCol3 backdrop-blur-lg rounded-lg p-6 shadow-md supports-[backdrop-filter]bg-background/30">
                <ul className="flex flex-col gap-8">
                  {latestPosts.map((post) => (
                    <li
                      key={post.slug}
                      className="flex flex-col gap-4 dark:text-brandCol1 text-brandCol2"
                    >
                      <PostItem
                        slug={post.slug}
                        title={post.title}
                        description={post.description}
                        date={post.date}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
