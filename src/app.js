import express from "express";
import { validateParams } from "./middlewares.js";
import routes from "./routes.js";

const app = express();

app.use(validateParams);

routes(app);

export default app;
