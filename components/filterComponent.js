import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react"
import styles from "./filterComponent.module.scss"
export default function FilterComponent(props){
    const {name,choices,onInputChange} = props;
    const [active,setActive] = useState(false);
    const [selected,setSelected] = useState([]);
    const handleInputChange = (e)=>{
        if(e.target.checked){
            setSelected(selected=>[...selected,e.target.value])
        }
        else {
            setSelected(selected=>selected.filter(item=>item!==e.target.value))
        }
    }
    useEffect(()=>{
        onInputChange(name.toLowerCase(),selected)
    },[selected])
    if(choices){
        return(
            <div className={`dropdown ${active?"is-active":""} mb-2`}>
                <div className="dropdown-trigger">
                    <button className="button" aria-haspopup="true" aria-controls="dropdown-menu" onClick={()=>setActive(!active)}>
                        <span>{name}</span>
                        <span className="icon is-small">
                            <FontAwesomeIcon icon={["fas","angle-down"]}/>
                        </span>
                    </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                        {
                            choices.map((item,key)=>{
                                return(
                                    <div key={key}  className="dropdown-item">
                                        <label className="checkbox">
                                            <input type="checkbox" value={item} onChange={handleInputChange}/>
                                            {item}
                                        </label>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
    return("")
}