// components/TimelineItem.tsx
// import React from "react";
import Image from "next/image";
import { FaPaperPlane } from "react-icons/fa6";

interface TimelineItemProps {
  year: string;
  title: string;
  details: string;
  image: string;
  isLatest?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  title,
  details,
  image, // Destructure the image prop
  isLatest,
}) => {
  return (
    <div className="lg:flex lg:justify-center">
      <li className="mb-10 ml-6">
        <span className="flex absolute -left-6 justify-center items-center w-8 h-8 bg-brandCol1 dark:bg-brandCol3 ring-8 ring-brandCol5 dark:ring-brandCol10 dark:brandCol10 rounded-full">
          <FaPaperPlane className="text-xl rotate-12 -translate-x-1" />
        </span>
        <div className="ml-4">
          <Image
            src={image}
            alt={title}
            width={64}
            height={64}
            className="ml-4 pb-2"
          />
          <div>
            <h3 className="flex items-center mb-1 text-lg text-brandCol2 dark:text-brandCol1 mr-4 header-font font-semibold">
              {title}
              {isLatest && (
                <span className="bg-brandCol5 dark:bg-brandCol6 text-brandCol1 text-sm font-medium px-2.5 py-0.5 rounded-lg ml-4">
                  Latest
                </span>
              )}
            </h3>
            <time className="text-sm font-semibold leading-none text-brandCol5 dark:text-brandCol4 mb-8">
              {year}
            </time>
          </div>
        </div>
        <div>
          <p className="my-4 text-base translate-y-2 max-w-[35rem] shadow-sm p-4 border border-brandCol11 rounded-lg">
            {details}
          </p>
        </div>
      </li>
    </div>
  );
};

export default TimelineItem;
