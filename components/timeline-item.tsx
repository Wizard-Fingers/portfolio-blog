// components/TimelineItem.tsx
// import React from "react";
import { FaPaperPlane } from "react-icons/fa6";
interface TimelineItemProps {
  year: string;
  title: string;
  details: string;
  isLatest?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  title,
  details,
  isLatest,
}) => {
  return (
    <li className="mb-10 ml-6">
      <span className="flex absolute -left-6 justify-center items-center w-8 h-8 bg-brandCol1 dark:bg-brandCol3  ring-8 ring-brandCol5 dark:ring-brandCol6 dark:brandCol6 rounded-full">
        <FaPaperPlane className=" text-xl rotate-12 -translate-x-1" />
      </span>
      <h3 className="flex items-center mb-1 text-lg  text-gray-900 dark:text-brandCol1 mr-4 header-font font-semibold">
        {title}
        {isLatest && (
          <span className="bg-brandCol5 dark:bg-brandCol6 text-brandCol1 text-sm font-medium  px-2.5 py-0.5 rounded ml-4">
            Latest
          </span>
        )}
      </h3>
      <time className=" text-sm font-normal leading-none text-brandCol5 dark:text-brandCol4 mb-8">
        {year}
      </time>
      <p className="mb-4 text-base translate-y-2">{details}</p>
    </li>
  );
};

export default TimelineItem;
