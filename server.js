import app from "./src/app.js";

const port = process.env.SERVER_PORT || 3000;

app.listen(port, () => {
  console.info(`Listening on port ${port}`);
});
