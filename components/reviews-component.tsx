"use client";
import { ReviewsItem } from "./reviews-item";
import { Icons } from "./icons";
import rom from "../public/rom.png";
import chris from "../public/chris.png";
import emily from "../public/emily.png";
import { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
interface Review {
  id: number;
  picture: StaticImageData;
  name: string;
  location: string;
  linkedin: string;
  title: string;
  review: string;
}

export function ReviewsComponent(): JSX.Element {
  const content: Review[] = [
    {
      id: 1,
      picture: emily,
      name: "Dr Emily Hill",
      location: "USA",
      linkedin: "https://www.linkedin.com/in/emily-hill-6921b92/",
      title: "Founder of the Joy of Coding Academy",
      review:
        "Arthur Beckett excels as a Frontend Web Developer. His work ethic and attention to detail produce high-quality websites with consistent user interfaces. Arthur's expertise with style sheets is particularly impressive. Beyond technical skills, he collaborates effectively and supports colleagues. Arthur's dedication, talent, and team-oriented approach make him a valuable asset. He would be a strong addition to any web development team.",
    },
    {
      id: 2,
      picture: chris,
      name: "Chris Snoek",
      location: "The Netherlands",
      linkedin: "https://www.linkedin.com/in/chrissnoek/",
      title: "Mentor & Full Stack Developer",
      review:
        "Guiding Art for 8 months, I watched him become a truly competent web developer. His incredible attention to detail and creative problem-solving approach set him apart. Art doesn't settle for obvious solutions; he explores innovative ways to tackle challenges. Working with his enthusiasm, dedication, and eagerness to learn has been a joy. Witnessing his growth firsthand was rewarding. Art's skills paired with his creative mindset will make him an invaluable asset.",
    },
    {
      id: 3,
      picture: rom,
      name: "Romualdo Duarte",
      location: "Brazil",
      linkedin: "https://www.linkedin.com/in/romualdo-duarte/",
      title: "Former Student, Friend &  Software Developer",
      review:
        "Art's career shift really highlights how dedicated he is to growing and learning. I mean, the way he just gets these super complex ideas and then turns them into something amazing is just mind-blowing. He brings so much passion and creativity to everything he does, which totally boosts his technical skills. Watching him grow and evolve has been such a privilege. He's not just a great developer; he's also one of those people who just inspire everyone around him. Honestly, any team would be lucky to have him.",
    },
  ];
  // lightbulb rotates on theme change
  const { theme } = useTheme();
  const [gradientRotation, setGradientRotation] = useState("rotate-0");

  useEffect(() => {
    if (theme === "dark") {
      setGradientRotation("rotate-180");
    } else {
      setGradientRotation("rotate-0");
    }
  }, [theme]);

  return (
    <>
      <div className="flex justify-center">
        <div className="mt-8 p-4">
          <div
            className="flex justify-center -translate-y-[3.5rem] -translate-x-[2.5rem] 
        md:translate-x-[1rem] lg:-translate-y-[5rem]"
          >
            <div className="absolute h-10 w-10 md:h-15 md:w-15 mb-3 md:mr-32 lg:translate-y-[2rem] rotate-12 2xl:translate-y-[2rem] 2xl:h-15 2xl:w-15">
              <div
                className={`absolute inset-0 bg-gradient-to-br from-brandCol1 via-brandCol4 to-brandCol7 rounded-full filter blur-lg scale-150 opacity-75 ${gradientRotation}`}
              ></div>
              <div className="relative z-10 drop-shadow-2xl">
                {Icons.lightBulb()}
              </div>
            </div>
          </div>
          <div className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-t6xl header-font font-bold">
            <h2 className="drop-shadow-md">
              Re
              <span className="text-brandCol5 dark:text-brandCol6 drop-shadow-2xl">
                views
              </span>
            </h2>
          </div>
        </div>
      </div>
      <section className="shadow-lg bg-gradient-to-r from-brandCol8/70 via-brandCol6/70 to-brandCol5/70 dark:from-brandCol3/70 dark:via-brandCol2/70 dark:to-brandCol3/70 border-t-[2px] border-b-[2px] border-brandCol5 dark:border-brandCol4/70">
        <div className="flex flex-col lg:flex-row lg:justify-center shadow-xl">
          {content.map((review) => (
            <div key={review.id} className="flex flex-col">
              <ReviewsItem
                picture={review.picture}
                name={review.name}
                linkedin={review.linkedin}
                location={review.location}
                title={review.title}
                review={review.review}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
