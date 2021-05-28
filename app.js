const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');
const fetch = require('node-fetch');
const postgres = require('postgres');
const morgan = require('morgan');
// const pg = require('pg');
const pool = require('./db');
const cors = require('cors');

const app = express();
const sql = postgres();

// MIDDLEWARE
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());


// ROUTES
app.get('/', (req, res) => {
  res.render('home');
})

app.get('/testing', async (req, res) => {
  try {
    const data = await fetch('https://netrunnerdb.com/api/2.0/public/card/02043');
    const card = await data.json();
    console.log(card);
    const newCard = await pool.query("INSERT INTO cards (faction_code, title) VALUES($1, $2) RETURNING *", [card.data[0].faction_code, card.data[0].title]);
    res.render('test');
  } catch (err) {
    console.log(err.message);
  }
})

app.get('/runner', async (req, res) => {
  // const info = await fetch('https://netrunnerdb.com/api/2.0/public/decklist/62733');
  // const infoObject = await info.json()
  // const deck = await infoObject.data[0].cards;
  // const deckCodes = [];
  // for (let card in deck) {
  //   deckCodes.push(card)
  // }
  // // console.log(deckCodes);
  // const deckList = [];
  // console.log('-------deckCodes------');
  // console.log(deckCodes);
  // for (let i = 0; i < deckCodes.length; i++) {
  //   console.log(parseInt(deckCodes[i]));
  //   const cardFetch = await fetch(`https://netrunnerdb.com/api/2.0/public/card/${parseInt(deckCodes[i])}`)
  //   const cardCode = await cardFetch.json()
  //   console.log(cardCode);
  //   deckList.push([cardCode.data[0].code, cardCode.data[0].stripped_title])
  // }
  // console.log(deckList);
  // const info = await fetch('https://netrunnerdb.com/api/2.0/public/prebuilts');
  // const infoObject = await info.json();
  // console.log(infoObject);
  res.render('runner');
})

// {"imageUrlTemplate":"https://netrunnerdb.com/card_image/large/{code}.jpg",
// "data":[{
// "code":"02043",
// "cost":0,
// "deck_limit":3,
// "faction_code":"criminal",
// "faction_cost":2,
// "flavor":"\"Think of it as a virtual shock collar for punishing corporate pets.\" -Andromeda",
// "illustrator":"Adam S. Doyle",
// "keywords":"Sabotage",
// "pack_code":"ce",
// "position":43,
// "quantity":3,
// "side_code":"runner",
// "stripped_text":"Play only if you made a successful run on HQ this turn. Derez 1 installed piece of ice.",
// "stripped_title":"Emergency Shutdown",
// "text":"Play only if you made a successful run on HQ this turn.\nDerez 1 installed piece of ice.",
// "title":"Emergency Shutdown",
// "type_code":"event",
// "uniqueness":false
// }],
// "total":1,
// "success":true,
// "version_number":"2.0",
// "last_updated":"2021-03-15T14:10:37+00:00"}

app.listen(8080, () => {
  console.log(`Listening on port 8080!`);
})