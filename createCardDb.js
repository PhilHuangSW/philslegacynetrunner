const pool = require('./db');
const fetch = require('node-fetch');

const card = async () => {
  try {
    const data = await fetch('https://netrunnerdb.com/api/2.0/public/cards');
    const dataJson = await data.json();
    const allCards = [];
    for (let index in dataJson.data) {
      console.log(dataJson.data[index].title)
      allCards.push(dataJson.data[index])
    }
    // console.log(allCards);
    // console.log(dataJson);
    for (let index in allCards) {
      const insertCard = await pool.query(
        "INSERT INTO cards (code, cost, deck_limit, faction_code, faction_cost, flavor, illustrator, keywords, pack_code, position, quantity, side_code, stripped_text, stripped_title, full_text, title, type_code, uniqueness) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18) RETURNING *",
        [
          allCards[index].code,
          allCards[index].cost,
          allCards[index].deck_limit,
          allCards[index].faction_code,
          allCards[index].faction_cost,
          allCards[index].flavor,
          allCards[index].illustrator,
          allCards[index].keywords,
          allCards[index].pack_code,
          allCards[index].position,
          allCards[index].quantity,
          allCards[index].side_code,
          allCards[index].stripped_text,
          allCards[index].stripped_title,
          allCards[index].text,
          allCards[index].title,
          allCards[index].type_code,
          allCards[index].uniqueness
        ]);
    }

    console.log('Done!');
  } catch (err) {
    console.log(err.message);
    console.log("Oh no! I crashed somehow...");
  }
}

const check = async () => {
  const q = await pool.query("SELECT * FROM cards WHERE card_id = 50");
  // console.log(q.rows[0].code);
  const url = 'https://netrunnerdb.com/api/2.0/public/card/' + q.rows[0].code
  const card = await fetch(url);
  const cardData = await card.json();
  console.log(cardData);
}

const createDeck = async () => {
  try {
    const decklist = await fetch('https://netrunnerdb.com/api/2.0/public/decklist/66030');
    const decklistJson = await decklist.json();
    const cards = [];
    for (let ob in decklistJson.data[0].cards) {
      // console.log(`${ob} -- ${decklistJson.data[0].cards[ob]}`);
      cards.push([ob, decklistJson.data[0].cards[ob]])
    }
    const deck = await pool.query("INSERT INTO decks(deck_code, deck_name, deck_description, cards) VALUES($1, $2, $3, $4) RETURNING *",
      [
        decklistJson.data[0].id,
        decklistJson.data[0].name,
        decklistJson.data[0].description,
        cards,
      ])
    console.log('done!');
  } catch (err) {
    console.log(err.message);
    console.log('I broke somehow in CreateDeck Function');
  }
}

createDeck();