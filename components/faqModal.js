import StorySVG from "../public/story_faq.svg"
import AuthorSVG from "../public/author_faq.svg"

export default function FaqModal(props) {
    const {isActive,handleClose} = props;
    return (
      <div className={`modal ${isActive?"is-active":""}`}>
          <div className="modal-background"></div>
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title">F.A.Q</p>
                <button
                  className="delete"
                  aria-label="close"
                  onClick={handleClose}
                ></button>
              </header>
              <section className="modal-card-body">
                <StorySVG width="100%"/>
                <AuthorSVG width="100%"/>
              </section>
            </div>
        </div>
    );
  }
