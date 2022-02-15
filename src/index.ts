import "reflect-metadata";
import express, { Request, Response } from "express";
import { createConnection } from "typeorm";
import * as dotenv from "dotenv";
import path from "path";
import cors from "cors";
import { v4 as uuid } from "uuid";
import morgan from "morgan";
dotenv.config({ path: path.join(__dirname + "/config/.env") });
import router from "./routes";
import sanitize from "./utils/sanitizer";
const app = express();
import ORMConfig from "./ormconfig";
import { ValidationError } from "joi";

app.use(cors());
app.options("*", cors());
app.use(express.json());

app.use(morgan("combined"));
app.use((req: Request, res: Response, next) => {
  req.debugId = uuid();
  req.ipAddress = req.header("x-forwarded-for") || req.connection.remoteAddress;
  req.device = req.header("user-agent") || "";
  next();
});

app.use("/api", sanitize(), router);

//route not found error handler
app.use((req: Request, res: Response, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error: Error, req: Request, res: Response, next) => {
  if (error instanceof ValidationError) {
    const errorMessages = error.details.map((element) => {
      return {
        message: element.message,
        field: element.path,
      };
    });
    return res.status(422).json({
      errors: {
        errorMessages,
      },
    });
  } else {
    return res.status(error.status || 500).json({
      error: {
        message: error.message,
      },
    });
  }
});

const PORT = process.env.PORT || 5000;
createConnection(ORMConfig)
  .then((async) => {
    app.listen(PORT, () => console.log(`server listing to port ${PORT}`));
  })
  .catch((error) => console.log(error));
