"use client";
import { useTheme } from "next-themes";
import aboutMeDark from "../../public/about-pic-dark.png";
import aboutMeLight from "../../public/about-pic-light.png";
import aboutMeLogoDark from "../../public/about-logo-dark.png";
import aboutMeLogoLight from "../../public/about-logo-light.png";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import Timeline from "@/components/timeline";

export default function AboutPage() {
  return <ClientComponent />;
}

function ClientComponent() {
  const { theme } = useTheme();

  return (
    <>
      <div
        className={`${
          theme === "dark" ? "dark-graph-paper" : "graph-paper"
        } py-4 lg:py-6`}
      >
        <div className="container max-w-4xl border-l border-b border-dashed border-brandCol2 dark:border-brandCol1 dash-spacing shadow-xl bg-white/70 dark:bg-brandCol3/70 backdrop-blur-md pr-4 py-4">
          <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
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
                  <h1 className="inline-block text-4xl lg:text-5xl header-font font-bold">
                    About{" "}
                    <span className="text-brandCol5 dark:text-brandCol6">
                      me
                    </span>
                  </h1>
                </div>
                <div className="bg-brandCol4 rounded-full shadow-md relative border-dashed-rotate">
                  <div className="lg:flex items-center -translate-x-[30px] translate-y-[120px] absolute hidden">
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
                A little bit about me and my journey into Web Development.
              </p>
            </div>
          </div>
          <div className="w-full h-[1px] dark:bg-brandCol4 bg-brandCol5 rounded-full my-4" />
          <div className="space-y-4">
            <h2 className="text-2xl my-2">Who am I?</h2>
            <p>
              I&apos;m Arthur, but have gone by Art most of my life, I&apos;m a
              self-taught web developer based in the UK. I&apos;ve been building
              websites for over 5 years now and I&apos;v loved every minute of
              it. I personally love Frontend Development but recently I&apos;ve
              been working on becoming a Fullstack Developer.
            </p>
          </div>
          <div className="w-full h-[1px] dark:bg-brandCol4 bg-brandCol5 rounded-full my-4" />
          <div className="space-y-4 my-2">
            <h2 className="text-2xl">What do I do?</h2>
            <p>
              I&apos;m currently studying Fullstack Development, however
              I&apos;v worked as a Junior Frontend Developer for a few years
              now. I&apos;ve worked on a variety of projects from small business
              websites to large scale applications. I&apos;ve also worked on a
              few personal projects that I&apos;m proud of.
            </p>
          </div>
          <div className="w-full h-[1px] dark:bg-brandCol4 bg-brandCol5 rounded-full my-4" />
          <div className="space-y-4 my-2">
            <h2 className="text-2xl">Why do I do it?</h2>
            <p>
              I do this for the same reason I became a minister a police officer
              and now a programer. I don&apos;t like broken things whether its
              people who need support or people who needed justice or whether
              its broken code that needs fixing I like to help. I like to fix
              things and make them better. I like to make things work.
            </p>
          </div>
          <div className="w-full h-[1px] dark:bg-brandCol4 bg-brandCol5 rounded-full my-4" />
          <div>
            <h2 className="text-2xl lg:text-3xl my-8 header-font font-bold flex justify-end">
              My Timeline
            </h2>
          </div>
          <Timeline />
        </div>
      </div>
    </>
  );
}
