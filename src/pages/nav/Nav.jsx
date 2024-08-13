// link;
import { Link } from "react-router-dom";
// styles
import styles from "./nav.module.css";
// imgs
import logo from "./imgs/logo.png";
// use
import { useRef } from "react";
// icons
import { RiMenu5Line } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
export default function Nav() {
  const navRef = useRef();
  // res nav
  const showNav = () => {
    navRef.current.classList.toggle(`${styles.res_nav}`);
  };

  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.logo}`}>
        <img src={logo} alt="logo not found" />
      </div>
      <nav ref={navRef}>
        <ul>
          <li>
            <Link to="/">الرئيسية</Link>
          </li>
          <li>
            <Link to="">تنسيق الحدائق</Link>
          </li>
          <li>
            <Link to="">تركيب و توريد عشب صناعي و طبيعي</Link>
          </li>
          <li>
            <Link to="">تركيب عشب جداري</Link>
          </li>
          <li>
            <Link to="">تصميم نوافير</Link>
          </li>
          <li>
            <span>
         
              <IoMdArrowDropdown /> المزيد
              <div>
                <ul>
                  <li>
                    <Link to="">تصميم شلالات</Link>
                  </li>
                  <li>
                    <Link to="">تصميم مظلات</Link>
                  </li>
                  <li>
                    <Link to=""> تصميم جلسات خارجية</Link>
                  </li>
                  <li>
                    <Link to="">تصميم ملاعب </Link>
                  </li>
                  <li>
                    <Link to=""> تركيب نخيل</Link>
                  </li>
                  <li>
                    <Link to=""> تعديلات شبكات الري</Link>
                  </li>
                </ul>
              </div>
            </span>
          </li>
        </ul>
      </nav>
      <div className={`${styles.menu}`} onClick={showNav}>
        <RiMenu5Line className={`${styles.icon}`} />
      </div>
    </header>
  );
}
