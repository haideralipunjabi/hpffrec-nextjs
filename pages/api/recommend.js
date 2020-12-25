import fetch from "node-fetch";
export default async function handler(req, res) {
  if (req.query.story_id) {
    let response = await fetch(
      `${process.env.REC_URL}?story_id=${req.query.story_id}`
    );
    if (response.ok) {
      let json = await response.json();
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(json));
    } else {
      res.statusCode = 500;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ error: 500 }));
    }
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: 404, message: "story not found" }));
  }
}
