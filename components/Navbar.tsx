import Image from "next/image";
import navStyles from "../styles/Navbar.module.css";
import GYTLogo from "../public/gyt-logo.svg";
import MenuIcon from "../public/hamburger-menu-icon.svg";
import Link from "next/link";
type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className={navStyles.navbar}>
      <div className={navStyles.logo}>
        <Link href={"/"}>
          <Image src={GYTLogo} alt="GYT Logo" />
        </Link>
      </div>
      <div className={navStyles.nav}>
        <li>Why GYTWorkz</li>
        <li>Services</li>
        <Link href={"/About"} style={{ textDecoration: "none" }}>
          <li>About Us</li>
        </Link>
        <Link href={"/Contact"} style={{ textDecoration: "none" }}>
          <li>Contact Us</li>
        </Link>
      </div>
      <Image className={navStyles.hamburger} src={MenuIcon} alt="Menu Icon" />
    </nav>
  );
};

export default Navbar;
