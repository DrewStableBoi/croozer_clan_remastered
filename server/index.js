//first I have to nuke the local DB, then I can rewrite all the methods and endpoints

//the queries to create the tables are in the SQL Query box in Postico for the localhost DB

const express = require("express");
const axios = require("axios");
const _ = require("lodash");
const app = express();
const massive = require("massive");
const path = require("path");
const bodyParser = require("body-parser");
const gamesAPI = "e8e22519b15fbe8b5e858e89350b6509";
const gamesURL = "https://api-v3.igdb.com";
const REQUEST_LIMIT = 50;
const consoleEndpoint = "characters";
const fields = "akas,country_name,created_at,description,games,gender,mug_shot,name,people,slug,species,updated_at,url";

require("dotenv").config();
app.use(bodyParser.json());
massive(process.env.DATABASE_URL).then(db => {
  console.log("PostgreSQL Database Successfully Connected");
  app.set("db", db);
});

function buildRequestOptions(endpoint, fields, offset) {
  return {
    url: `${gamesURL}/${endpoint}`,
    method: "POST",
    headers: {
      Accept: "application/json",
      "user-key": gamesAPI
    },
    data: `fields ${fields};`
  };
}

function getAllData(endpoint, fields, offset, allData = []) {
  let options = buildRequestOptions(endpoint, fields, offset);
  return axios(options)
    .then(response => {
      allData = _.concat(allData, response.data);
      if (_.size(response.data) === REQUEST_LIMIT && _.size(allData) <= 150) {
        // ask for the next page of results
        return getAllData(endpoint, fields, _.size(allData), allData);
      }
      return allData;
    })
    .catch(err => {
      console.error(err);
    });
}

// put all routes here below
app.get("/hello", (req, res) => {
  res.send("Hello Hello, You Pushed the Button!");
});

app.get("/consoles", (req, res) => {
  getAllData(consoleEndpoint, fields, (offset = 0))
    .then(result => {
      console.log(result);
      res.status(200).send(result);
    })
    .catch(error => {
      console.log(error);
    });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build/index.html"));
});

app.listen(8080, function() {
  console.log(`Listening on port:${this.address().port}`);
});
