"use client";
import { useTheme } from "next-themes";

export default function Projects() {
  const { theme } = useTheme();

  return (
    <div
      className={`${
        theme === "dark" ? "dark-graph-paper" : "graph-paper"
      } min-h-screen p-8`}
    >
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        maxime ratione voluptas excepturi magnam? Tenetur pariatur alias
        asperiores quos esse fugit beatae harum laborum incidunt reprehenderit
        quia, enim quis voluptatum?
      </p>
    </div>
  );
}
