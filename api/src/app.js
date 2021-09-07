import express, { application } from "express";
import cors from "cors";
import routes from "../routes";
import configureLog from "./log";

configureLog();

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

routes(app);

app.get("/", (req, res) => res.send("okok"));

app.listen(process.env.PORT, () => console.log("API Running"));

export default app;
