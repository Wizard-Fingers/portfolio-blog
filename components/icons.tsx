type IconProps = React.HTMLAttributes<SVGElement>;
import Image from "next/image";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import smLogoLight from "../public/sm-logo-light.png";
import smLogoDark from "../public/sm-logo-dark.png";
import logoLight from "../public/logo-light.png";
import logoDark from "../public/logo-dark.png";
import lightbulbLight from "../public/lightbulb-light.png";
import lightbulbDark from "../public/lightbulb-dark.png";

export const Icons = {
  navLogo: () => (
    <>
      <Image
        src={smLogoLight}
        alt="Art Beckett"
        width={80}
        height={80}
        className="dark:hidden"
      />
      <Image
        src={smLogoDark}
        alt="Art Beckett"
        width={80}
        height={80}
        className="hidden dark:block"
      />
      <span className="sr-only">Art&apos;s signature logo</span>
    </>
  ),

  logo: () => (
    <>
      <Image
        src={logoLight}
        alt="Art Beckett"
        width={80}
        height={80}
        className="mt-4 dark:hidden"
      />
      <Image
        src={logoDark}
        alt="Art Beckett"
        width={80}
        height={80}
        className="mt-4 hidden dark:block"
      />
      <span className="sr-only">Art Beckett&apos;s signature and logo</span>
    </>
  ),

  lightBulb: () => (
    <>
      <Image
        src={lightbulbLight}
        alt="Lightbulb"
        width={80}
        height={80}
        className="mt-4 dark:hidden"
      />
      <Image
        src={lightbulbDark}
        alt="Lightbulb"
        width={80}
        height={80}
        className="mt-4 hidden dark:block"
      />
      <span className="sr-only">Lightbulb</span>
    </>
  ),
  facebook: (props: IconProps) => <FaFacebook {...props} />,
  github: (props: IconProps) => <FaGithub {...props} />,
  linkedin: (props: IconProps) => <FaLinkedinIn {...props} />,
};
