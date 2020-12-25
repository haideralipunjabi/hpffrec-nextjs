import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import LogoSvg from "../public/hpffrec_icon.svg"
import styles from "./navbar.module.scss";
import IconButton from "./iconButton";
import AppleModal from "./appleModal";
import {isApple, isInstallable} from "./CustomHooks";
import FaqModal from "./faqModal";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAppleShown,setIsAppleShown] = useState(false);
  const [isFAQShown, setIsFAQShown] = useState(false);
  const router = useRouter();
  const installPWA = isInstallable()
  const isAppleDevice = isApple();
  return (
    <>
      <nav className={"navbar"} role="navigation" aria-label="main navigation">
        <div className={"navbar-brand"}>
          
        <div className="navbar-item">
          <a className="is-flex is-align-items-center" href="/">
            <LogoSvg className="has-text-centered-mobile" height={40} width={0} style={{ width: "auto" }}></LogoSvg>
            <h3 className={"title is-size-3 is-size-5-mobile"}>HPFanfiction Recommender</h3>
          </a>
        </div>
          <a
            role="button"
            className={`navbar-burger burger ${menuOpen ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarMenu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div
          id="navbarMenu"
          className={`navbar-menu ${menuOpen ? "is-active" : ""}`}
        >
          <div className={"navbar-end"}>
          <div className="navbar-item">
              <Link href="/stats" passHref>
                <IconButton icon={["fas", "chart-line"]}
                className={router.pathname === "/stata" ? styles.active : ""}
                >
                 Stats
                </IconButton>
              </Link>
            </div>
            <div className="navbar-item">
              <Link href="/recommend" passHref>
                <IconButton icon={["fas", "search"]}
                className={router.pathname === "/recommend" ? styles.active : ""}
                >
                 Search
                </IconButton>
              </Link>
            </div>
          <div className="navbar-item">
              <Link href="/halloffame" passHref>
                <IconButton icon={["fas", "fire"]}
                className={router.pathname === "/halloffame" ? styles.active : ""}
                >
                  Hall of Fame
                </IconButton>
              </Link>
            </div>
            {/* <div className="navbar-item">
              <IconButton
                href="mailto:developer@hackesta.org"
                icon={["fas", "envelope"]}
              >
                Contact
              </IconButton>
            
            </div> */}
            <div className={`navbar-item ${(isAppleDevice||installPWA)?"":"is-hidden"}`}>
              <IconButton
                onClick={() => {
                  if(isAppleDevice){
                    setIsAppleShown(true);
                  } 
                  else {
                    installPWA.prompt();
                  }
                }}
                icon={["fas", "arrow-circle-down"]}
              >
                Download
              </IconButton>
            </div>
            <div className="navbar-item">
              <Link href="/about" passHref>
                <IconButton
                  className={router.pathname === "/about" ? styles.active : ""}
                  icon={["fas", "info-circle"]}
                >
                  About
                </IconButton>
              </Link>
            </div>
            <div className={`navbar-item`}>
              <IconButton
                onClick={() => setIsFAQShown(true)}
                icon={["fas", "question-circle"]}
              >
                F.A.Q
              </IconButton>
            </div>
          </div>
        </div>
      </nav>
      <AppleModal isActive={isAppleShown} handleClose={()=>{setIsAppleShown(false)}}/>
      <FaqModal isActive={isFAQShown} handleClose={()=>setIsFAQShown(false)}/>
    </>
  );
}
