import '../styles/globals.scss'
import Head from "next/head";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons"
import "@fortawesome/fontawesome-svg-core/styles.css";
function MyApp({ Component, pageProps }) {
  library.add(fab, fas, far);
  return (
  <>
  <Head>
  <link rel="preconnect" href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap" crossOrigin/>
  </Head>
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
