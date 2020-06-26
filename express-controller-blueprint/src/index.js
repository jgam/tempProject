import express from "express";
import path from "path";
import "./db";
import movieRouter from "./movieRouter";
import { localsMiddleware } from "./middlewares";

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

//middlewares
app.use(localsMiddleware);

app.use("/", movieRouter);

// Codesanbox does not need PORT :)
app.listen(4001, () => console.log(`✅  Server Ready!`));
