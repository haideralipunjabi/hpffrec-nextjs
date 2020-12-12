import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react"
import styles from "./filterComponent.module.scss"
export default function FilterComponent(props){
    const {name,choices,onInputChange, limit} = props;
    const [active,setActive] = useState(false);
    const [selected,setSelected] = useState([]);
    const [filteredChoices,setFilteredChoices] = useState([])
    const handleInputChange = (e)=>{
        if(e.target.checked){
            setSelected(selected=>[...selected,e.target.value])
        }
        else {
            setSelected(selected=>selected.filter(item=>item!==e.target.value))
        }
    }

    const handleFilterChange = (e)=>{
            setFilteredChoices(filteredChoices=>{
               return [...selected,...choices.filter(choice=>(choice.toLowerCase().includes(e.target.value.toLowerCase())) && (!selected.includes(choice))).slice(0,limit)]
            })
    }
    useEffect(()=>{
        onInputChange(name.toLowerCase(),selected)
    },[selected])
    useEffect(()=>{
        if(choices) setFilteredChoices([...selected,...choices.filter(choice=>!selected.includes(choice)).slice(0,limit)])
    },[choices])
    if(choices){
        return(
            <div className={`dropdown ${active?"is-active":""} mb-2`}>
                <div className="dropdown-trigger">
                    <button className="button" aria-haspopup="true" aria-controls={`dropdown-menu-${name.toLowerCase()}`} onClick={()=>setActive(!active)}>
                        <span>{name}</span>
                        <span className="icon is-small">
                            <FontAwesomeIcon icon={["fas","angle-down"]}/>
                        </span>
                    </button>
                </div>
                <div className={`dropdown-menu ${styles.dropdownMenu}`} id={`dropdown-menu-${name.toLowerCase()}`} role="menu">
                    <div className="dropdown-content">
                        {
                            (limit>0)&&(
                                <div className="dropdown-item">
                                    <input className="input is-small is-rounded" type="text" name={`dropdown-filter-${name.toLowerCase()}`} id={`dropdown-filter-${name.toLowerCase()}`} onChange={handleFilterChange}/>
                                </div>
                            )
                        }
                        {
                            filteredChoices?.map((item,key)=>{
                                return(
                                    <div key={item.toLowerCase().replace(/ /g,'')}  className="dropdown-item">
                                        <label className="checkbox">
                                        <input checked={selected.includes(item)} className="mr-2" type="checkbox" value={item} onChange={handleInputChange}/>    
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