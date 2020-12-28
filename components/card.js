import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef, useEffect } from "react";
import AdCard from "./adcard";
import styles from "./card.module.scss";
import Tag from "./tag";
import useSWR from 'swr';
import Description from "./description";

export default function Card(props) {
  const { item, authorMode,key } = props;
  const [data,setData] = useState(item);
  const [descShown, setDescShown] = useState(false);
  useEffect(()=>{
    setData(item)
  },[item])
  
  
  const splitCharacters = (chars) => {
    let splittedChars = [];
    if (!chars || chars.length === 0) return [];
    if (chars.includes(">")) {
      chars.split(">").forEach((item) => {
        item = item.trim();
        if (item[0] === "<") splittedChars.push(item.slice(1));
        else if (item.length > 0)
          splittedChars = [...splittedChars, ...splitCharacters(item.trim())];
      });
    } else if (chars.includes(",")) {
      chars.split(",").forEach((item) => {
        splittedChars.push(item.trim());
      });
    } else if (chars) {
      splittedChars.push(chars);
    }
    return splittedChars;
  };
  const getDateString = (timestamp) => {
    if (!timestamp) return;
    return new Date(parseInt(timestamp) * 1000).toLocaleDateString();
  };
  const abbr = (number, decPlaces) => {
    number = parseInt(number);
    decPlaces = Math.pow(10, decPlaces);
    let abbrev = ["k", "m", "b", "t"];
    for (let i = abbrev.length - 1; i >= 0; i--) {
      let size = Math.pow(10, (i + 1) * 3);
      if (size <= number) {
        number = Math.round((number * decPlaces) / size) / decPlaces;
        if (number == 1000 && i < abbrev.length - 1) {
          number = 1;
          i++;
        }
        number += abbrev[i];
        break;
      }
    }

    return number;
  };
    if (!data) return null;
    return (
      <div key={key} className={`card ${styles.card}`}>
      <div className="card-content">
        <div className={data.count && styles.ranked}>
          <p className="title is-size-4">
            {
              !authorMode && (
                <FontAwesomeIcon className="is-pulled-right" icon={["fas",descShown ? "angle-up":"angle-down"]} onClick={()=>setDescShown(!descShown)} />
              )
            }
            <a
              href={authorMode ? data.author_url : data.story_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {authorMode ? data.author_name : data.story_name}
            </a>
          </p>
          {!authorMode && (
            <p className="subtitle">
              <a
                href={data.author_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.author_name}
              </a>
            </p>
          )}
        </div>
        {
          !authorMode && descShown && (
            <Description comment={data.comment} url={data.story_url} />
          )
        }
        <br />
        {
          (authorMode || !descShown) && (

          
        <div className={`tags ${styles.tags}`}>
          {data.count && (
            <div
            style={{ marginBottom: 0, marginRight: "0.5rem" }}
            className="tags has-addons"
            >
              <Tag key={key+"rank"} type="rank" data="Recs"/>
              <Tag key={key+"rankcount"} data={data.count}/>
            </div>
          )}
          <Tag key={key+"site"} type="site" data={data.site}/>
          {!authorMode && (
            <>
              <Tag key={key+"rating"} type="rating" data={data.rated}></Tag>
              <Tag key={key+"language"} type="language" data={data.language} />
              <Tag key={key+"genre"} type="genre" data={data.genre} />
              <Tag key={key+"chapters"} type="chapters" data={data.chapters}/>
              <Tag key={key+"words"} type="words" data={abbr(data.words, 1)} />
              <Tag key={key+"published"} type="published" data={getDateString(data.published)}/>
              <Tag key={key+"updated"} type="updated" data={getDateString(data.updated)}/>
              <Tag key={key+"favs"} type="favs" data={data.favs}/>
              <Tag key={key+"follows"} type="follows" data={data.follows}/>
              <Tag key={key+"reviews"} type="reviews" data={data.reviews}/>
              {splitCharacters(data.characters).map((char,idx) => (
                <Tag key={char.toLowerCase().replace(/ /g,'')} type="character" data={char}/>
              ))}
              <Tag key={key+"complete"} type="complete" data={data.status}/>
            </>
          )}
        </div>
        )
      }
      </div>
      {
        descShown&&
        <div className="card-footer">
        <a href={`/recommend?story_id=${data.story_id}`} className="card-footer-item">View Similar</a>
      </div>
      }
    </div>
  );
}
