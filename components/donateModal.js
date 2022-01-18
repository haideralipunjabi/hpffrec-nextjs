import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./donateModal.module.scss";

export default function DonateModal(props) {
  const { isActive, handleClose } = props;
  return (
    <div className={`modal ${isActive ? "is-active" : ""}`}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Donate</p>
          <button
            className="delete"
            aria-label="close"
            onClick={handleClose}
          ></button>
        </header>
        <section className="modal-card-body">
          <h4 className="is-size-4 has-text-centered has-text-weight-bold	">
            Donate to help support this project
          </h4>
          <br />
          <p className="has-text-centered is-flex is-flex-direction-column">
            <a
              className={`button is-rounded my-2 is-light ${styles.bmc}`}
              href="https://www.buymeacoffee.com/HAliPunjabi"
              data-goatcounter-click="buymeacoffee.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="mx-3" icon={["fas", "coffee"]} />
              Buy Me a Coffee
            </a>
            <a
              className="button is-rounded is-light my-2"
              href="https://paypal.me/haideralipunjabi"
              data-goatcounter-click="paypal.me"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="mx-3" icon={["fab", "paypal"]} />
              Donate on Paypal
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
