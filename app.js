const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

// import routes
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const feaRequestRouter = require("./routes/feaRequest");
const db = require("./routes/queries");

require("dotenv").config();
console.log(process.env.MY_SECRET);

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/request", feaRequestRouter);
// connection to project database
app.get("/projects", db.getProjects);
app.get("/newproject", db.createNewProject);
app.post("/newproject", (req, res) => {
  res.send("hey from the post");
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
