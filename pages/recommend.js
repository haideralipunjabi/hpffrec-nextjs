import { useEffect, useRef, useState } from "react";
import CardGrid from "../components/cardgrid";
import Card from "../components/card";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useSWR from "swr";
import { useRouter } from 'next/router'

export default function Recommend() {
  const inputRef = useRef();
  const [inputData, setInputData] = useState("");
  const [loadingData, setLoadingData] = useState(false);
  const [storyID, setStoryID] = useState();
  const API_URL = "/api/recommend";
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data, error } = useSWR(
    storyID ? API_URL + "?story_id=" + storyID : null,
    fetcher
  );
  useEffect(() => {
    if (data) setLoadingData(false);
  }, [data]);
  const router = useRouter()
  const { story_id, share_text } = router.query
  useEffect(()=>{
    if(story_id){
      setLoadingData(true);
      setStoryID(story_id);
    }
  },[story_id])
  useEffect(()=>{
      if(share_text){
        inputRef.current.value = share_text;
        setInputData(share_text);
        onSearch(share_text);
      }
  },[share_text])
  const REGEX = {
    "fanfiction.net": "ff",
    "archiveofourown.org": "ao3",
    "hpfanficarchive.com": "hpffa",
    "fictionpress.com": "fp",
    "siye.co.uk": "siye",
    "adult-fanfiction.org": "aff",
  };
  const loadData = (id) => {
    setLoadingData(true);
    setStoryID(id);
  };
  const onSearch = (data) => {
    if(!data){
      data =inputData;
    }
    let result = /(\d{2,})/.exec(data);    
    console.log("Reccomend",data, result)
    if (result) {
      Object.keys(REGEX).forEach((key) => {
        if (data.includes(key)) {
          let id = REGEX[key] + "-" + result[0];
          loadData(id);
        }
      });
    } else {
      inputRef.current.setCustomValidity(
        "Couldn't find story id from this input"
      );
      inputRef.current.reportValidity(false);
    }
  };
  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };
  return (
    <div
      className="is-flex  is-flex-direction-column is-justify-content-space-between"
      style={{ height: "100%" }}
    >
      <Navbar />
      <section className="section mb-a">
        <div className="container">
          <div className="field has-addons">
            <div className="control is-expanded has-icons-left">
              <input
                type="url"
                className="input is-primary"
                placeholder="URL"
                onChange={handleInputChange}
                ref={inputRef}
              />
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon={["fas", "globe-asia"]} />
              </span>
            </div>
            <div className="control">
              <button className="button is-primary" onClick={()=>onSearch()}>
                Search
              </button>
            </div>
          </div>
          {data && <div className="mb-5">
        <h4 className="is-size-4 mb-1">Selected: </h4>
            <Card key={-1} item={data[0]}/>
          </div> }
          {(data || loadingData) && (
            <CardGrid data={(data&&data.slice(1)) || []} loadingData={loadingData} />
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}
