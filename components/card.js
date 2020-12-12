import { useState, useRef } from "react";
import styles from "./card.module.scss";
import Tag from "./tag";
export default function Card(props) {
  const { data, authorMode,key } = props;

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
  return (
    <div className={`card ${styles.card}`}>
      <div className="card-content">
        <div className={data.count && styles.ranked}>
          <p className="title is-size-4">
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

        <br />
        <div className={`tags ${styles.tags}`}>
          {data.count && (
            <div
              style={{ marginBottom: 0, marginRight: "0.5rem" }}
              className="tags has-addons"
            >
              <Tag key={key+"rank"} type="rank">Recs</Tag>
              <Tag key={key+"rankcount"}>{data.count}</Tag>
            </div>
          )}
          <Tag key={key+"website"} type="website"><a className="has-text-white" href={`https://${data.website}`} target="_blank" rel="noopener noreferrer">{data.website}</a></Tag>
          {!authorMode && (
            <>
              <Tag key={key+"rating"} type="rating">
                {data.rated?.replace("Fiction", "").trim()}
              </Tag>
              <Tag key={key+"language"} type="language">{data.language}</Tag>
              <Tag key={key+"genre"} type="genre">{data.genre}</Tag>
              <Tag key={key+"chapters"} type="chapters">{data.chapters}</Tag>
              <Tag key={key+"words"} type="words">{abbr(data.words, 1)}</Tag>
              <Tag key={key+"published"} type="published">{getDateString(data.published)}</Tag>
              <Tag key={key+"updated"} type="updated">{getDateString(data.updated)}</Tag>
              <Tag key={key+"favs"} type="favs">{data.favs}</Tag>
              <Tag key={key+"follows"} type="follows">{data.follows}</Tag>
              <Tag key={key+"reviews"} type="reviews">{data.reviews}</Tag>
              {splitCharacters(data.characters).map((char,idx) => (
                <Tag key={char.toLowerCase().replaceAll(" ","")} type="character">{char}</Tag>
              ))}
              <Tag key={key+"complete"} type="complete">{data.status}</Tag>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
