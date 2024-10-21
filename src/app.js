import express from "express";

const app = express();

app.get("/test", (req, res) => {
  res.send("Testing");
});

app.get("/scrape", (req, res) => {
  res.send("Scraping");
});

export default app;
