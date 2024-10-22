import * as cheerio from "cheerio";
import axios from "axios";

export async function getUrlData(url) {
  const response = await axios.get(url);
  return response.data;
}

function processSelector($, selector) {
  if (typeof selector === "string") {
    return extractText($, selector);
  }

  // Handle repetitive data
  if (typeof selector === "object" && selector.__root) {
    return extractNestedStructure($, selector);
  }

  // Return an empty string if the selector type is unrecognized
  return "";
}

function extractText($, selector) {
  const elements = $(selector);
  if (elements.length > 1) {
    return elements.map((_, element) => $(element).text().trim()).get();
  }
  return elements.first().text().trim() || "";
}

function extractNestedStructure($, nestedSelector) {
  const { __root, ...subSelectors } = nestedSelector;
  const rootElements = $(__root);

  return rootElements
    .map((_, rootElement) => {
      const item = {};
      for (const [subKey, subSelector] of Object.entries(subSelectors)) {
        item[subKey] = $(rootElement).find(subSelector).text().trim() || "";
      }
      return item;
    })
    .get()
    .filter((item) => Object.values(item).some((value) => value !== ""));
}

export function scrape(html, selectors) {
  try {
    const $ = cheerio.load(html);
    const result = {};

    for (const [key, selector] of Object.entries(selectors)) {
      result[key] = processSelector($, selector);
    }

    return result;
  } catch (e) {
    console.error("Error scraping HTML:", e.message);
    throw new Error("Failed to scrape HTML content");
  }
}
