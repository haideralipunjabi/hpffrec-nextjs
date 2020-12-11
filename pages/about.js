import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import IconButton from "../components/iconButton";
export default function Home() {
  return (
    <div
      className="is-flex is-flex-direction-column is-justify-content-space-between"
      style={{ height: "100%" }}
    >
      <Navbar></Navbar>
      <section className="section">
        <div className="container">
          <p className="has-text-justified">
            <a href="/">HPFanfiction Recommender</a>'s frontend is built using{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              NextJS
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vercel
            </a>
            .
            <br />
            Data is collected from{" "}
            <a
              href="https://reddit.com/r/HPFanfiction"
              target="_blank"
              rel="noopener noreferrer"
            >
              r/HPFanficiton
            </a>{" "}
            using{" "}
            <a
              href="https://pushshift.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              pushshift.io
            </a>
            .
            <br />
            A Python backend collects the data, and generates the data files.
            <br />
            <a
              href="https://github.com/actions"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github Actions
            </a>{" "}
            is used to trigger the backend every 1 hour.
            <br/>
            After the backend
            generates the files, another workflow fetches those files, then
            builds and deploys the website.
          </p>
          <br />
          <IconButton
            icon={["fab", "github"]}
            href="https://github.com/haideralipunjabi/hpffrec-nextjs"
            target="_blank"
            rel="noopener noreferrer"
          >
            View code on Github
          </IconButton>

          <h4 className="is-size-4 my-4">
            Developed by:{" "}
            <a
              href="https://haideralipunjabi.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Haider Ali Punjabi
            </a>
          </h4>
          <div className="buttons">
            <IconButton
              icon={["fab", "twitter"]}
              href="https://twitter.com/HAliPunjabi"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow me on Twitter
            </IconButton>
            <IconButton
              icon={["fab", "github"]}
              href="https://github.com/haideralipunjabi"
              target="_blank"
              rel="noopener noreferrer"
            >
              View my Github
            </IconButton>
            <IconButton
                href="mailto:developer@hackesta.org"
                icon={["fas", "envelope"]}
              >
                Contact Me
              </IconButton>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}
