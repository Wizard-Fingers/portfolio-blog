type IconProps = React.HTMLAttributes<SVGElement>;
import Image from "next/image";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import Logo from "../public/static/logo.png";
export const Icons = {
  logo: () => (
    <>
      <Image
        src={Logo}
        alt="Art Beckett"
        width={80}
        height={80}
        className="mt-4"
      />
      <span className="sr-only">Art Beckett&apos;s signature and logo</span>
    </>
  ),
  facebook: (props: IconProps) => <FaFacebook {...props} />,
  github: (props: IconProps) => <FaGithub {...props} />,
  linkedin: (props: IconProps) => <FaLinkedinIn {...props} />,
};
