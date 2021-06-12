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

app.get('/runner', async (req, res) => {
  try {
    const data = await pool.query("SELECT * FROM decks");
    // data consists of an array of Objects
    // { deck_id, deck_code, deck_name, deck_description, cards[] }
    const { deck_code, deck_name, deck_description } = data.rows[0];
    const decklist = [];
    for (let cardCode in data.rows[0].cards) {
      const card = await pool.query("SELECT * FROM cards WHERE code = $1", [data.rows[0].cards[cardCode][0]]);
      const url = 'https://netrunnerdb.com/card_image/large/' + card.rows[0].code + '.jpg'
      decklist.push([card.rows[0], data.rows[0].cards[cardCode][1], url])
    }
    res.render('runner', { deck_code, deck_name, deck_description, decklist });
  } catch (err) {
    console.log(err.message);
    res.render('home');
  }
})

app.get('/corp', async (req, res) => {
  try {
    const data = await pool.query("SELECT * FROM decks");
    // data consists of an array of Objects
    // { deck_id, deck_code, deck_name, deck_description, cards[] }
    const { deck_code, deck_name, cards } = data.rows[0];
    const identity = [];
    const event = [];
    const hardware = [];
    const resource = [];
    const icebreaker = [];
    const program = [];
    const allImages = [];
    for (let cardCode in cards) {
      const card = await pool.query("SELECT * FROM cards WHERE code = $1", [cards[cardCode][0]]);
      // console.log(card)
      // card.rows[0] consists of everything--card_id, code, faction_code, type_code, etc.
      const url = 'https://netrunnerdb.com/card_image/large/' + card.rows[0].code + '.jpg'
      allImages.push(url);
      switch (card.rows[0].type_code) {
        case 'event':
          event.push({ 'title': card.rows[0].title, 'amount': cards[cardCode][1], 'id': cardCode });
          break;
        case 'hardware':
          hardware.push({ 'title': card.rows[0].title, 'amount': cards[cardCode][1], 'id': cardCode });
          break;
        case 'resource':
          resource.push({ 'title': card.rows[0].title, 'amount': cards[cardCode][1], 'id': cardCode });
          break;
        case 'program':
          let ib = new RegExp('Icebreaker');
          if (ib.test(card.rows[0].keywords)) {
            icebreaker.push({ 'title': card.rows[0].title, 'amount': cards[cardCode][1], 'id': cardCode });
          } else {
            program.push({ 'title': card.rows[0].title, 'amount': cards[cardCode][1], 'id': cardCode });
          }
          break;
        default:
          identity.push({ 'title': card.rows[0].title, 'amount': cards[cardCode][1], 'id': cardCode });
      }
    }
    res.render('corp', { identity, event, hardware, resource, icebreaker, program, allImages, deck_name });
  } catch (err) {
    console.log(err.message);
    res.render('home');
  }
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