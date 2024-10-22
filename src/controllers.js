import { getUrlData, scrape } from "./services.js";

export async function scrapeHandler(req, res, next) {
  try {
    const { html, selectors } = req.body;
    const data = html.startsWith("http") ? await getUrlData(html) : html;
    const scrapedData = scrape(data, selectors);
    res.send(scrapedData);
  } catch (e) {
    return res.status(500).send(e.message);
  }
}
