import express from "express";
import cors from "cors";
import "dotenv/config";
import { assertDatabaseConnectionOk } from "./utils/db_connection_check";
import { makeHandlerAwareOfAsyncErrors } from "./utils/helper";
const sequelize = require("./models");

import routes from "./routes";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World! this will build");
});

app.use(express.static("public"));

app.use("/fea-request", routes.feaRequest.getAll);

assertDatabaseConnectionOk(sequelize);

for (const [routeName, routeController] of Object.entries(routes)) {
  if (routeController.getAll) {
    app.get(
      `/api/${routeName}`,
      makeHandlerAwareOfAsyncErrors(routeController.getAll)
    );
  }
}
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Express server started on port ${PORT}.`);
});
