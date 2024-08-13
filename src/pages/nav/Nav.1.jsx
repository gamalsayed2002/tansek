import styles from "./nav.module.css";
import logo from "./imgs/logo.png";
import { useRef } from "react";
import { RiMenu5Line } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Nav() {
  const navRef = useRef();

  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.logo}`}>
        <img src={logo} alt="logo not found" />
      </div>
      <nav ref={navRef}>
        <ul>
          <li>
            <a href="">الرئيسية</a>
          </li>
          <li>
            <a href="">تنسيق الحدائق</a>
          </li>
          <li>
            <a href="">تركيب و توريد عشب صناعي و طبيعي</a>
          </li>
          <li>
            <a href="">تركيب عشب جداري</a>
          </li>
          <li>
            <a href="">تصميم نوافير</a>
          </li>
          <li>
            <a href="">
              {" "}
              <IoMdArrowDropdown /> المزيد
            </a>
          </li>
        </ul>
      </nav>
      <div className={`${styles.menu}`}>
        <RiMenu5Line className={`${styles.icon}`} />
      </div>
    </header>
  );
}
