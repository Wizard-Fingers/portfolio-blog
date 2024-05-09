// components/Timeline.tsx
import React from "react";
import TimelineItem from "./timeline-item";

interface WorkplaceData {
  year: string;
  title: string;
  details: string;
  isLatest?: boolean;
}

const Timeline: React.FC = () => {
  const workplaces: WorkplaceData[] = [
    {
      year: "2022 - Present",
      title: "Company Name",
      details:
        "Get a box of snacks, drinks and few gift cards delivered to your door every month.",
      isLatest: true,
    },
    {
      year: "2022 - Present",
      title: "Company Name",
      details:
        "Get a box of snacks, drinks and few gift cards delivered to your door every month.",
      isLatest: true,
    },
    {
      year: "2022 - Present",
      title: "Company Name",
      details:
        "Get a box of snacks, drinks and few gift cards delivered to your door every month.",
      isLatest: true,
    },
    {
      year: "2022 - Present",
      title: "Company Name",
      details:
        "Get a box of snacks, drinks and few gift cards delivered to your door every month.",
      isLatest: true,
    },
    {
      year: "2022 - Present",
      title: "Company Name",
      details:
        "Get a box of snacks, drinks and few gift cards delivered to your door every month.",
      isLatest: true,
    },
    // Add more workplaces here
  ];

  return (
    <div className="relative">
      <ol className="relative border-l border-brandCol5 dark:border-brandCol6">
        {workplaces.map((workplace, index) => (
          <TimelineItem
            key={index}
            year={workplace.year}
            title={workplace.title}
            details={workplace.details}
            isLatest={workplace.isLatest}
          />
        ))}
      </ol>
    </div>
  );
};

export default Timeline;
