import { useEffect, useState } from "react";
import Card from "./card";
import styles from "./cardgrid.module.scss";
import FilterPanel from "./filterPanel";
import Pagination from "./pagination";
import PuffLoader from "react-spinners/PuffLoader"
import { useWindowSize } from "./CustomHooks";

export default function CardGrid(props) {
  const { data, authorMode,loadingData } = props;
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(40);
  const [filteredData, setFilteredData] = useState(data);
  const windowSize = useWindowSize();
  useEffect(() => {
    setPage(1);
    setFilteredData(data);
  }, [data]);
  return (
      <>
        {!authorMode && (
          <FilterPanel
            data={data}
            filteredData={filteredData}
            setFilteredData={setFilteredData}
          />
        )}
        <PuffLoader
        color={"#8962ff"}
        size={windowSize.width * 0.2}
        loading={loadingData}
        css={{ margin: "auto" }}
      />
        {
          (filteredData.length===0 && !loadingData) && (
            <h4 className="is-size-2 has-text-centered">
              NO DATA FOUND
            </h4>
          )

        }
        {
          (filteredData.length>0) &&
        (
          <>
            <Pagination
          page={page}
          setPage={setPage}
          lastPage={Math.ceil(filteredData.length / pageSize)}
        />
        
          <div className="columns is-multiline">
            {filteredData
              .slice((page - 1) * pageSize, page * pageSize)
              .map((item, idx) => (
                <div
                  key={idx}
                  className="column is-half-tablet is-one-third-desktop is-one-quarter-widescreen"
                >
                  <Card data={item} authorMode={authorMode} />
                </div>
              ))}
          </div>
        <Pagination
          page={page}
          setPage={setPage}
          lastPage={Math.ceil(filteredData.length / pageSize)}
        />
        </>
        )
        }
        </>
  )
}
