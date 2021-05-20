const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');
const fetch = require('node-fetch');

const app = express();

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/runner', async (req, res) => {
  const es = await fetch('https://netrunnerdb.com/api/2.0/public/decklist/62733');
  const response = await es.json()
  const deck = await response.data[0].cards;
  const deckList = [];
  for (let card in deck) {
    deckList.push(card)
  }
  console.log(deckList);
  const card1 = await fetch(`https://netrunnerdb.com/api/2.0/public/card/${parseInt(deckList[11])}`)
  const cardDetails = await card1.json();
  console.log(cardDetails);
  res.render('runner', { cardDetails });
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