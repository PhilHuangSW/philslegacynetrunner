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

app.get('/runner/:id', async (req, res) => {
  const { id } = req.params;
  let deck_name_to_id = 0;
  switch (id) {
    case 'smoke':
    case '1':
      deck_name_to_id = 1;
      break;
    case 'chaostheory':
    case '2':
      deck_name_to_id = 2;
      break;
    case 'gabriel':
    case '3':
      deck_name_to_id = 3;
      break;
    default:
      deck_name_to_id = 1;
  }
  try {
    const data = await pool.query(`SELECT * FROM decks WHERE deck_id = ${deck_name_to_id}`);
    // data consists of an array of Objects
    // { deck_id, deck_code, deck_name, deck_description, cards[] }
    const { deck_code, deck_name, cards, deck_description } = data.rows[0];
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
    // console.log(event)
    // console.log(resource)
    // console.log(hardware)
    // console.log(icebreaker)
    // console.log(program)
    res.render('runner', { identity, event, hardware, resource, icebreaker, program, allImages, deck_name, deck_description });
  } catch (err) {
    console.log(err.message);
    res.render('home');
  }
})

app.get('/corp/:id', async (req, res) => {
  const { id } = req.params;
  let deck_name_to_id = 0;
  switch (id) {
    case 'smoke':
    case '1':
      deck_name_to_id = 1;
      break;
    case 'chaostheory':
    case '2':
      deck_name_to_id = 2;
      break;
    case 'gabriel':
    case '3':
      deck_name_to_id = 3;
      break;
    default:
      deck_name_to_id = 1;
  }
  try {
    const data = await pool.query(`SELECT * FROM decks WHERE deck_id = ${deck_name_to_id}`);
    // data consists of an array of Objects
    // { deck_id, deck_code, deck_name, deck_description, cards[] }
    const { deck_code, deck_name, cards, deck_description } = data.rows[0];
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
    res.render('corp', { identity, event, hardware, resource, icebreaker, program, allImages, deck_name, deck_description });
  } catch (err) {
    console.log(err.message);
    res.render('home');
  }
})

app.get('*', (req, res) => {
  res.redirect('/');
})

app.listen(8080, () => {
  console.log(`Listening on port 8080!`);
})