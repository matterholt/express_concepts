// TUT link https://www.robinwieruch.de/node-express-server-rest-api/
import "dotenv/config";
import cors from "cors";
import express from "express";
// Express Middleware

import bodyParser from "body-parser";

import routes from "./routes";
import models from "./models/models_data";
// MOCK DATA

//declared function
const app = express();

app.use("/session", routes.session);
app.use("/users", routes.users);
//app.use("/messages", routes.message);

app.listen(process.env.PORT, () =>
  console.log(`running on http://localhost:${process.env.PORT}/`)
);
