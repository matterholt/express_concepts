import "dotenv/config";
import cors from "cors";
import express from "express";

//console.log("Hello Node.js project.");
//console.log(process.env.MY_SECRET);

/////////////
/// ---- MOCK DB
//*************************************************** */
let users = {
  1: {
    id: "1",
    username: "Robin Wieruch"
  },
  2: {
    id: "2",
    username: "Dave Davids"
  }
};

let messages = {
  1: {
    id: "1",
    text: "Hello World",
    userId: "1"
  },
  2: {
    id: "2",
    text: "By World",
    userId: "2"
  }
};
//*************************************************** */

//declared function
const app = express();

// CRUD HTTP methods and REST Operations
app.get("/users", (req, res) => {
  return res.send("Received a GET HTTP method");
});
app.post("/users", (req, res) => {
  return res.send("Received a POST HTTP method");
});
app.put("/users/:userId", (req, res) => {
  return res.send(`PUT HTTP method on user/${req.params.userId} resource`);
});
app.delete("/users/:userId", (req, res) => {
  return res.send(`DELETE HTTP method on user/${req.params.userId} resource`);
});

/*
// allows access to selected resources
app.use(cors());


// building some routes,
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/test", (req, res) => {
  res.send("Test World!");
});
*/

// defines and starts server
app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}`)
);
