import scrape from "./services.js";

export function scrapeHandler(req, res) {
  try {
    console.info("Inside controller");
    // scraper logic
    const scrapedData = scrape(req.body);
    res.send(scrapedData);
  } catch (e) {
    return res.status(500).send(e.message);
  }
}
