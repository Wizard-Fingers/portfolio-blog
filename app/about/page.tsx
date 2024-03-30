import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "A little bit about me and my journey in Web Development.",
};

export default async function AboutPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block text-4xl lg:text-5xl">About</h1>
          <p className="text-xl text-muted-foreground">
            A little bit about me and my journey in Web Development.
          </p>
        </div>
      </div>
      <hr className="mt-8" />
      <div className="space-y-4">
        <h2 className="text-2xl">Who am I?</h2>
        <p>
          I&apos;m Arthur, a self-taught web developer from the UK. I&apos;ve
          been building websites for over 5 years now and I love every minute of
          it.
        </p>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl">What do I do?</h2>
        <p>
          I&apos;m currently working as a freelance web developer, building
          websites for clients all around the world. I also run a blog where I
          share my thoughts on web development and other related topics.
        </p>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl">Why do I do it?</h2>
        <p>
          I love building websites and helping others achieve their goals
          online. I believe that the web is a powerful tool that can be used to
          make a positive impact on the world.
        </p>
      </div>
    </div>
  );
}
