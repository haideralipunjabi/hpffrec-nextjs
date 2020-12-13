import { useEffect, useState } from "react";
import Card from "./card";
import styles from "./cardgrid.module.scss";
import FilterPanel from "./filterPanel";
import Pagination from "./pagination";
import PuffLoader from "react-spinners/PuffLoader";
// import { useWindowSize } from "./CustomHooks";
import AdCard from "./adcard";

export default function CardGrid(props) {
  const { data, authorMode, loadingData } = props;
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(40);
  const [filteredData, setFilteredData] = useState(data);
  // const windowSize = useWindowSize();
  useEffect(() => {
    setPage(1);
    setFilteredData(data);
  }, [data]);
  const random = (min,max) => Math.floor(Math.random() * (max-min) + min);
  const fillAds = (ar)=>{
    const adAmount = pageSize/10;
    for(let i=0; i<adAmount;i++){
      let idx = random(0,pageSize);
      ar.splice(idx,0,{"id":"ad","comment":i})
    }
    console.log(ar)
    return ar
  }
  
  return (
    <>
      {!authorMode && (
        <FilterPanel
          data={data}
          filteredData={filteredData}
          setFilteredData={setFilteredData}
        />
      )}
      {/* <PuffLoader
        color={"#8962ff"}
        size={windowSize.width * 0.2}
        loading={loadingData}
        css={{ margin: "auto" }}
      /> */}
      {filteredData.length === 0 && !loadingData && (
        <h4 className="is-size-2 has-text-centered">NO DATA FOUND</h4>
      )}
      {filteredData.length > 0 && !loadingData && (
        <>
          <Pagination
            page={page}
            setPage={setPage}
            lastPage={Math.ceil(filteredData.length / pageSize)}
          />

          <div className="columns is-multiline">
          <div key={"adcard1"} className="column is-full">
            <AdCard />
          </div>
            {
              filteredData
              .slice((page - 1) * pageSize, page * pageSize)
              .map((item, idx) => 
                (
                <div
                  key={item.comment.toString() + item.id.toString()}
                  className="column is-half-tablet is-one-third-desktop is-one-quarter-widescreen"
                >
                  {
                    <Card key={item.comment.toString() + item.id.toString()} item={item} authorMode={authorMode} />
                  }
                </div>
              )
                
              )
            }
            <div key={"adcard1"} className="column is-full">
            <AdCard />
          </div>
          </div>
          <Pagination
            page={page}
            setPage={setPage}
            lastPage={Math.ceil(filteredData.length / pageSize)}
          />
        </>
      )}
    </>
  );
}
