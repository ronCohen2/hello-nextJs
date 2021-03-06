const express = require("express");
const next = require("next");
const axios = require("axios");
const dev = process.env.NODE.ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const server = express();
const ViewRouter = require("./router/ViewRouter");
const ApiRouter = require("./router/ApiRouter");
const db = require("./db");
var bodyParser = require("body-parser");
server.use(bodyParser.json());
app
  .prepare()
  .then(() => {
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: false }));

    server.use("/", ViewRouter);
    server.use("/api/", ApiRouter);

    server.get("*", (req, res) => {
      return handle(req, res);
    });
    db.connect(err => {
      if (err) {
        console.log("unable to connect to database");
      } else {
        server.listen(3000, err => {
          if (err) throw err;
          console.log("connected to database, app listening on port 3000");
        });
      }
    });
  })
  .catch(ex => {
    console.log(ex.stack);
  });
