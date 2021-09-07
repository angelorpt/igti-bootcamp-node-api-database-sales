import express from "express";
import routes from "../routes";

require("dotenv").config();

const app = express();

app.use(express.json());

routes(app);

app.listen(process.env.PORT);

export default app;
