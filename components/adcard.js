import {useEffect} from "react";
export default function AdCard({width,height}){
    useEffect(() => {
        (adsbygoogle = window.adsbygoogle || []).push({});
      }, []);
    return (
        <div className="card" style={{width:"100%",height:"100%"}}>
            <div className="card-content">
                    <ins className="adsbygoogle"
            style={{display:"inline-block",width:"100%",height:"100%"}}
            data-ad-format="fluid"
            data-ad-layout-key="-6t+ed+2i-1n-4w"
            data-ad-client="ca-pub-7271288488217782"
            data-ad-slot="2058631059" />
            </div>
        </div>
        
    )
}