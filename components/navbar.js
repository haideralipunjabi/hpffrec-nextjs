import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import LogoSvg from "../public/hpffrec_icon.svg";
import styles from "./navbar.module.scss";
import IconButton from "./iconButton";
import AppleModal from "./appleModal";
import Banner from "./banner";
import { isApple, isInstallable } from "./CustomHooks";
import FaqModal from "./faqModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAppleShown, setIsAppleShown] = useState(false);
  const [isFAQShown, setIsFAQShown] = useState(false);
  const router = useRouter();
  const installPWA = isInstallable();
  const isAppleDevice = isApple();
  return (
    <>
      <nav className={"navbar"} role="navigation" aria-label="main navigation">
        <div className={"navbar-brand"}>
          <div className="navbar-item">
            <Link href="/">
              <a className="is-flex is-align-items-center">
                <LogoSvg
                  className="has-text-centered-mobile"
                  height={40}
                  width={0}
                  style={{ width: "auto" }}
                ></LogoSvg>
                <h3 className={"title is-size-3 is-size-5-mobile"}>
                  HPFanfiction Recommender
                </h3>
              </a>
            </Link>
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
            <NavbarItem icon={["fas", "chart-line"]} link={"/stats"}>
              Stats
            </NavbarItem>
            <NavbarItem icon={["fas", "search"]} link={"/recommend"}>
              Search
            </NavbarItem>
            <NavbarItem icon={["fas", "fire"]} link={"/halloffame"}>
              Hall of Fame
            </NavbarItem>
            <NavbarItem
              className={`navbar-item ${
                isAppleDevice || installPWA ? "" : "is-hidden"
              }`}
              icon={["fas", "arrow-circle-down"]}
              onClick={() => {
                if (isAppleDevice) {
                  setIsAppleShown(true);
                } else {
                  installPWA.prompt();
                }
              }}
            >
              Download
            </NavbarItem>
            <NavbarItem icon={["fas", "info-circle"]} link={"/about"}>
              About
            </NavbarItem>
            <NavbarItem
              icon={["fas", "question-circle"]}
              onClick={() => setIsFAQShown(true)}
            >
              F.A.Q
            </NavbarItem>
            <a href="mailto:developer@hackesta.org" className="navbar-item">
              <span className="mx-3">
                <FontAwesomeIcon icon={["far", "envelope"]} />
              </span>
              Contact
            </a>
          </div>
        </div>
      </nav>
      <AppleModal
        isActive={isAppleShown}
        handleClose={() => {
          setIsAppleShown(false);
        }}
      />
      <FaqModal
        isActive={isFAQShown}
        handleClose={() => setIsFAQShown(false)}
      />
          <Banner/>

    </>
  );
}

function NavbarItem({ link, onClick, className, icon, children }) {
  let elem = (
    <a onClick={onClick} className={`navbar-item ${className}`}>
      <span className="mx-3">
        <FontAwesomeIcon icon={icon} />
      </span>
      {children}
    </a>
  );
  if (link && !onClick) {
    return (
      <Link href={link} passHref>
        {elem}
      </Link>
    );
  }
  if (onClick) {
    return elem;
  }
}
