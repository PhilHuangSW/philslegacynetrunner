const { Client } = require('pg');
const fetch = require('node-fetch');

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

// Chaos Theory -- 66368
const createChaosTheory = async () => {
  try {
    const decklist = await fetch('https://netrunnerdb.com/api/2.0/public/decklist/66368');
    const decklistJson = await decklist.json();
    const cards = [];
    for (let ob in decklistJson.data[0].cards) {
      // console.log(`${ob} -- ${decklistJson.data[0].cards[ob]}`);
      cards.push([ob, decklistJson.data[0].cards[ob]])
    }
    const deck = await client.query("INSERT INTO decks(deck_code, deck_name, deck_description, cards) VALUES($1, $2, $3, $4) RETURNING *",
      [
        decklistJson.data[0].id,
        'Have You Met Dinosaurus?',
        decklistJson.data[0].description,
        cards,
      ],
      console.log('done!'))

  } catch (err) {
    console.log(err.message);
    console.log('I broke somehow in CreateDeck Function');
  }
}
// Smoke -- 66369
const createSmoke = async () => {
  try {
    const decklist = await fetch('https://netrunnerdb.com/api/2.0/public/decklist/66369');
    const decklistJson = await decklist.json();
    const cards = [];
    for (let ob in decklistJson.data[0].cards) {
      // console.log(`${ob} -- ${decklistJson.data[0].cards[ob]}`);
      cards.push([ob, decklistJson.data[0].cards[ob]])
    }
    const deck = await client.query("INSERT INTO decks(deck_code, deck_name, deck_description, cards) VALUES($1, $2, $3, $4) RETURNING *",
      [
        decklistJson.data[0].id,
        'Smoke And Mirrors',
        decklistJson.data[0].description,
        cards,
      ],
      console.log('done!'))

  } catch (err) {
    console.log(err.message);
    console.log('I broke somehow in CreateDeck Function');
  }
}
// Nasir -- 66370
const createNasir = async () => {
  try {
    const decklist = await fetch('https://netrunnerdb.com/api/2.0/public/decklist/66370');
    const decklistJson = await decklist.json();
    const cards = [];
    for (let ob in decklistJson.data[0].cards) {
      // console.log(`${ob} -- ${decklistJson.data[0].cards[ob]}`);
      cards.push([ob, decklistJson.data[0].cards[ob]])
    }
    const deck = await client.query("INSERT INTO decks(deck_code, deck_name, deck_description, cards) VALUES($1, $2, $3, $4) RETURNING *",
      [
        decklistJson.data[0].id,
        'Personal Workshop',
        decklistJson.data[0].description,
        cards,
      ],
      console.log('done!'))

  } catch (err) {
    console.log(err.message);
    console.log('I broke somehow in CreateDeck Function');
  }
}
// Geist -- 66438
const createGeist = async () => {
  try {
    const decklist = await fetch('https://netrunnerdb.com/api/2.0/public/decklist/66438');
    const decklistJson = await decklist.json();
    const cards = [];
    for (let ob in decklistJson.data[0].cards) {
      // console.log(`${ob} -- ${decklistJson.data[0].cards[ob]}`);
      cards.push([ob, decklistJson.data[0].cards[ob]])
    }
    const deck = await client.query("INSERT INTO decks(deck_code, deck_name, deck_description, cards) VALUES($1, $2, $3, $4) RETURNING *",
      [
        decklistJson.data[0].id,
        "You're Trash Kid",
        decklistJson.data[0].description,
        cards,
      ],
      console.log('done!'))

  } catch (err) {
    console.log(err.message);
    console.log('I broke somehow in CreateDeck Function');
  }
}
// Gabe -- 66465
const createGabe = async () => {
  try {
    const decklist = await fetch('https://netrunnerdb.com/api/2.0/public/decklist/66465');
    const decklistJson = await decklist.json();
    const cards = [];
    for (let ob in decklistJson.data[0].cards) {
      // console.log(`${ob} -- ${decklistJson.data[0].cards[ob]}`);
      cards.push([ob, decklistJson.data[0].cards[ob]])
    }
    const deck = await client.query("INSERT INTO decks(deck_code, deck_name, deck_description, cards) VALUES($1, $2, $3, $4) RETURNING *",
      [
        decklistJson.data[0].id,
        'I Know A Guy',
        decklistJson.data[0].description,
        cards,
      ],
      console.log('done!'))

  } catch (err) {
    console.log(err.message);
    console.log('I broke somehow in CreateDeck Function');
  }
}
// Khan -- 66373
const createKhan = async () => {
  try {
    const decklist = await fetch('https://netrunnerdb.com/api/2.0/public/decklist/66373');
    const decklistJson = await decklist.json();
    const cards = [];
    for (let ob in decklistJson.data[0].cards) {
      // console.log(`${ob} -- ${decklistJson.data[0].cards[ob]}`);
      cards.push([ob, decklistJson.data[0].cards[ob]])
    }
    const deck = await client.query("INSERT INTO decks(deck_code, deck_name, deck_description, cards) VALUES($1, $2, $3, $4) RETURNING *",
      [
        decklistJson.data[0].id,
        'B-B-Bird Bird Bird',
        decklistJson.data[0].description,
        cards,
      ],
      console.log('done!'))

  } catch (err) {
    console.log(err.message);
    console.log('I broke somehow in CreateDeck Function');
  }
}
// Null -- 66374
const createNull = async () => {
  try {
    const decklist = await fetch('https://netrunnerdb.com/api/2.0/public/decklist/66374');
    const decklistJson = await decklist.json();
    const cards = [];
    for (let ob in decklistJson.data[0].cards) {
      // console.log(`${ob} -- ${decklistJson.data[0].cards[ob]}`);
      cards.push([ob, decklistJson.data[0].cards[ob]])
    }
    const deck = await client.query("INSERT INTO decks(deck_code, deck_name, deck_description, cards) VALUES($1, $2, $3, $4) RETURNING *",
      [
        decklistJson.data[0].id,
        "Some Men Just Want To Watch The World Burn",
        decklistJson.data[0].description,
        cards,
      ],
      console.log('done!'))

  } catch (err) {
    console.log(err.message);
    console.log('I broke somehow in CreateDeck Function');
  }
}
// Omar -- 66375
const createOmar = async () => {
  try {
    const decklist = await fetch('https://netrunnerdb.com/api/2.0/public/decklist/66375');
    const decklistJson = await decklist.json();
    const cards = [];
    for (let ob in decklistJson.data[0].cards) {
      // console.log(`${ob} -- ${decklistJson.data[0].cards[ob]}`);
      cards.push([ob, decklistJson.data[0].cards[ob]])
    }
    const deck = await client.query("INSERT INTO decks(deck_code, deck_name, deck_description, cards) VALUES($1, $2, $3, $4) RETURNING *",
      [
        decklistJson.data[0].id,
        "I'm Not Old, I'm Experienced",
        decklistJson.data[0].description,
        cards,
      ],
      console.log('done!'))

  } catch (err) {
    console.log(err.message);
    console.log('I broke somehow in CreateDeck Function');
  }
}
// Reina -- 66498
const createReina = async () => {
  try {
    const decklist = await fetch('https://netrunnerdb.com/api/2.0/public/decklist/66498');
    const decklistJson = await decklist.json();
    const cards = [];
    for (let ob in decklistJson.data[0].cards) {
      // console.log(`${ob} -- ${decklistJson.data[0].cards[ob]}`);
      cards.push([ob, decklistJson.data[0].cards[ob]])
    }
    const deck = await client.query("INSERT INTO decks(deck_code, deck_name, deck_description, cards) VALUES($1, $2, $3, $4) RETURNING *",
      [
        decklistJson.data[0].id,
        "Queen's Gambit",
        decklistJson.data[0].description,
        cards,
      ],
      console.log('done!'))

  } catch (err) {
    console.log(err.message);
    console.log('I broke somehow in CreateDeck Function');
  }
}
// Adam -- 66497
const createAdam = async () => {
  try {
    const decklist = await fetch('https://netrunnerdb.com/api/2.0/public/decklist/66497');
    const decklistJson = await decklist.json();
    const cards = [];
    for (let ob in decklistJson.data[0].cards) {
      // console.log(`${ob} -- ${decklistJson.data[0].cards[ob]}`);
      cards.push([ob, decklistJson.data[0].cards[ob]])
    }
    const deck = await client.query("INSERT INTO decks(deck_code, deck_name, deck_description, cards) VALUES($1, $2, $3, $4) RETURNING *",
      [
        decklistJson.data[0].id,
        'Searching For Meaning',
        decklistJson.data[0].description,
        cards,
      ],
      console.log('done!'))

  } catch (err) {
    console.log(err.message);
    console.log('I broke somehow in CreateDeck Function');
  }
}
// Apex -- 66499
const createApex = async () => {
  try {
    const decklist = await fetch('https://netrunnerdb.com/api/2.0/public/decklist/66499');
    const decklistJson = await decklist.json();
    const cards = [];
    for (let ob in decklistJson.data[0].cards) {
      // console.log(`${ob} -- ${decklistJson.data[0].cards[ob]}`);
      cards.push([ob, decklistJson.data[0].cards[ob]])
    }
    const deck = await client.query("INSERT INTO decks(deck_code, deck_name, deck_description, cards) VALUES($1, $2, $3, $4) RETURNING *",
      [
        decklistJson.data[0].id,
        'Age Of Apex',
        decklistJson.data[0].description,
        cards,
      ],
      console.log('done!'))

  } catch (err) {
    console.log(err.message);
    console.log('I broke somehow in CreateDeck Function');
  }
}
// Sunny -- 66500
const createSunny = async () => {
  try {
    const decklist = await fetch('https://netrunnerdb.com/api/2.0/public/decklist/66500');
    const decklistJson = await decklist.json();
    const cards = [];
    for (let ob in decklistJson.data[0].cards) {
      // console.log(`${ob} -- ${decklistJson.data[0].cards[ob]}`);
      cards.push([ob, decklistJson.data[0].cards[ob]])
    }
    const deck = await client.query("INSERT INTO decks(deck_code, deck_name, deck_description, cards) VALUES($1, $2, $3, $4) RETURNING *",
      [
        decklistJson.data[0].id,
        'Mommy Needs To Kick Some Ass',
        decklistJson.data[0].description,
        cards,
      ],
      console.log('done!'))

  } catch (err) {
    console.log(err.message);
    console.log('I broke somehow in CreateDeck Function');
  }
}


// Haas-Bioroid: Architects of Tomorrow -- 66647
const createHaasBioroid = async () => {
  try {
    const decklist = await fetch('https://netrunnerdb.com/api/2.0/public/decklist/66647');
    const decklistJson = await decklist.json();
    const cards = [];
    for (let ob in decklistJson.data[0].cards) {
      // console.log(`${ob} -- ${decklistJson.data[0].cards[ob]}`);
      cards.push([ob, decklistJson.data[0].cards[ob]])
    }
    const deck = await client.query("INSERT INTO decks(deck_code, deck_name, deck_description, cards) VALUES($1, $2, $3, $4) RETURNING *",
      [
        decklistJson.data[0].id,
        'Campaign: Bioroid',
        decklistJson.data[0].description,
        cards,
      ],
      console.log('done!'))

  } catch (err) {
    console.log(err.message);
    console.log('I broke somehow in HaasBioroid creation Function');
  }
}
// The Foundry -- 66674
const createFoundry = async () => {
  try {
    const decklist = await fetch('https://netrunnerdb.com/api/2.0/public/decklist/66674');
    const decklistJson = await decklist.json();
    const cards = [];
    for (let ob in decklistJson.data[0].cards) {
      // console.log(`${ob} -- ${decklistJson.data[0].cards[ob]}`);
      cards.push([ob, decklistJson.data[0].cards[ob]])
    }
    const deck = await client.query("INSERT INTO decks(deck_code, deck_name, deck_description, cards) VALUES($1, $2, $3, $4) RETURNING *",
      [
        decklistJson.data[0].id,
        'The NEXT Holy Grail',
        decklistJson.data[0].description,
        cards,
      ],
      console.log('done!'))

  } catch (err) {
    console.log(err.message);
    console.log('I broke somehow in Foundry creation Function');
  }
}
// Jinteki -- 66682
const createJinteki = async () => {
  try {
    const decklist = await fetch('https://netrunnerdb.com/api/2.0/public/decklist/66682');
    const decklistJson = await decklist.json();
    const cards = [];
    for (let ob in decklistJson.data[0].cards) {
      // console.log(`${ob} -- ${decklistJson.data[0].cards[ob]}`);
      cards.push([ob, decklistJson.data[0].cards[ob]])
    }
    const deck = await client.query("INSERT INTO decks(deck_code, deck_name, deck_description, cards) VALUES($1, $2, $3, $4) RETURNING *",
      [
        decklistJson.data[0].id,
        'Death By Thousand Cuts',
        decklistJson.data[0].description,
        cards,
      ],
      console.log('done!'))

  } catch (err) {
    console.log(err.message);
    console.log('I broke somehow in Jinteki creation Function');
  }
}
// Nisei -- 66676
const createNisei = async () => {
  try {
    const decklist = await fetch('https://netrunnerdb.com/api/2.0/public/decklist/66676');
    const decklistJson = await decklist.json();
    const cards = [];
    for (let ob in decklistJson.data[0].cards) {
      // console.log(`${ob} -- ${decklistJson.data[0].cards[ob]}`);
      cards.push([ob, decklistJson.data[0].cards[ob]])
    }
    const deck = await client.query("INSERT INTO decks(deck_code, deck_name, deck_description, cards) VALUES($1, $2, $3, $4) RETURNING *",
      [
        decklistJson.data[0].id,
        'Do You Want To Play A PSI Game?',
        decklistJson.data[0].description,
        cards,
      ],
      console.log('done!'))

  } catch (err) {
    console.log(err.message);
    console.log('I broke somehow in Nisei creation Function');
  }
}
// Blue Sun -- 66677
const createBlueSun = async () => {
  try {
    const decklist = await fetch('https://netrunnerdb.com/api/2.0/public/decklist/66677');
    const decklistJson = await decklist.json();
    const cards = [];
    for (let ob in decklistJson.data[0].cards) {
      // console.log(`${ob} -- ${decklistJson.data[0].cards[ob]}`);
      cards.push([ob, decklistJson.data[0].cards[ob]])
    }
    const deck = await client.query("INSERT INTO decks(deck_code, deck_name, deck_description, cards) VALUES($1, $2, $3, $4) RETURNING *",
      [
        decklistJson.data[0].id,
        'Too Big To Fail',
        decklistJson.data[0].description,
        cards,
      ],
      console.log('done!'))

  } catch (err) {
    console.log(err.message);
    console.log('I broke somehow in BlueSun creation Function');
  }
}
// Weyland -- 66678
const createWeyland = async () => {
  try {
    const decklist = await fetch('https://netrunnerdb.com/api/2.0/public/decklist/66678');
    const decklistJson = await decklist.json();
    const cards = [];
    for (let ob in decklistJson.data[0].cards) {
      // console.log(`${ob} -- ${decklistJson.data[0].cards[ob]}`);
      cards.push([ob, decklistJson.data[0].cards[ob]])
    }
    const deck = await client.query("INSERT INTO decks(deck_code, deck_name, deck_description, cards) VALUES($1, $2, $3, $4) RETURNING *",
      [
        decklistJson.data[0].id,
        'Everything Is Advanceable',
        decklistJson.data[0].description,
        cards,
      ],
      console.log('done!'))

  } catch (err) {
    console.log(err.message);
    console.log('I broke somehow in Weyland creation Function');
  }
}
// Spark -- 66679
const createSpark = async () => {
  try {
    const decklist = await fetch('https://netrunnerdb.com/api/2.0/public/decklist/66679');
    const decklistJson = await decklist.json();
    const cards = [];
    for (let ob in decklistJson.data[0].cards) {
      // console.log(`${ob} -- ${decklistJson.data[0].cards[ob]}`);
      cards.push([ob, decklistJson.data[0].cards[ob]])
    }
    const deck = await client.query("INSERT INTO decks(deck_code, deck_name, deck_description, cards) VALUES($1, $2, $3, $4) RETURNING *",
      [
        decklistJson.data[0].id,
        'Ads, Ads Everywhere',
        decklistJson.data[0].description,
        cards,
      ],
      console.log('done!'))

  } catch (err) {
    console.log(err.message);
    console.log('I broke somehow in Spark creation Function');
  }
}
// Sync -- 66680
const createSync = async () => {
  try {
    const decklist = await fetch('https://netrunnerdb.com/api/2.0/public/decklist/66680');
    const decklistJson = await decklist.json();
    const cards = [];
    for (let ob in decklistJson.data[0].cards) {
      // console.log(`${ob} -- ${decklistJson.data[0].cards[ob]}`);
      cards.push([ob, decklistJson.data[0].cards[ob]])
    }
    const deck = await client.query("INSERT INTO decks(deck_code, deck_name, deck_description, cards) VALUES($1, $2, $3, $4) RETURNING *",
      [
        decklistJson.data[0].id,
        'Tags, Tags Everywhere',
        decklistJson.data[0].description,
        cards,
      ],
      console.log('done!'))

  } catch (err) {
    console.log(err.message);
    console.log('I broke somehow in Sync creation Function');
  }
}

const createAllCorps = async () => {
  // await createArchitects();
  await createFoundry();
  await createJinteki();
  await createNisei();
  await createBlueSun();
  await createWeyland();
  await createSpark();
  await createSync();
  client.end();
}

const createAllRunners = async () => {
  await createChaosTheory();
  await createSmoke();
  await createNasir();
  await createGeist();
  await createGabe();
  await createKhan();
  await createNull();
  await createOmar();
  await createReina();
  await createAdam();
  await createApex();
  await createSunny();
  client.end();
}

const createAll = async () => {
  await createChaosTheory();
  await createSmoke();
  await createNasir();
  await createGeist();
  await createGabe();
  await createKhan();
  await createNull();
  await createOmar();
  await createReina();
  await createAdam();
  await createApex();
  await createSunny();

  await createHaasBioroid();
  await createFoundry();
  await createJinteki();
  await createNisei();
  await createBlueSun();
  await createWeyland();
  await createSpark();
  await createSync();
  client.end();
}
// createAllCorps();