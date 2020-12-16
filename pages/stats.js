import Navbar from "../components/navbar"
import Footer from "../components/footer"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import {useRouter} from "next/router";

export default function Stats(props) {
    const {stats} = props;
    dayjs.extend(relativeTime)
    const data = stats[0];
    const router = useRouter();
    const {embed} = router.query
    return (
    <div
    className="is-flex  is-flex-direction-column is-justify-content-space-between"
    style={{ height: "100%" }}
  >
    {!embed && <Navbar/>}
    <section className="section" style={{margin: "auto"}}>
      <div className="container">
          <div className="columns is-multiline">
                    <Tile size="is-half is-hidden-mobile" title="Statistics"/>
                    <Tile size="is-half" title={dayjs(data.latest_run*1000).fromNow()} subtitle="Updated" />
                    <Tile title={data.total_stories} subtitle="Total Stories"/>
                    <Tile title={data.total_unique_stories} subtitle="Unique Stories"/>
                    <Tile title={data.total_unique_authors} subtitle="Unique Authors"/>
                    <Tile title={(data.storydata_count*100/data.total_unique_stories).toFixed(2) + "%"} subtitle="Metadata Available"/>
                    <Tile title={data.ffn_count} subtitle="Fanfiction Stories"/>
                    <Tile title={data.ao3_count} subtitle="AO3 Stories"/>
                    <Tile title={data.ffa_count} subtitle="HPFFA Stories"/>
                    <Tile title={data.fp_count} subtitle="Fictionpress Stories"/>
          </div>
      </div>
    </section>
    {!embed && <Footer />}
  </div>
  )
}

function Tile(props){
    const {title,subtitle,size} = props;
    return (
        <div className={`column ${size?size:"is-one-quarter"}`}>
            <div className="card fullheight">
                        <div className="card-content">
                        {title && <p className="title has-text-centered">{title}</p>}
                        {subtitle && <p className="subtitle has-text-centered">{subtitle}</p>}
                        </div>
            </div>
        </div>
    )
}


export async function getStaticProps(){
  const res = await fetch(process.env.API_URL + 'stats.json')
  const stats = await res.json();

  return {
    props: {
      stats
    }
  }

}