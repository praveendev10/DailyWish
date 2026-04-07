import { useState } from "react";
import banner from "../../../assets/images/banner.jpg";
import styles from "./homelayout.module.css";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
function Homelayout() {
  const [isSignOpen, setIsSignOpen] = useState(false);
  const clickHomePage = () => {
    if (isSignOpen === true) {
      setIsSignOpen(false);
    }
  };
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const signInBtn = () => {
    navigate("/signin");
  };
  const signUpBtn = () => {
    navigate("/signup");
  };

  return (
    <div
      className={styles.home_page}
      style={{ backgroundImage: `url(${banner})` }}
      onClick={() => clickHomePage()}
    >
      <div className={styles.bannerHeader}>
        <div className={styles.bannerHeader_center}>Daily Wish</div>
        <div
          className={styles.bannerHeader_sign}
          onClick={() => setIsSignOpen(!isSignOpen)}
        >
          {!isSignOpen ? (
            <FiChevronDown className={styles.signDownIcon} />
          ) : (
            <FiChevronUp className={styles.signUpIcon} />
          )}
        </div>
        {isSignOpen && (
          <div className={styles.dropdown}>
            <div className={styles.signInBtn} onClick={() => signInBtn()}>
              Sign In
            </div>
            <div className={styles.signUpBtn} onClick={() => signUpBtn()}>
              Sign Up
            </div>
          </div>
        )}
      </div>
      <div className={styles.layoutWrapper}>
        {pathname === "/" && (
          <div className={styles.frontPageHead}>
            <div>Welcome 2 DailyWish</div>
            <span>Just wish your friends daily via mail</span>
          </div>
        )}
        <Outlet />
      </div>
    </div>
  );
}

export default Homelayout;
