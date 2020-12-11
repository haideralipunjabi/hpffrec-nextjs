import { useEffect, useState } from "react"
import CardGrid from "../components/cardgrid"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
export default function Home() {
  const [data,setData] = useState([])
  const [loadingData,setLoadingData] = useState(true);

    useEffect(()=>{
      setLoadingData(false)
    },[data])
    useEffect(()=>{
      setLoadingData(true)
      fetch("/data/latest.json").then(r=>r.json()).then(d=>{
        setData(d);
      })
    },[])
      
  return (
    <div
    className="is-flex  is-flex-direction-column is-justify-content-space-between"
    style={{ height: "100%" }}
  >
    <Navbar/>
    <section className="section">
      <div className="container">
        <CardGrid data={data} loadingData={loadingData} setLoadingData={setLoadingData} />
      </div>
    </section>
    <Footer />
  </div>
  )
}
