const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');
const fetch = require('node-fetch');
const postgres = require('postgres');
const morgan = require('morgan');
// const pg = require('pg');
// const pool = require('./db');
const { Client } = require('pg');
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

// DATABASE CONNECTION
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});
client.connect();

// ROUTES
app.get('/', (req, res) => {
  res.render('home');
})

app.get('/runner/:id', async (req, res) => {
  var { id } = req.params;
  let deck_name_to_id = 0;
  let runner = '';
  switch (id) {
    case 'chaostheory':
    case '1':
      runner = 'chaostheory';
      deck_name_to_id = 1;
      break;
    case 'smoke':
    case '2':
      runner = 'smoke';
      deck_name_to_id = 2;
      break;
    case 'nasir':
    case '3':
      runner = 'nasir';
      deck_name_to_id = 3;
      break;
    case 'geist':
    case '4':
      runner = 'geist';
      deck_name_to_id = 4;
      break;
    case 'gabriel':
    case '5':
      runner = 'gabriel';
      deck_name_to_id = 5;
      break;
    case 'khan':
    case '6':
      runner = 'khan';
      deck_name_to_id = 6;
      break;
    case 'null':
    case '7':
      runner = 'null';
      deck_name_to_id = 7;
      break;
    case 'omar':
    case '8':
      runner = 'omar';
      deck_name_to_id = 8;
      break;
    case 'reina':
    case '9':
      runner = 'reina';
      deck_name_to_id = 9;
      break;
    case 'adam':
    case '10':
      runner = 'adam';
      deck_name_to_id = 10;
      break;
    case 'apex':
    case '11':
      runner = 'apex';
      deck_name_to_id = 11;
      break;
    case 'sunny':
    case '12':
      runner = 'sunny';
      deck_name_to_id = 12;
      break;
    default:
      deck_name_to_id = 1;
  }
  try {
    const data = await client.query(`SELECT * FROM decks WHERE deck_id = ${deck_name_to_id}`);
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
      const card = await client.query("SELECT * FROM cards WHERE code = $1", [cards[cardCode][0]]);
      const { base_link, code, cost, deck_limit, keywords, memory_cost, minimum_deck_size, strength, full_text, title, type_code, uniqueness, influence_limit } = card.rows[0]
      // card.rows[0] consists of everything--card_id, code, faction_code, type_code, etc.
      const url = 'https://netrunnerdb.com/card_image/large/' + code + '.jpg'
      allImages.push(url);
      switch (card.rows[0].type_code) {
        case 'event':
          event.push({
            'title': title,
            'amount': cards[cardCode][1],
            'id': cardCode,
            'card_code': code,
            'cost': cost,
            'deck_limit': deck_limit,
            'keywords': keywords,
            'full_text': full_text,
            'type_code': type_code
          });
          break;
        case 'hardware':
          hardware.push({
            'title': title,
            'amount': cards[cardCode][1],
            'id': cardCode,
            'strength': strength,
            'full_text': full_text,
            'keywords': keywords,
            'type_code': type_code,
            'memory_cost': memory_cost,
            'cost': cost,
            'card_code': code,
            'uniqueness': uniqueness
          });
          break;
        case 'resource':
          resource.push({
            'title': title,
            'amount': cards[cardCode][1],
            'id': cardCode,
            'card_code': code,
            'cost': cost,
            'deck_limit': deck_limit,
            'keywords': keywords,
            'full_text': full_text,
            'type_code': type_code,
            'uniqueness': uniqueness
          });
          break;
        case 'program':
          let ib = new RegExp('Icebreaker');
          if (ib.test(card.rows[0].keywords)) {
            icebreaker.push({
              'title': title,
              'amount': cards[cardCode][1],
              'id': cardCode,
              'strength': strength,
              'full_text': full_text,
              'keywords': keywords,
              'type_code': type_code,
              'memory_cost': memory_cost,
              'cost': cost,
              'card_code': code,
              'uniqueness': uniqueness
            });
          } else {
            program.push({
              'title': title,
              'amount': cards[cardCode][1],
              'id': cardCode,
              'full_text': full_text,
              'keywords': keywords,
              'type_code': type_code,
              'memory_cost': memory_cost,
              'cost': cost,
              'card_code': code,
              'uniqueness': uniqueness
            });
          }
          break;
        default:
          identity.push({
            'title': title,
            'amount': cards[cardCode][1],
            'id': cardCode,
            'base_link': base_link,
            'card_code': code,
            'full_text': full_text,
            'minimum_deck_size': minimum_deck_size,
            'keywords': keywords,
            'type_code': type_code,
            'influence_limit': influence_limit
          });
      }
    }
    // console.log(event)
    // console.log(resource)
    // console.log(hardware)
    // console.log(icebreaker)
    // console.log(program)
    res.render('runner', { identity, event, hardware, resource, icebreaker, program, allImages, deck_name, deck_description, runner });
  } catch (err) {
    console.log(err.message);
    res.render('home');
  }
})

app.get('/corp/:id', async (req, res) => {
  var { id } = req.params;
  let deck_name_to_id = 0;
  let corp = '';
  switch (id) {
    case 'architects':
    case '1':
      corp = 'architects';
      deck_name_to_id = 13;
      break;
    case 'foundry':
    case '2':
      corp = 'foundry';
      deck_name_to_id = 14;
      break;
    case 'pe':
    case '3':
      corp = 'pe';
      deck_name_to_id = 15;
      break;
    case 'nisei':
    case '4':
      corp = 'nisei';
      deck_name_to_id = 16;
      break;
    case 'builder':
    case '5':
      corp = 'builder';
      deck_name_to_id = 17;
      break;
    case 'babw':
    case '6':
      corp = 'babw';
      deck_name_to_id = 18;
      break;
    case 'sync':
    case '7':
      corp = 'sync';
      deck_name_to_id = 19;
      break;
    case 'spark':
    case '8':
      corp = 'spark';
      deck_name_to_id = 20;
      break;
    default:
      corp = 'architects';
      deck_name_to_id = 13;
  }
  try {
    const data = await client.query(`SELECT * FROM decks WHERE deck_id = ${deck_name_to_id}`);
    // data consists of an array of Objects
    // { deck_id, deck_code, deck_name, deck_description, cards[] }
    const { deck_code, deck_name, cards, deck_description } = data.rows[0];
    const identity = [];
    const agenda = [];
    const asset = [];
    const operation = [];
    const upgrade = [];
    const barrier = [];
    const codegate = [];
    const sentry = [];
    const other = [];

    for (let cardCode in cards) {
      const card = await client.query("SELECT * FROM cards WHERE code = $1", [cards[cardCode][0]]);
      const { advancement_cost, agenda_points, code, cost, deck_limit, influence_limit, keywords, minimum_deck_size, strength, full_text, title, trash_cost, type_code, uniqueness, } = card.rows[0]
      // card.rows[0] consists of everything--card_id, code, faction_code, type_code, etc.
      const url = 'https://netrunnerdb.com/card_image/large/' + code + '.jpg'
      allImages.push(url);
      switch (card.rows[0].type_code) {
        case 'agenda':
          agenda.push({
            'title': title,
            'amount': cards[cardCode][1],
            'id': cardCode,
            'card_code': code,
            'advancement_cost': advancement_cost,
            'agenda_points': agenda_points,
            'deck_limit': deck_limit,
            'keywords': keywords,
            'full_text': full_text,
            'type_code': type_code,
            'uniqueness': uniqueness
          });
          break;
        case 'asset':
          asset.push({
            'title': title,
            'amount': cards[cardCode][1],
            'id': cardCode,
            'trash_cost': trash_cost,
            'full_text': full_text,
            'keywords': keywords,
            'type_code': type_code,
            'cost': cost,
            'card_code': code,
            'deck_limit': deck_limit,
            'uniqueness': uniqueness
          });
          break;
        case 'operation':
          operation.push({
            'title': title,
            'amount': cards[cardCode][1],
            'id': cardCode,
            'card_code': code,
            'cost': cost,
            'deck_limit': deck_limit,
            'keywords': keywords,
            'full_text': full_text,
            'type_code': type_code,
            'uniqueness': uniqueness,
            'trash_cost': trash_cost
          });
          break;
        case 'upgrade':
          upgrade.push({
            'title': title,
            'amount': cards[cardCode][1],
            'id': cardCode,
            'card_code': code,
            'cost': cost,
            'deck_limit': deck_limit,
            'keywords': keywords,
            'full_text': full_text,
            'type_code': type_code,
            'uniqueness': uniqueness,
            'trash_cost': trash_cost
          });
          break;
        case 'ice':
          let barrier = new RegExp('Barrier');
          let codegate = new RegExp('Code Gate');
          let sentry = new RegExp('Sentry');
          if (barrier.test(card.rows[0].keywords)) {
            barrier.push({
              'title': title,
              'amount': cards[cardCode][1],
              'id': cardCode,
              'strength': strength,
              'full_text': full_text,
              'keywords': keywords,
              'type_code': type_code,
              'uniqueness': uniqueness,
              'cost': cost,
              'card_code': code,
              'trash_cost': trash_cost
            });
          } else if (codegate.test(card.rows[0].keywords)) {
            codegate.push({
              'title': title,
              'amount': cards[cardCode][1],
              'id': cardCode,
              'strength': strength,
              'full_text': full_text,
              'keywords': keywords,
              'type_code': type_code,
              'uniqueness': uniqueness,
              'cost': cost,
              'card_code': code,
              'trash_cost': trash_cost
            });
          } else if (sentry.test(card.rows[0].keywords)) {
            sentry.push({
              'title': title,
              'amount': cards[cardCode][1],
              'id': cardCode,
              'strength': strength,
              'full_text': full_text,
              'keywords': keywords,
              'type_code': type_code,
              'uniqueness': uniqueness,
              'cost': cost,
              'card_code': code,
              'trash_cost': trash_cost
            });
          } else {
            other.push({
              'title': title,
              'amount': cards[cardCode][1],
              'id': cardCode,
              'strength': strength,
              'full_text': full_text,
              'keywords': keywords,
              'type_code': type_code,
              'uniqueness': uniqueness,
              'cost': cost,
              'card_code': code,
              'trash_cost': trash_cost
            });
          }
          break;
        default:
          identity.push({
            'title': title,
            'amount': cards[cardCode][1],
            'id': cardCode,
            'card_code': code,
            'full_text': full_text,
            'minimum_deck_size': minimum_deck_size,
            'keywords': keywords,
            'type_code': type_code,
            'influence_limit': influence_limit
          });
      }
    }
    console.log(agenda)
    console.log(asset)
    console.log(operation)
    console.log(upgrade)
    console.log(barrier)
    console.log(codegate)
    console.log(sentry)
    console.log(other)
    res.render('corp', { identity, agenda, asset, operation, upgrade, barrier, codegate, sentry, other, allImages, deck_name, deck_description, corp });
  } catch (err) {
    console.log(err.message);
    res.redirect('/');
  }
})

app.get('*', (req, res) => {
  res.redirect('/');
})

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});