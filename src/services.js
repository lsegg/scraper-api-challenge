function scrape() {
  try {
    console.info("Inside service");
    //logic
    return "Scraping";
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
}

export default scrape;
