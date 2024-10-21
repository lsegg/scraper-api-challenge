# Scraper API and CLI

This is a step by step guide on how to use this simple data extraction package which supports CLI and API requests.

## Built with 🛠️

- [Axios](https://axios-http.com/) - Promise based HTTP client
- [Cheerio](https://cheerio.js.org/) - Library for parsing and manipulating HTML
- [Express](https://expressjs.com/) - Web framework for Node.js
- [Jest](https://jestjs.io/) - JavaScript Testing Framework
- [Node.js](https://nodejs.org/) - JavaScript runtime environment
- [NPM](https://www.npmjs.com/) - Package manager for Node.js

## Installation ⚙️

1. Run `npm i` to install the package dependencies.

## CLI Usage

Run:

```
  node cli-scraper.js <htmlSource> <selectorSource>
```

- _htmlSource_ can either be an html file or a web URl.
- _selectorSource_ is a JSON of keys with css selectors as values.
- In case of repetitive data, the property _\_\_root_ is required.

E.g. `node cli-scraper.js examples/input1.html examples/selector1.json`

## API Usage

1. Run `npm run dev` to start the server.
2. Use postman to make your API requests.
3. The body should be a JSON with html and selectors properties. In case of repetitive data, the property _\_\_root_ is required.

## Requirements ⚙️

- [Node.js](https://nodejs.org/)
- [NPM](https://www.npmjs.com/)
- A text editor like [Visual Studio Code](https://code.visualstudio.com/)
- An API testing platform like [Postman](https://www.postman.com/)

## Notes

- The first output example is wrong since there's no "p" element child of "h1"
- I based my libraries decision on most popular and downloaded npm options.

---
