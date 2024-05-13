// import Image from "next/image";
// import { StaticImageData } from "next/image";
// import Link from "next/link";
// import { Icons } from "./icons";
// import { FaLocationDot, FaQuoteLeft } from "react-icons/fa6";

// interface ReviewsItemProps {
//   picture: string | StaticImageData;
//   linkedin: string;
//   name: string;
//   location: string;
//   title: string;
//   review: string;
// }

// export function ReviewsItem({
//   picture,
//   name,
//   location,
//   title,
//   review,
//   linkedin,
// }: ReviewsItemProps) {
//   return (
//     <section className="flex flex-col h-full p-4 bg-brandCol1 dark:bg-brandCol3 shadow-md rounded-lg m-2 lg:m-4">
//       {/* Image and Location */}
//       <div className="flex items-center mb-4 relative">
//         <div className="w-20 h-20 md:w-30 md:h-30 rounded-full bg-brandCol6 dark:bg-brandCol6 drop-shadow-md overflow-hidden">
//           <Image src={picture} alt={name} width={80} height={80} />
//         </div>
//         <Link href={linkedin} target="_blank">
//           <div className="absolute top-0 left-0 translate-x-[3rem] translate-y-[3rem]  dark:bg-brandCol6 bg-brandCol4 hover:bg-brandCol5 dark:hover:bg-brandCol5 w-8 h-8 flex justify-center items-center rounded-full border-2 border-brandCol1 shadow-md">
//             <Icons.linkedin />
//           </div>
//         </Link>
//         <div className="ml-2">
//           <div className="flex items-center">
//             <div className="mr-1 text-brandCol5 dark:text-brandCol4">
//               <FaLocationDot />
//             </div>
//             <h5 className="text-sm font-bold mt-2">{location}</h5>
//           </div>
//         </div>
//       </div>

//       {/* Name */}
//       <div className="mb-4 text-center">
//         <h3 className="text-2xl md:text-4xl header-font font-bold">{name}</h3>
//       </div>

//       {/* Title */}
//       <div className="mb-4 text-center">
//         <h4 className="text-base underline underline-offset-2 font-semibold">
//           {title}
//         </h4>
//       </div>

//       {/* Review */}
//       <section className="flex-1">
//         <div className="flex justify-start -translate-x-[0.1rem] text-brandCol5 dark:text-brandCol6">
//           <FaQuoteLeft size={24} />
//         </div>
//         <div className="mt-2 mb-4 border-l-2 border-brandCol5 dark:border-brandCol10  pl-4">
//           <p className="text-base leading-relaxed">{review}</p>
//         </div>
//       </section>
//     </section>
//   );
// }
import Image from "next/image";
import { StaticImageData } from "next/image";
import Link from "next/link";
import { Icons } from "./icons";
import { FaLocationDot, FaQuoteLeft } from "react-icons/fa6";

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
    <section className="flex flex-col h-full p-4 bg-brandCol1 dark:bg-brandCol3 shadow-md rounded-lg m-2 lg:m-4">
      {/* Image and Location */}
      <div className="flex items-center mb-4 relative">
        <div className="w-20 h-20 md:w-30 md:h-30 rounded-full bg-brandCol6 dark:bg-brandCol6 drop-shadow-md overflow-hidden">
          <Image src={picture} alt={name} width={80} height={80} />
        </div>
        <Link href={linkedin} target="_blank">
          <div className="absolute top-0 left-0 translate-x-[3rem] translate-y-[3rem] dark:bg-brandCol6 bg-brandCol4 hover:bg-brandCol5 dark:hover:bg-brandCol5 w-8 h-8 flex justify-center items-center rounded-full border-2 border-brandCol1 shadow-md">
            <Icons.linkedin />
          </div>
        </Link>
        <div className="ml-2">
          <div className="flex items-center">
            <div className="mr-1 text-brandCol2 dark:text-brandCol4">
              {" "}
              <FaLocationDot />
            </div>
            <h5 className="text-sm font-bold mt-2 text-brandCol2 dark:text-brandCol4">
              {" "}
              {/* Changed text color */}
              {location}
            </h5>
          </div>
        </div>
      </div>
      {/* Name */}
      <div className="mb-4 text-center">
        <h3 className="text-2xl md:text-4xl header-font font-bold">{name}</h3>
      </div>
      {/* Title */}
      <div className="mb-4 text-center">
        <h4 className="text-base font-bold text-brandCol2 dark:text-brandCol1">
          {" "}
          {/* Changed text color and font weight */}
          {title}
        </h4>
      </div>
      {/* Review */}
      <section className="flex-1">
        <div className="flex justify-start -translate-x-[0.1rem] text-brandCol5 dark:text-brandCol6">
          <FaQuoteLeft size={24} />
        </div>
        <div className="mt-2 mb-4 border-l-2 border-brandCol5 dark:border-brandCol10 pl-4">
          <p className="text-base leading-relaxed text-brandCol2 dark:text-brandCol1">
            {" "}
            {/* Changed text color */}
            {review}
          </p>
        </div>
      </section>
    </section>
  );
}
