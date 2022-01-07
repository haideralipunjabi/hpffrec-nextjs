import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import DonateModal from "./donateModal";

export default function Navbar() {
  const [donateShown, setDonateShown] = useState(false);
  return (
    <>
      <footer className="footer">
        <div className="content has-text-centered">
          <p className="is-size-6">
            Made with{" "}
            <FontAwesomeIcon
              style={{ color: "red" }}
              className="mx-2"
              icon={["fas", "heart"]}
            />{" "}
            by{" "}
            <a
              href="https://haideralipunjabi.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Haider Ali Punjabi
            </a>{" "}
            {/* <a href="https://www.buymeacoffee.com/HAliPunjabi" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
            className="mx-2"
            icon={["fas","mug-hot"]}/>Buy Me a Coffee
          </a> */}
            | © {new Date().getFullYear()} |{" "}
            <a
              className="button is-small is-rounded"
              onClick={() => {
                setDonateShown(true);
              }}
            >
              Donate
            </a>
          </p>
        </div>
      </footer>
      <DonateModal
        isActive={donateShown}
        handleClose={() => {
          setDonateShown(false);
        }}
      />
    </>
  );
}
