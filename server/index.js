//first I have to nuke the local DB, then I can rewrite all the methods and endpoints

//the queries to create the tables are in the SQL Query box in Postico for the localhost DB

const express = require("express");
const app = express();
const massive = require("massive");
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");

require("dotenv").config();

app.use(bodyParser.json());

massive(process.env.DATABASE_URL).then(db => {
  console.log("PostgreSQL Database Successfully Connected");
  app.set("db", db);
});

// put all routes here

app.get("/hello", (req, res) => {
  res.send("Hello Hello, You Pushed the Button!");
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build/index.html"));
  });

app.listen(8080, function() {
  console.log(`Listening on port:${this.address().port}`);
});
