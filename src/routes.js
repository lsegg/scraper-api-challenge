import { scrapeHandler } from "./controllers.js";

function routes(app) {
  app.get("/test", (req, res, next) => {
    res.send("Testing endpoint");
  });

  app.get("/scrape", scrapeHandler);
}

export default routes;
