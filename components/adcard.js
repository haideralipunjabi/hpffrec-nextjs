import {useEffect, useState} from "react";
export default function AdCard({width,height}){
    const [adError, setAdError] = useState(false);
    const [adBlocked, setAdBlocked] = useState(false);
    useEffect(() => {
        setAdError(false);
        
        try {
            if(window.adsbygoogle){
                (adsbygoogle = window.adsbygoogle || []).push({});
            }
            else {
                setAdBlocked(true);
            }
        } catch (error) {
            setAdError(true);
        }
      }, []);
    return (
        <div className="card" style={{width:"100%",height:"100%"}}>
            <div className="card-content fullheight is-flex is-flex-direction-column is-justify-content-center">
                {
                    !adError && !adBlocked && (
                        <ins className="adsbygoogle"
                style={{display:"inline-block",width:"100%",height:"100%",textAlign:"center"}}
                data-ad-format="fluid"
                data-ad-layout-key="-6t+ed+2i-1n-4w"
                data-ad-client="ca-pub-7271288488217782"
                data-ad-slot="2058631059" />
                    )
                }
                {
                    adBlocked && (
                        <p className="title has-text-centered">
                            Ads Blocked
                        </p>
                    )
                }
            </div>
        </div>
        
    )
}