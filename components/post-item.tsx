import { Calendar } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn, formatDate } from "@/lib/utils";
import { FaArrowRightLong, FaCalendarDay } from "react-icons/fa6";

interface PostItemProps {
  slug: string;
  title: string;
  description?: string;
  date: string;
}

export function PostItem({ slug, title, description, date }: PostItemProps) {
  return (
    <article className="flex flex-col gap-2 border-border border-b-[2px] border-brandCol5 dark:border-brandCol10 py-4">
      <div>
        <h2 className="text-2xl font-bold">
          <Link href={slug}>{title}</Link>
        </h2>
      </div>
      <div className="max-w-none text-brandCol3 dark:text-brandCol1">
        {description}
      </div>
      <div className="flex justify-between items-center">
        <dl>
          <dt className="sr-only">Published on</dt>
          <dd className="text-sm flex items-center gap-4">
            <FaCalendarDay className="w-5 h-5 text-brandCol5 dark:text-brandCol4 translate-x-1 -translate-y-[0.2rem]" />
            <time dateTime={date}>{formatDate(date)}</time>
          </dd>
        </dl>
        <Link
          href={slug}
          className={cn(buttonVariants({ variant: "link" }), "py-0  group")}
        >
          Read more{" "}
          <FaArrowRightLong className="ml-2 dark:text-brandCol6 text-brandCol5 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
