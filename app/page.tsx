import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn, sortPosts } from "@/lib/utils";
import Link from "next/link";
import { posts } from "#site/content";
import { PostItem } from "@/components/post-item";

export default function Home() {
  const latestPosts = sortPosts(posts).slice(0, 3);
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:mt-10 lg:py-32">
        <div className="container flex flex-col gap-4 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-balance header-font">
            Hi, I&apos;m Arthur
          </h1>

          <p className="max-w-[40rem] mx-auto mt-4 text-muted-foreground sm:text-xl text-balance body-font">
            welcome to my portfolio and corner of the web where I&apos;m sharing
            my thoughts on my blog.
          </p>
          <div className="flex flex-col gap-4 justify-center sm:flex-row mt-4">
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
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full sm:w-fit handwritten-font"
              )}
            >
              my Github
            </Link>
          </div>
        </div>
      </section>
      <section className="container max-w-4xl py-6 lg:py-10 flex flex-col space-y-6 mt-60">
        <h2 className="text-3xl sm:text-5xl md:6xl lg:text-7xl text-center">
          Latest Posts
        </h2>
        <ul className="flex flex-col gap-4">
          {latestPosts.map((post) => (
            <li key={post.slug} className="first:border-t first:border-border">
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
    </>
  );
}
