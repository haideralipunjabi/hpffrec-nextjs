import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  return (
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
          | 
          <a href="https://www.buymeacoffee.com/HAliPunjabi" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
            className="mx-2"
            icon={["fas","mug-hot"]}/>Buy Me a Coffee
          </a>
          | © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
