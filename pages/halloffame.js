import { useState,useEffect } from "react"
import CardGrid from "../components/cardgrid"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

export default function Halloffame() {
    const [mode,setMode] = useState("stories")
    const [duration,setDuration] = useState("thisweek");
    const [data,setData] = useState([])

 
    const updateData = ()=>{
        fetch(`/data/${mode}_top100_${duration}.json`).then(r=>r.json()).then(d=>{
            setData(d);
          })
    }
    useEffect(()=>{
      updateData();
    },[duration,mode])
  return (
    <div
    className="is-flex  is-flex-direction-column is-justify-content-space-between"
    style={{ height: "100%" }}
  >
    <Navbar/>
    <section className="section">
      <div className="container">
        <div class="tabs is-toggle is-toggle-rounded is-large-desktop is-medium-mobile is-centered">
        <ul>
            <li className={(mode=="stories")?"is-active":""}><a onClick={()=>{setMode("stories")}}>Stories</a></li>
            <li className={(mode=="authors")?"is-active":""}><a onClick={()=>setMode("authors")}>Authors</a></li>
        </ul>
        </div>
        <div class="tabs is-toggle is-toggle-rounded is-medium-desktop is-small-mobile is-centered">
        <ul>
            <li className={(duration=="thisweek")?"is-active":""}><a onClick={()=>setDuration("thisweek")}>This Week</a></li>
            <li className={(duration=="thismonth")?"is-active":""}><a onClick={()=>setDuration("thismonth")}>This Month</a></li>
            <li className={(duration=="thisyear")?"is-active":""}><a onClick={()=>setDuration("thisyear")}>This Year</a></li>
            <li className={(duration=="alltime")?"is-active":""}><a onClick={()=>setDuration("alltime")}>All Time</a></li>
        </ul>
        </div>
        {
          <CardGrid  data={data} authorMode={(mode=="authors")}/>
            // (mode=="stories") && (
            // )
        }
      </div>
    </section>
    <Footer/>
  </div>
  )
}
