const createError = require("http-errors");
const express = require("express");
const path = require("path");
const logger = require("morgan");

const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");

// import routes
const routes = require("./routes/index");

require("dotenv").config();

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
app.use(
  session({
    secret: process.env.SECRET,
    cookie: { maxAge: 60000 }
  })
);
app.use(flash());

app.use("/api/user", routes.userAPI);
app.use("/api/projects", routes.projectsAPI);
app.use("/api/feaRequest", routes.feaRequestAPI);
// to create the results it might be better in feaRequest??
app.use("/api/feaResults", routes.feaResultsAPI);

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
