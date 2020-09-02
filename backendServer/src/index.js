import express from "express";
import cors from "cors";
import "dotenv/config";

import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World! this will build");
});

app.use(express.static("public"));

app.use("/fea-request", routes.feaRequest);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});
