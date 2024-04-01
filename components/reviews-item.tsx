import Image from "next/image";
import { StaticImageData } from "next/image";
import Link from "next/link";
import { Icons } from "./icons";
import { FaLocationDot, FaArrowRightLong, FaQuoteLeft } from "react-icons/fa6";

interface ReviewsItemProps {
  picture: string | StaticImageData;
  linkedin: string;
  name: string;
  location: string;
  title: string;
  review: string;
}

export function ReviewsItem({
  picture,
  name,
  location,
  title,
  review,
  linkedin,
}: ReviewsItemProps) {
  return (
    <section className="flex flex-col h-full mx-3 items-center md:my-4 xl:mx-8">
      <div className="w-[20rem] md:w-[35rem] lg:w-full">
        <div className="bg-brandCol1 w-[4.7rem] rounded-full drop-shadow-md">
          <Image src={picture} alt={name} width={85} height={85} />
        </div>
        <div className="flex items-center my-2 lg:mt-4">
          <h3 className="text-2xl header-font font-semibold">{name}</h3>
          <FaArrowRightLong
            size={30}
            className="mx-4 dark:text-brandCol4 text-brandCol5 drop-shadow-md"
          />
          <Link href={linkedin} target="_blank">
            <div className="bg-brandCol4 hover:border-brandCol6 hover:bg-brandCol5 dark:hover:bg-brandCol5 dark:hover:border-brandCol4 dark:hover:text-brandCol2 dark:bg-brandCol6 w-8 h-8 flex justify-center items-center rounded-full border border-brandCol2 dark:border-brandCol1">
              <Icons.linkedin />
            </div>
          </Link>
        </div>
      </div>
      <div className="flex w-[20rem] md:w-[35rem] lg:w-full mt-4">
        <div className="mr-2 text-brandCol5 dark:text-brandCol4">
          <FaLocationDot />
        </div>
        <h5 className="text-sm">{location}</h5>
      </div>
      <div className="w-[20rem] md:w-[35rem] lg:w-full">
        <h4 className="text-sm mt-4 underline underline-offset-2">{title}</h4>
      </div>
      <section className="my-4 w-[20rem] md:w-[35rem] lg:w-full flex-1">
        <div className="flex justify-start -translate-x-[0.1rem]">
          <FaQuoteLeft />
        </div>
        <div className="my-2 border-l-2 border-brandCol5 dark:border-brandCol6 pl-2">
          <p className="text-sm border-l-2 border-brandCol2 dark:border-brandCol1 pl-2">
            {review}
          </p>
        </div>
      </section>
    </section>
  );
}
