import express from "express";
import chalk from "chalk";
import bodyParser from "body-parser";
import { configDotenv } from "dotenv";
import { connectDB } from "../db.js";
import cors from "cors";
import { Routers } from "./routers/router.js";

configDotenv();

const PORT = process.env.PORT;

const app = express();

app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use("/", Routers);

app.listen(PORT, () => {
  connectDB();
  console.log(chalk.green(` Server is running at http://localhost:${PORT}`));
});
