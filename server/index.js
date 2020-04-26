const express = require("express");
const _ = require("lodash");
const app = express();
const massive = require("massive");
const path = require("path");
const bodyParser = require("body-parser");
const pokemonMethods = require("./pokeAPI/pokemon");
const BASE_POKE_URL = "https://pokeapi.co/api/v2/pokemon";
const BASE_POKE_LIMIT = 50;
const BASE_POKE_OFFSET = 0;
require("dotenv").config();
app.use(bodyParser.json());
massive(process.env.DATABASE_URL).then(db => {
  console.log("PostgreSQL Database Successfully Connected");
  app.set("db", db);
});

// put all routes here below
app.get("/hello", (req, res) => {
  res.send(`Use the dropdown to select a Pokemon. Once you do, click "Fetch Info". This will pass a call to retrieve all the information about that Pokemon!`);
});

app.get("/characters", (req, res) => {
  const fields =
    "akas,country_name,created_at,description,games,gender,mug_shot,name,people,slug,species,updated_at,url";
  games
    .getAllData("characters", fields, (offset = 0))
    .then(result => {
      console.log(result);
      res.status(200).send(result);
    })
    .catch(error => {
      console.log(error);
    });
});

app.get("/pokemon", (req, res) => {
  pokemonMethods
    .populateDropdown(BASE_POKE_URL, BASE_POKE_LIMIT, BASE_POKE_OFFSET)
    .then(result => {
      console.log(result);
      res.status(200).send(result);
    })
    .catch(error => {
      console.log(error);
    });
});

app.get("/poke", (req, res) => {
  let poke  = req.query.pokemon;
  console.log(poke);
  pokemonMethods.getPoke(poke).then(result => {
    res.status(200).send(result);
  })
  .catch(error => {
    console.log(error);
  });
});

app.listen(8080, function() {
  console.log(`Listening on port:${this.address().port}`);
});
