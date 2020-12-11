import { useEffect, useState } from "react"
import CardGrid from "../components/cardgrid"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import data from "../public/data/latest.json"
export default function Home() {
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
