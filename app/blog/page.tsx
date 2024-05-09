import { posts } from "#site/content";
import { PostItem } from "@/components/post-item";
import { QueryPagination } from "@/components/querry-pagination";
import { sortPosts } from "@/lib/utils";
import { Metadata } from "next";
import blogImgDark from "../../public/blog-img-dark.png";
import blogImgLight from "../../public/blog-img-light.png";
import Image from "next/image";

export const metadata: Metadata = {
  title: "My Blog",
  description: "My personal ramblings on all things Web Development.",
};

const POSTS_PER_PAGE = 5;

interface BlogPageProps {
  searchParams: { page?: string };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const currentPage = Number(searchParams?.page) || 1;
  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);
  const displayPosts = sortedPosts.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage
  );

  return (
    <div className="container max-w-4xl py-6 lg:py-10 ">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8 bg-graph-paper dark:bg-dark-graph-paper">
        <div className="flex-1 space-y-4">
          <div className="absolute translate-x-[10rem] lg:translate-x-[12rem]">
            <Image
              src={blogImgLight}
              alt="Blog"
              className=" block dark:hidden"
              width={50}
              height={50}
            />
            <Image
              src={blogImgDark}
              alt="Blog"
              className="hidden dark:block"
              width={50}
              height={50}
            />
          </div>
          <h1 className="inline-block text-4xl lg:text-5xl header-font font-bold">
            My <span className="text-brandCol5 dark:text-brandCol6">Blog</span>
          </h1>
          <p className="text-xl text-muted">
            Explore my personal insights and experiences in web development, the
            valuable lessons I&apos;ve learned along the way, and get to know a
            bit about the person behind my code.
          </p>
        </div>
      </div>
      <div className="w-full h-[1px] dark:bg-brandCol4 bg-brandCol5 rounded-full my-4" />
      {/* rendered posts */}
      {displayPosts?.length > 0 ? (
        <ul className="flex flex-col">
          {displayPosts.map((post) => {
            const { slug, date, title, description } = post;
            return (
              <li key={slug}>
                <PostItem
                  slug={slug}
                  date={date}
                  title={title}
                  description={description}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Nothing to see here yet</p>
      )}
      <QueryPagination totalPages={totalPages} className="mt-4 justify-end" />
    </div>
  );
}
