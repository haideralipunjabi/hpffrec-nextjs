import {useEffect, useState} from "react";
export default function AdCard({key}){
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
      if(adError || adBlocked ) return(null)
    return (
        <div key={key} className="card" style={{width:"100%",height:"100%"}}>
            <div className="card-content fullheight is-flex is-flex-direction-column is-justify-content-center">
                
                     
                        <ins className="adsbygoogle"
                style={{display:"block",width:"100%",textAlign:"center"}}
                data-ad-format="auto"
                data-full-width-responsive="true"
                data-ad-client="ca-pub-7271288488217782"
                data-ad-slot="2214791141" />
                
            </div>
        </div>
        
    )
}