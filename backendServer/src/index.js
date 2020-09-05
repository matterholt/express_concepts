import express from "express";
import cors from "cors";
import "dotenv/config";
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

app.use("/fea-request", routes.feaRequest);

async function assertDatabaseConnectionOk() {
  console.log(`Checking database connection...`);
  try {
    await sequelize.authenticate();
    console.log("Database connection OK!");
  } catch (error) {
    console.log("Unable to connect to the database:");
    console.log(error.message);
    process.exit(1);
  }
}

const PORT = 3000;

app.listen(PORT, () => {
  console.log(
    `Express server started on port ${PORT}. Try some routes, such as '/api/users'.`
  );
});
