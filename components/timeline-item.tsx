// components/TimelineItem.tsx
import React from "react";

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
      <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-brandCol1 dark:bg-brandCol3 rounded-full ring-8 ring-brandCol2 dark:brandCol1 dark:ring-opacity-90">
        <svg
          aria-hidden="true"
          className="w-3 h-3 text-brandCol5 dark:text-brandCol6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
            clipRule="evenodd"
          />
        </svg>
      </span>
      <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-brandCol1 mr-4">
        {title}
        {isLatest && (
          <span className="bg-brandCol5 dark:bg-brandCol6 text-brandCol1 text-sm font-medium  px-2.5 py-0.5 rounded ml-4">
            Latest
          </span>
        )}
      </h3>
      <time className=" text-sm font-normal leading-none text-brandCol2 dark:text-brandCol1 text-opacity-20 pb-4">
        {year}
      </time>
      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        {details}
      </p>
    </li>
  );
};

export default TimelineItem;
