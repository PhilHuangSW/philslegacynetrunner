const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

const card = async () => {
  try {
    const data = await fetch('https://netrunnerdb.com/api/2.0/public/cards');
    const dataJson = await data.json();
    const allCards = [];
    for (let index in dataJson.data) {
      console.log(dataJson.data[index].title)
      allCards.push(dataJson.data[index])
    }
    for (let index in allCards) {
      const insertCard = await client.query(
        "INSERT INTO cards (advancement_cost, agenda_points, base_link, code, cost, deck_limit, faction_code, faction_cost, flavor, illustrator, influence_limit, keywords, memory_cost, minimum_deck_size, pack_code, position, quantity, side_code, strength, stripped_text, stripped_title, full_text, title, trash_cost, type_code, uniqueness) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26) RETURNING *",
        [
          allCards[index].advancement_cost,
          allCards[index].agenda_points,
          allCards[index].base_link,
          allCards[index].code,
          allCards[index].cost,
          allCards[index].deck_limit,
          allCards[index].faction_code,
          allCards[index].faction_cost,
          allCards[index].flavor,
          allCards[index].illustrator,
          allCards[index].influence_limit,
          allCards[index].keywords,
          allCards[index].memory_cost,
          allCards[index].minimum_deck_size,
          allCards[index].pack_code,
          allCards[index].position,
          allCards[index].quantity,
          allCards[index].side_code,
          allCards[index].strength,
          allCards[index].stripped_text,
          allCards[index].stripped_title,
          allCards[index].text,
          allCards[index].title,
          allCards[index].trash_cost,
          allCards[index].type_code,
          allCards[index].uniqueness
        ]);
    }
    console.log('Done!');
  } catch (err) {
    console.log(err.message);
    console.log("Oh no! I crashed while building the card database somehow...");
  }
  client.end();
}

card();