import fs from "fs";
import axios from "axios";
import scrape from "./src/services.js";

async function getHtmlContent(source) {
  if (source.startsWith("http")) {
    const response = await axios.get(source);
    return response.data;
  } else {
    return fs.readFileSync(source, "utf-8");
  }
}

function handleWritingError(err) {
  if (err) console.log(err);
  else {
    console.info("File written successfully");
    console.log(fs.readFileSync("books.txt", "utf8"));
  }
}

async function main() {
  try {
    const htmlSource = process.argv[2];
    const selectorSource = process.argv[3];

    if (!htmlSource || !selectorSource) {
      console.error(
        "Command expected: node cli-scraper.js <htmlSource> <selectorSource>"
      );
      process.exit(1);
    }

    const htmlContent = await getHtmlContent(htmlSource);
    const selectors = JSON.parse(fs.readFileSync(selectorSource, "utf-8"));

    const extractedData = scrape(htmlContent, selectors);
    const serializedData = JSON.stringify(extractedData, null, 2);

    console.log(`Results:\n${serializedData}`);
    fs.writeFileSync(
      "examples/scrapedData.json",
      serializedData,
      handleWritingError
    );
  } catch (e) {
    console.error(e.message);
  }
}

main();
