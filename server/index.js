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
const postgreSQL_local = 'postgresql://drewhemsley@localhost/drewhemsley';
app.use(bodyParser.json());
const bcrypt = require("bcrypt");


// you have a directory where every file is potentially public. You may use a 
// static folder where a browser can read the files, but with .zip files
// they can also live in there and it's a good idea to have them in a static folder
// express static is good when you want a static folder in your server directory to serve stuff up

massive(postgreSQL_local).then(db => {
  console.log("PostgreSQL Database Successfully Connected");
  app.set("db", db);
}).catch((err) => {
  console.log(`Here's the DB connection error: ${err}`);
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
  pokemonMethods.getPoke(poke).then(result => {
    res.status(200).send(result);
  })
  .catch(error => {
    console.log(error);
  });
});

app.listen(process.env.PORT, function() {
  console.log(`Listening on port:${this.address().port}`);
})

//login method below!

app.post("/login", async (req, res) => {
  console.log("hit login, heres body", req.body);
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).send("Please enter email and password");
    const db = req.app.get("db");
    const [user] = await db.users.find({ email });
    if (!user)
      return res
        .status(400)
        .send(
          "The user does not exist. Please enter a valid email and password"
        );

    req.session.user = user;
    return res.status(200).send(user);
  } catch (error) {
    console.log(error);
  }
};

app.get("/user_info", async (req, res) => {
  const db = req.app.get("db");
  const { entered_username } = req.body;
  const query = `SELECT username FROM users WHERE username = ${entered_username}`
  db.query(query).then((result) => {
    if(!result) {
      res.status(401).send("No user found! Please create your account.")
    }
    res.status(200).send(result);
  })
})
