import { useEffect, useState } from "react";
import FilterComponent from "./filterComponent";

export default function FilterPanel(props){
    const {data,filteredData,setFilteredData} = props;
    const [filterChoices,setFilterChoices] = useState({})
    const [filters,setFilters] = useState({})

    const uniqueFilter = (v,i,s)=>(v&&s.indexOf(v)===i);
    const filterDataByKey=(key,choices)=>{
        setFilteredData(filteredData=>{
            return filteredData.filter(item=>{
                if(choices.length>0){
                    if(key==="genre") return choices.some(choice=>item[key]?.includes(choice))
                    if(key==="words") {
                        return choices.some(choice=>{
                            switch (choice) {
                                case "< 1k":
                                    return item.words <= 1000
                                    break;
                                case "< 5k":
                                        return item.words <= 5000
                                        break;
                                case "> 5k":
                                    return item.words >= 5000
                                    break
                                case "> 10k":
                                    return item.words >= 10000
                                    break
                                case "> 20k":
                                    return item.words >= 20000
                                    break
                                case "> 50k":
                                    return item.words >= 50000
                                    break
                                case "> 100k":
                                    return item.words >= 100000
                                    break
                                case "> 500k":
                                    return item.words >= 500000
                                    break
                                default:
                                    break;
                            }
                        })
                    }
                    if(key==="characters"){
                        return choices.every(choice=>item[key]?.replaceAll("<","").replaceAll(">",",").split(",").map(item=>item.trim()).includes(choice))
                    }
                    return choices.some(choice=>item[key]===choice)
                }
                return true
            })
        })
    }
    const filterData = ()=>{
        setFilteredData(data);
        Object.entries(filters).forEach(([k,c])=>{
            filterDataByKey(k,c)
        })
    }

    const genGenreChoices = () =>data.flatMap(item=>{
            if(!item.genre) return;
            return item.genre.split("/")
        }).filter(uniqueFilter)
    const genWordsChoices = () => data.map(item=>{
        if(item.words >= 500000) return "> 500k"
        if(item.words >= 100000) return "> 100k"
        if(item.words >= 50000) return "> 50k"
        if(item.words >= 20000) return "> 20k"
        if(item.words >= 10000) return "> 10k"
        if(item.words >= 5000) return "> 5k"
        if(item.words <= 5000) return "< 5k"
        if(item.words <= 1000) return "< 1k"
    }).filter(uniqueFilter);
    const genWebsiteChoices = ()=>data.map(item=>item.website).filter(uniqueFilter);
    const genStatusChoices = ()=>data.map(item=>item.status).filter(uniqueFilter);
    const genRatedChoices = ()=>data.map(item=>item.rated).filter(uniqueFilter);
    const genCharacterChoices = ()=>data.flatMap(item=>{
        return item.characters?.replaceAll("<","").replaceAll(">",",").split(",").map(item=>item.trim())
    }).filter(uniqueFilter)
    const handleInputChange = (group,values) => {
        setFilters(filters=>{
            return {
                ...filters,
                [group]: values
            }
        })
    }
    useEffect(() => {
        filterData();
    }, [filters])
    useEffect(()=>{
        setFilterChoices(filterChoices=>{
            return {
                ["words"]: genWordsChoices(),
                ["genre"]: genGenreChoices(),
                ["website"]: genWebsiteChoices(),
                ["characters"]: genCharacterChoices(),
                ["status"]: genStatusChoices(),
                ["rated"]: genRatedChoices()
            }   
        })
    },[filteredData])

    return(
        <div>
        <h4 className="is-size-4">Filters: </h4>
        <div className="is-flex is-flex-wrap-wrap is-justify-content-space-evenly mb-6">
            <FilterComponent name="Words" choices={filterChoices.words} onInputChange={handleInputChange}/>
            <FilterComponent name="Genre" choices={filterChoices.genre} onInputChange={handleInputChange}/>
            <FilterComponent name="Website" choices={filterChoices.website} onInputChange={handleInputChange}/>
            <FilterComponent name="Characters" choices={filterChoices.characters} onInputChange={handleInputChange} limit={30}/>
            <FilterComponent name="Status" choices={filterChoices.status} onInputChange={handleInputChange}/>
            <FilterComponent name="Rated" choices={filterChoices.rated} onInputChange={handleInputChange}/>
        </div>
        </div>
    )
}