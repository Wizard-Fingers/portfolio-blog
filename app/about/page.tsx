import { Metadata } from "next";
import aboutMeDark from "../../public/about-pic-dark.png";
import aboutMeLight from "../../public/about-pic-light.png";
import aboutMeLogoDark from "../../public/about-logo-dark.png";
import aboutMeLogoLight from "../../public/about-logo-light.png";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "About",
  description: "A little bit about me and my journey in Web Development.",
};

export default async function AboutPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10 border-l border-dashed border-brandCol2 dark:border-brandCol1 dash-spacing">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8 bg-graph-paper dark:bg-dark-graph-paper">
        <div className="flex-1 space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <div className="flex justify-end">
                <Image
                  src={aboutMeLogoLight}
                  alt="Art Beckett"
                  width={100}
                  height={100}
                  className="block dark:hidden"
                />
                <Image
                  src={aboutMeLogoDark}
                  alt="Art Beckett"
                  width={100}
                  height={100}
                  className="hidden dark:block"
                />
              </div>
              <h1 className="inline-block text-4xl lg:text-5xl">
                About{" "}
                <span className="text-brandCol5 dark:text-brandCol6">me</span>
              </h1>
            </div>
            <div className="bg-brandCol4 rounded-full shadow-md relative border-dashed-rotate">
              <div className="flex items-center -translate-x-[30px] translate-y-[120px] absolute">
                <FaLocationDot className="text-brandCol5 dark:text-brandCol4 text-2xl" />
                <h5 className="text-md font-bold mt-3">UK</h5>
              </div>
              <div className="w-[150px] h-[150px] rounded-full overflow-hidden">
                <Image
                  src={aboutMeLight}
                  alt="Arthur Beckett"
                  width={150}
                  height={150}
                  className="block dark:hidden rounded-full drop-shadow-2xl border-4 border-transparent"
                />
                <Image
                  src={aboutMeDark}
                  alt="Arthur Beckett"
                  width={150}
                  height={150}
                  className="hidden dark:block rounded-full drop-shadow-2xl border-4 border-transparent"
                />
              </div>
            </div>
          </div>
          <p className="text-xl text-muted-foreground">
            A little bit about me and my journey in Web Development.
          </p>
        </div>
      </div>
      <div className="w-full h-[1px] dark:bg-brandCol4 bg-brandCol5 rounded-full my-4" />
      <div className="space-y-4">
        <h2 className="text-2xl my-2">Who am I?</h2>
        <p>
          I&apos;m Arthur, a self-taught web developer from the UK. I&apos;ve
          been building websites for over 5 years now and I love every minute of
          it.
        </p>
      </div>
      <div className="w-full h-[1px] dark:bg-brandCol4 bg-brandCol5 rounded-full my-4" />
      <div className="space-y-4 my-2">
        <h2 className="text-2xl">What do I do?</h2>
        <p>
          I&apos;m currently working as a freelance web developer, building
          websites for clients all around the world. I also run a blog where I
          share my thoughts on web development and other related topics.
        </p>
      </div>
      <div className="w-full h-[1px] dark:bg-brandCol4 bg-brandCol5 rounded-full my-4" />
      <div className="space-y-4 my-2">
        <h2 className="text-2xl">Why do I do it?</h2>
        <p>
          I love building websites and helping others achieve their goals
          online. I believe that the web is a powerful tool that can be used to
          make a positive impact on you and the world.
        </p>
      </div>
      <div className="w-full h-[1px] dark:bg-brandCol4 bg-brandCol5 rounded-full my-4" />
    </div>
  );
}
