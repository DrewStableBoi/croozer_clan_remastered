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
console.log(`This is the current directory's name: ${__dirname}` + '/source_floppies')

var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now())
  }
}

app.use(express.static(__dirname)); 

// you have a directory where every file is potentially public. You may use a 
// static folder where a browser can read the files, but with .zip files
// they can also live in there and it's a good idea to have them in a static folder
// express static is good when you want a static folder in your server directory to serve stuff up

massive(process.env.DATABASE_URL).then(db => {
  console.log("PostgreSQL Database Successfully Connected");
  app.set("db", db);
});
// put all routes here below
app.get("/hello", (req, res) => {
  res.send(`Use the dropdown to select a Pokemon. Once you do, click "Fetch Info". This will pass a call to retrieve all the information about that Pokemon!`);
});


app.get("/game_download", (req, res) => {
  const { selected_game } = req.query;
  res.send(`Thank you for downloading ${selected_game}. You will be redirected to a drive folder where you can download it. Happy gaming!`)
})

app.get("/pokemon", (req, res) => {
  pokemonMethods
    .populateDropdown(BASE_POKE_URL, BASE_POKE_LIMIT, BASE_POKE_OFFSET)
    .then(result => {
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

app.listen(process.env.PORT, function() {
  console.log(`Listening on port:${this.address().port}`);
});
