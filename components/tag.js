import styles from "./tag.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
export default function Tag(props){
    const {type,data,key} = props;
    const [hasData,setHasData] = useState(false);
    
    useEffect(()=>{
        if(data) setHasData(true);
        else setHasData(false);
    },[data])

    const types = {
        "rating":{
            "class": "info",
            "icon": ["fas","shield-alt"], 
        },
        "language": {
            "class": "info",
            "icon": ["fas","globe-asia"],
        },
        "genre": {
            "class":"info",
            "icon":["fas","life-ring"]
        },
        "chapters": {
            "class":"book",
            "icon":["fas","layer-group"]
        },
        "words": {
            "class":"book",
            "icon":["fas","file"]
        },
        "published": {
            "class":"time",
            "icon":["far","clock"]
        },
        "updated": {
            "class":"time",
            "icon":["fas","sync"]
        },
        "website": {
            "class":"website",
            "icon":["fas","globe-americas"]
        },
        "favs": {
            "class":"meta",
            "icon":["fas","heart"]
        },
        "follows": {
            "class":"meta",
            "icon":["fas","bookmark"]
        },
        "reviews": {
            "class":"meta",
            "icon":["fas","comment"]
        },
        "character": {
            "class": "character",
            "icon": ""
        },
        "complete": {
            "class":"complete",
            "icon":["far","dot-circle"]
        },
        "rank":{
            "class":"rank"
        }
    }
    if(hasData){

        return (
        
             <span key={key} type={type && types[type]?.class} className="tag is-rounded">
               {type && types[type]?.icon && <span key={key+"icon"} className="icon"><FontAwesomeIcon icon={types[type]["icon"]} /></span> }
                <span key={key+"child"}>{data}</span>
            </span>
    )
    }
    return(null);
}