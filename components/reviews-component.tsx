import { ReviewsItem } from "./reviews-item";
import { Icons } from "./icons";
import rom from "../public/static/rom.png";
import chris from "../public/static/chris.png";
import emily from "../public/static/emily.png";
import { StaticImageData } from "next/image";

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
        "Art's career transition showcases his commitment to growth and thirst for knowledge. His ability to grasp complex concepts and apply them innovatively is awe-inspiring. Art brings passion and creativity that elevate his technical skills. Watching his evolution has been a privilege. He's not just a talented developer, but an extraordinary person who inspires those around him. Any team would be fortunate to have Art's talent and positive influence.",
    },
  ];

  return (
    <>
      <section>
        <div className="flex justify-center translate-y-4">
          <Icons.lightBulb />
        </div>
        <div className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-t6xl header-font">
          <h2 className="drop-shadow-md">
            Re<span className="text-brandCol5 dark:text-brandCol4">views</span>
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-center space-y-8 lg:space-y-0 lg:space-x-8 mt-8">
          {content.map((review) => (
            <div key={review.id} className="flex-1 flex flex-col">
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
