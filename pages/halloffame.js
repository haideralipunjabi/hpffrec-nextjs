import { useState,useEffect } from "react"
import CardGrid from "../components/cardgrid"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

export default function Halloffame(props) {
    const {data} = props;
    const [mode,setMode] = useState("stories")
    const [duration,setDuration] = useState("thisweek");
    const [currentData,setCurrentData] = useState([])
    const [loadingData,setLoadingData] = useState(true);
    useEffect(()=>{
      setLoadingData(false)
    },[currentData])
 
    const updateData = ()=>{
      setLoadingData(true)
      setCurrentData(data[`${mode}_${duration}`])
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
        <div className="tabs is-toggle is-toggle-rounded is-large-desktop is-medium-mobile is-centered">
        <ul>
            <li className={(mode=="stories")?"is-active":""}><a onClick={()=>{setMode("stories")}}>Stories</a></li>
            <li className={(mode=="authors")?"is-active":""}><a onClick={()=>setMode("authors")}>Authors</a></li>
        </ul>
        </div>
        <div className="tabs is-toggle is-toggle-rounded is-medium-desktop is-small-mobile is-centered">
        <ul>
            <li className={(duration=="thisweek")?"is-active":""}><a onClick={()=>setDuration("thisweek")}>This Week</a></li>
            <li className={(duration=="thismonth")?"is-active":""}><a onClick={()=>setDuration("thismonth")}>This Month</a></li>
            <li className={(duration=="thisyear")?"is-active":""}><a onClick={()=>setDuration("thisyear")}>This Year</a></li>
            <li className={(duration=="alltime")?"is-active":""}><a onClick={()=>setDuration("alltime")}>All Time</a></li>
        </ul>
        </div>
        { 
          <CardGrid  data={currentData} loadingData={loadingData} authorMode={(mode=="authors")}/>
        }
      </div>
    </section>
    <Footer/>
  </div>
  )
}
export async function getStaticProps(){
  const modes = ["stories", "authors"]
  const durations = ["thisweek","thismonth","thisyear","alltime"]
  const labels = []
  const promises = []
  modes.forEach(mode=>{
    durations.forEach(duration=>{
      labels.push(`${mode}_${duration}`)
      promises.push(fetch(process.env.API_URL + `${mode}_top100_${duration}.json`))
    })
  })
  const res = await Promise.all(promises)
  const data = await Promise.all(res.map(r=>r.json()));
  return {
    props: {
      data: Object.fromEntries(labels.map((label,idx)=>{
        return [label,data[idx]]
      })),
    }
  }

}