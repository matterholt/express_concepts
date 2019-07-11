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

// *********EXPRESS MIDDLEWARE *********
// parses the text as JSON and exposes the resulting object on req.body
app.use(bodyParser.json());
// text as URL encode data, send from data from regular forms set POST
app.use(bodyParser.urlencoded({ extended: true }));
// *********CUSTOM MIDDLEWARE *********
app.use((req, res, next) => {
  req.context = {
    models,
    me: models.users[1]
  };
  next();
});

////// ROUTES
app.use("/session", routes.session);
app.use("/users", routes.users);
//app.use("/messages", routes.message);
// defines and starts server
app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}`)
);
