import express from "express";
import chalk from "chalk";
import bodyParser from "body-parser";
import { configDotenv } from "dotenv";
import { connectDB } from "../db.js";
import cors from "cors";

import { foodRouters } from "./routers/foodRouter.js";
import { foodCategoryRouters } from "./routers/foodcategoryRouter.js";
import { foodOrderRouters } from "./routers/foodOrderRouter.js";
import { userRouters } from "./routers/userRouter.js";

configDotenv();

const PORT = process.env.PORT;

const app = express();

app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use("/", userRouters);
app.use("/food", foodRouters)
app.use("/foodcategory",foodCategoryRouters)
app.use("/foodorder",foodOrderRouters)
app.listen(PORT, () => {
  connectDB();
  console.log(chalk.green(` Server is running at http://localhost:${PORT}`));
});
