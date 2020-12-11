export default function AppleModal(props) {
    const {isActive,handleClose} = props;
    return (
      <div className={`modal ${isActive?"is-active":""}`}>
          <div className="modal-background"></div>
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title">What about iOS?</p>
                <button
                  className="delete"
                  aria-label="close"
                  onClick={handleClose}
                ></button>
              </header>
              <section className="modal-card-body">
                <h4 className="is-size-4 has-text-centered has-text-weight-bold	">
                  Install HPFanfiction Recommender on iOS
                </h4>
                <p className="has-text-centered">
                  Install this application on your home screen for quick and
                  easy access when you are on the go.
                </p>
                <br />
                <p className="has-text-centered">
                  Just tap
                  <svg
                    className="mx-2"
                    fill="#8962ff"
                    height="50px"
                    width="50px"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 26 34.400002"
                  >
                    {" "}
                    <path
                      d="M 18.3,8.1 13,2.8 7.7,8.1 6.3,6.7 13,0 19.7,6.7 Z"
                      id="path914"
                    />
                    <path d="m 12,1.4 h 2 v 21 h -2 z" id="path916" />
                    <path
                      d="M 23,34.4 H 3 c -1.7,0 -3,-1.3 -3,-3 v -18 c 0,-1.7 1.3,-3 3,-3 h 7 v 2 H 3 c -0.6,0 -1,0.4 -1,1 v 18 c 0,0.6 0.4,1 1,1 h 20 c 0.6,0 1,-0.4 1,-1 v -18 c 0,-0.6 -0.4,-1 -1,-1 h -7 v -2 h 7 c 1.7,0 3,1.3 3,3 v 18 c 0,1.7 -1.3,3 -3,3 z"
                      id="path918"
                    />
                  </svg>
                  then 'Add to Home Screen'
                </p>
              </section>
            </div>
        </div>
    );
  }
