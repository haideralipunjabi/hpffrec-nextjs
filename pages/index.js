import { useEffect, useState } from "react"
import CardGrid from "../components/cardgrid"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
export default function Home(props) {
  const {data} = props;
  return (
    <div
    className="is-flex  is-flex-direction-column is-justify-content-space-between"
    style={{ height: "100%" }}
  >
    <Navbar/>
    <section className="section">
      <div className="container">
        <CardGrid data={data} loadingData={false}/>
      </div>
    </section>
    <Footer />
  </div>
  )
}

export async function getStaticProps(){
  const res = await fetch(process.env.API_URL + 'latest.json')
  const data = await res.json();

  return {
    props: {
      data
    }
  }

}