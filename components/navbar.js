import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import LogoSvg from "../public/hpffrec_icon.svg"
import styles from "./navbar.module.scss";
import IconButton from "./iconButton";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <nav className={"navbar"} role="navigation" aria-label="main navigation">
        <div className={"navbar-brand"}>
          
        <div className="navbar-item">
          <a className="is-flex is-align-items-center" href="/">
            {/* <LogoSvg height={40} width={0} style={{ width: "auto" }}></LogoSvg> */}
            <h3 className={"title is-hidden-mobile"}>HPFanfiction Recommender</h3>
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
              <Link href="/halloffame">
                <IconButton icon={["fas", "arrow-circle-down"]}
                className={router.pathname === "/halloffame" ? styles.active : ""}
                >
                  Hall of Fame
                </IconButton>
              </Link>
            </div>
            <div className="navbar-item">
              <IconButton
                href="mailto:developer@hackesta.org"
                icon={["fas", "envelope"]}
              >
                Contact
              </IconButton>
            </div>
            
            <div className="navbar-item">
              <Link href="/about">
                <IconButton
                  className={router.pathname === "/about" ? styles.active : ""}
                  icon={["fas", "info-circle"]}
                >
                  About
                </IconButton>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
