import Image from "next/image";

import logo from "@/public/glowdrops-logo.svg";

const Header = () => {
  return (
    <div className="flex gap-4 px-4 pt-4">
      <Image src={logo} alt="logo" />
      <h2>Welcome Back, Johann</h2>
    </div>
  );
};
``;
export default Header;
