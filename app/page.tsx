import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn, sortPosts } from "@/lib/utils";
import Link from "next/link";
import { posts } from "#site/content";
import { PostItem } from "@/components/post-item";
import Image from "next/image";
import crownDark from "../public/static/crown-dark.png";
import crownLight from "../public/static/crown-light.png";
import { FaFileDownload } from "react-icons/fa";

export default function Home() {
  const latestPosts = sortPosts(posts).slice(0, 3);
  return (
    <>
      <div className="bg-gradient-to-b from-brandCol1 to-brandCol4 dark:from-brandCol2 dark:to-brandCol1 bg-opacity-80 dark:bg-opacity-60">
        <section className="md:mt-10 bg-graph-paper dark:bg-dark-graph-paper shadow-sm">
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
            <h1 className="text-3xl sm:text-7xl md:text-6xl lg:text-7xl text-balance header-font">
              Hi, I&apos;m{" "}
              <span className="tracking-widest">
                <span className="dark:text-brandCol6 text-brandCol5 drop-shadow-sm">
                  Art
                </span>
                hur
              </span>
            </h1>

            <p className="max-w-[40rem] mx-auto lg:mt-8 text-brandCol3 dark:text-brandCol1 text-muted sm:text-xl text-balance body-font ">
              Welcome to my portfolio and personal corner of the web. As a
              passionate web developer, I love building websites and helping
              others achieve their online goals. Whether you&apos;re here to
              peep at my projects or gain insights from my blog, I&apos;m stoked
              to share my knowledge with you.
            </p>
            <div className="flex flex-col gap-6 justify-center sm:flex-row mt-8 mb-16">
              <Link
                href="/blog"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "w-full sm:w-fit handwritten-font"
                )}
              >
                my Blog
              </Link>
              <Link
                href={siteConfig.links.github}
                target="_blank"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "w-full sm:w-fit handwritten-font"
                )}
              >
                my Github
              </Link>
              <Link
                href="/"
                target="_blank"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "w-full sm:w-fit handwritten-font"
                )}
              >
                my Resume/CV
                <FaFileDownload className="ml-2" />
              </Link>
            </div>
          </div>
          <div>{/* new reviews component coming */}</div>
        </section>
        <section className="container max-w-4xl py-6 lg:py-8 flex flex-col space-y-6 mt-60 shadow-lg lg:border lg:border-brandCol8 dark:border lg:dark:border-brandCol4 lg:dark:bg lg:rounded  bg-graph-paper dark:bg-dark-graph-paper">
          <h2 className="text-3xl sm:text-5xl md:6xl lg:text-7xl text-center">
            Latest{" "}
            <span className="dark:text-brandCol6 text-brandCol5 drop-shadow-md">
              Posts
            </span>
          </h2>
          <ul className="flex flex-col gap-4">
            {latestPosts.map((post) => (
              <li
                key={post.slug}
                className="first:border-t first:border-border"
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
        </section>
      </div>
    </>
  );
}
