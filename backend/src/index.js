import express from "express";
import chalk from "chalk";
import bodyParser from "body-parser";
import { configDotenv } from "dotenv";
import { connectDB } from "../db.js";
import cors from "cors";

import { foodRouters } from "./routers/foodRouter.js";
import { CategoryRouters} from "./routers/CategoryRouter.js";
import { foodOrderRouters } from "./routers/OrderRouter.js";
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
app.use("/foods", foodRouters)
app.use("/categories",CategoryRouters)
app.use("/orders",foodOrderRouters)
app.listen(PORT, () => {
  connectDB();
  console.log(chalk.green(` Server is running at http://localhost:${PORT}`));
});
