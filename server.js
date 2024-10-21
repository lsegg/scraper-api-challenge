import app from "./src/app.js";

const port = process.env.SERVER_PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));
