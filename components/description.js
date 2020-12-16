import useSWR from 'swr';
import decode  from "unescape"
import PuffLoader from "react-spinners/PuffLoader";

export default function Description({comment,url}) {
    const REDDIT_API = "https://api.reddit.com/api/info.json?id=t1_"
    const fetcher = url => fetch(url).then(r => r.json())
    const {data,error} = useSWR(REDDIT_API+comment,fetcher)

    if(!data) return (
        <PuffLoader
        color={"#8962ff"}
        css={{ margin: "auto" }}
      />
    )
    let desc = decode(data.data.children[0].data.body_html).split("<hr/>").map(story=>{
        if(story.includes(url) && story.includes("<blockquote>")){
            return story.substring(story.indexOf("<blockquote>") +12,story.indexOf("</blockquote>"))
        }
    }).filter(i=>i)
    return  <>
    <br />
    <div className="has-text-justified" dangerouslySetInnerHTML={{__html: desc}}>
    </div>
    </>;
}