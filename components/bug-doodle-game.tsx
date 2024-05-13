import React, { useState, useEffect, useRef } from "react";
import { FaBug } from "react-icons/fa";

const BugDoodleGame: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [bugs, setBugs] = useState<
    {
      id: number;
      x: number;
      y: number;
      disappearing: boolean;
      margin: number;
    }[]
  >([
    { id: 1, x: 100, y: 800, disappearing: false, margin: 1 },
    { id: 2, x: 500, y: 700, disappearing: false, margin: 2 },
    { id: 3, x: 400, y: 550, disappearing: false, margin: 3 },
    { id: 4, x: 500, y: 400, disappearing: false, margin: 4 },
    { id: 5, x: 900, y: 500, disappearing: false, margin: 5 },
    { id: 6, x: 600, y: 200, disappearing: false, margin: 6 },
  ]);

  useEffect(() => {
    const moveBugs = setInterval(() => {
      setBugs((prevBugs) =>
        prevBugs.map((bug) => ({
          ...bug,
          x: getRandomPosition(bug.x, containerRef.current?.clientWidth || 0),
          y: getRandomPosition(bug.y, containerRef.current?.clientHeight || 0),
          margin: getRandomMargin(), // Update margin with a new random value
        }))
      );
    }, 500);

    return () => clearInterval(moveBugs);
  }, []);

  const getRandomPosition = (position: number, containerSize: number) => {
    const offset = Math.random() * 25 - 12.5;
    let newPosition = position + offset;

    newPosition = Math.max(16, Math.min(newPosition, containerSize - 16));

    return newPosition;
  };

  const getRandomMargin = () => {
    return Math.floor(Math.random() * 6); // Random value between 0 and 10
  };

  const handleClick = (bugId: number) => {
    setBugs((prevBugs) =>
      prevBugs.map((bug) =>
        bug.id === bugId ? { ...bug, disappearing: true } : bug
      )
    );
  };

  return (
    <div ref={containerRef} className="relative p-4 h-full w-full opacity-50">
      {bugs.map((bug) => (
        <div
          key={bug.id}
          className={`absolute flex items-center justify-center text-brandCol9 dark:text-brandCol10 text-lg drop-shadow-md cursor-pointer  ${
            bug.disappearing ? "disappear" : ""
          }`}
          style={{
            top: bug.y,
            left: bug.x,
            transform: `rotate(${Math.random() * 360}deg)`,
            width: bug.disappearing ? "0px" : "64px",
            height: bug.disappearing ? "0px" : "64px",
            opacity: bug.disappearing ? 0 : 1,
            transition: "all 1s ease-out",
            margin: `${bug.margin}rem`, // Apply the random margin value
          }}
          onClick={() => handleClick(bug.id)}
        >
          <FaBug />
        </div>
      ))}
    </div>
  );
};

export default BugDoodleGame;
