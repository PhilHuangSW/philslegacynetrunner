const pool = require('./db');
const fetch = require('node-fetch');
const pgtools = require('pgtools');
const config = {
  user: 'phil',
  host: 'localhost',
  password: 'phil',
  port: 5432
};


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
    const decklist = await fetch('https://netrunnerdb.com/api/2.0/public/decklist/66647');
    const decklistJson = await decklist.json();
    const cards = [];
    for (let ob in decklistJson.data[0].cards) {
      // console.log(`${ob} -- ${decklistJson.data[0].cards[ob]}`);
      cards.push([ob, decklistJson.data[0].cards[ob]])
    }
    const deck = await pool.query("INSERT INTO decks(deck_code, deck_name, deck_description, cards) VALUES($1, $2, $3, $4) RETURNING *",
      [
        decklistJson.data[0].id,
        'Campaign: Bioroid',
        decklistJson.data[0].description,
        cards,
      ],
      console.log('done!'))

  } catch (err) {
    console.log(err.message);
    console.log('I broke somehow in CreateDeck Function');
  }
}

const updateDeck = async () => {
  try {
    const decklist = await fetch('https://netrunnerdb.com/api/2.0/public/decklist/66708');
    const decklistJson = await decklist.json();
    const cards = [];
    for (let ob in decklistJson.data[0].cards) {
      // console.log(`${ob} -- ${decklistJson.data[0].cards[ob]}`);
      cards.push([ob, decklistJson.data[0].cards[ob]])
    }
    const deck = await pool.query("UPDATE decks SET deck_code = $1, cards = $2 WHERE deck_id = '16' RETURNING *",
      [
        decklistJson.data[0].id,
        cards,
      ],
      console.log('done!'))

  } catch (err) {
    console.log(err.message);
    console.log('I broke somehow in UpdateDeck Function');
  }
}

// 1 - Chaos Theory -- 66368
const createChaosTheory = async () => {
  try {
    const decklist = await fetch('https://netrunnerdb.com/api/2.0/public/decklist/66368');
    const decklistJson = await decklist.json();
    const cards = [];
    for (let ob in decklistJson.data[0].cards) {
      // console.log(`${ob} -- ${decklistJson.data[0].cards[ob]}`);
      cards.push([ob, decklistJson.data[0].cards[ob]])
    }
    const deck = await pool.query("INSERT INTO decks(deck_code, deck_name, deck_description, cards) VALUES($1, $2, $3, $4) RETURNING *",
      [
        decklistJson.data[0].id,
        'Have You Met Dinosaurus?',
        decklistJson.data[0].description,
        cards,
      ],
      console.log('done!'))

  } catch (err) {
    console.log(err.message);
    console.log('I broke somehow in Chaos Theory creation Function');
  }
}
// 2 - Smoke -- 66369
const createSmoke = async () => {
  try {
    const decklist = await fetch('https://netrunnerdb.com/api/2.0/public/decklist/66369');
    const decklistJson = await decklist.json();
    const cards = [];
    for (let ob in decklistJson.data[0].cards) {
      // console.log(`${ob} -- ${decklistJson.data[0].cards[ob]}`);
      cards.push([ob, decklistJson.data[0].cards[ob]])
    }
    const deck = await pool.query("INSERT INTO decks(deck_code, deck_name, deck_description, cards) VALUES($1, $2, $3, $4) RETURNING *",
      [
        decklistJson.data[0].id,
        'Smoke And Mirrors',
        decklistJson.data[0].description,
        cards,
      ],
      console.log('done!'))

  } catch (err) {
    console.log(err.message);
    console.log('I broke somehow in Smoke creation Function');
  }
}
// 3 - Nasir -- 66370
const createNasir = async () => {
  try {
    const decklist = await fetch('https://netrunnerdb.com/api/2.0/public/decklist/66370');
    const decklistJson = await decklist.json();
    const cards = [];
    for (let ob in decklistJson.data[0].cards) {
      // console.log(`${ob} -- ${decklistJson.data[0].cards[ob]}`);
      cards.push([ob, decklistJson.data[0].cards[ob]])
    }
    const deck = await pool.query("INSERT INTO decks(deck_code, deck_name, deck_description, cards) VALUES($1, $2, $3, $4) RETURNING *",
      [
        decklistJson.data[0].id,
        'Personal Workshop',
        decklistJson.data[0].description,
        cards,
      ],
      console.log('done!'))

  } catch (err) {
    console.log(err.message);
    console.log('I broke somehow in Nasir creation Function');
  }
}
// 4 - Geist -- 66438
const createGeist = async () => {
  try {
    const decklist = await fetch('https://netrunnerdb.com/api/2.0/public/decklist/66438');
    const decklistJson = await decklist.json();
    const cards = [];
    for (let ob in decklistJson.data[0].cards) {
      // console.log(`${ob} -- ${decklistJson.data[0].cards[ob]}`);
      cards.push([ob, decklistJson.data[0].cards[ob]])
    }
    const deck = await pool.query("INSERT INTO decks(deck_code, deck_name, deck_description, cards) VALUES($1, $2, $3, $4) RETURNING *",
      [
        decklistJson.data[0].id,
        "You're Trash Kid",
        decklistJson.data[0].description,
        cards,
      ],
      console.log('done!'))

  } catch (err) {
    console.log(err.message);
    console.log('I broke somehow in Geist creation Function');
  }
}
// 5 - Gabe -- 66465
const createGabe = async () => {
  try {
    const decklist = await fetch('https://netrunnerdb.com/api/2.0/public/decklist/66465');
    const decklistJson = await decklist.json();
    const cards = [];
    for (let ob in decklistJson.data[0].cards) {
      // console.log(`${ob} -- ${decklistJson.data[0].cards[ob]}`);
      cards.push([ob, decklistJson.data[0].cards[ob]])
    }
    const deck = await pool.query("INSERT INTO decks(deck_code, deck_name, deck_description, cards) VALUES($1, $2, $3, $4) RETURNING *",
      [
        decklistJson.data[0].id,
        'I Know A Guy',
        decklistJson.data[0].description,
        cards,
      ],
      console.log('done!'))

  } catch (err) {
    console.log(err.message);
    console.log('I broke somehow in Gabe creation Function');
  }
}
// 6 - Khan -- 66373
const createKhan = async () => {
  try {
    const decklist = await fetch('https://netrunnerdb.com/api/2.0/public/decklist/66373');
    const decklistJson = await decklist.json();
    const cards = [];
    for (let ob in decklistJson.data[0].cards) {
      // console.log(`${ob} -- ${decklistJson.data[0].cards[ob]}`);
      cards.push([ob, decklistJson.data[0].cards[ob]])
    }
    const deck = await pool.query("INSERT INTO decks(deck_code, deck_name, deck_description, cards) VALUES($1, $2, $3, $4) RETURNING *",
      [
        decklistJson.data[0].id,
        'B-B-Bird Bird Bird',
        decklistJson.data[0].description,
        cards,
      ],
      console.log('done!'))

  } catch (err) {
    console.log(err.message);
    console.log('I broke somehow in Khan creation Function');
  }
}
// 7 - Null -- 66374
const createNull = async () => {
  try {
    const decklist = await fetch('https://netrunnerdb.com/api/2.0/public/decklist/66374');
    const decklistJson = await decklist.json();
    const cards = [];
    for (let ob in decklistJson.data[0].cards) {
      // console.log(`${ob} -- ${decklistJson.data[0].cards[ob]}`);
      cards.push([ob, decklistJson.data[0].cards[ob]])
    }
    const deck = await pool.query("INSERT INTO decks(deck_code, deck_name, deck_description, cards) VALUES($1, $2, $3, $4) RETURNING *",
      [
        decklistJson.data[0].id,
        "Some Men Just Want To Watch The World Burn",
        decklistJson.data[0].description,
        cards,
      ],
      console.log('done!'))

  } catch (err) {
    console.log(err.message);
    console.log('I broke somehow in Null creation Function');
  }
}
// 8 - Omar -- 66375
const createOmar = async () => {
  try {
    const decklist = await fetch('https://netrunnerdb.com/api/2.0/public/decklist/66375');
    const decklistJson = await decklist.json();
    const cards = [];
    for (let ob in decklistJson.data[0].cards) {
      // console.log(`${ob} -- ${decklistJson.data[0].cards[ob]}`);
      cards.push([ob, decklistJson.data[0].cards[ob]])
    }
    const deck = await pool.query("INSERT INTO decks(deck_code, deck_name, deck_description, cards) VALUES($1, $2, $3, $4) RETURNING *",
      [
        decklistJson.data[0].id,
        "I'm Not Old, I'm Experienced",
        decklistJson.data[0].description,
        cards,
      ],
      console.log('done!'))

  } catch (err) {
    console.log(err.message);
    console.log('I broke somehow in Omar creation Function');
  }
}
// 9 - Reina -- 66498
const createReina = async () => {
  try {
    const decklist = await fetch('https://netrunnerdb.com/api/2.0/public/decklist/66498');
    const decklistJson = await decklist.json();
    const cards = [];
    for (let ob in decklistJson.data[0].cards) {
      // console.log(`${ob} -- ${decklistJson.data[0].cards[ob]}`);
      cards.push([ob, decklistJson.data[0].cards[ob]])
    }
    const deck = await pool.query("INSERT INTO decks(deck_code, deck_name, deck_description, cards) VALUES($1, $2, $3, $4) RETURNING *",
      [
        decklistJson.data[0].id,
        "Queen's Gambit",
        decklistJson.data[0].description,
        cards,
      ],
      console.log('done!'))

  } catch (err) {
    console.log(err.message);
    console.log('I broke somehow in Reina creation Function');
  }
}
// 10 - Adam -- 66497
const createAdam = async () => {
  try {
    const decklist = await fetch('https://netrunnerdb.com/api/2.0/public/decklist/66497');
    const decklistJson = await decklist.json();
    const cards = [];
    for (let ob in decklistJson.data[0].cards) {
      // console.log(`${ob} -- ${decklistJson.data[0].cards[ob]}`);
      cards.push([ob, decklistJson.data[0].cards[ob]])
    }
    const deck = await pool.query("INSERT INTO decks(deck_code, deck_name, deck_description, cards) VALUES($1, $2, $3, $4) RETURNING *",
      [
        decklistJson.data[0].id,
        'Searching For Meaning',
        decklistJson.data[0].description,
        cards,
      ],
      console.log('done!'))

  } catch (err) {
    console.log(err.message);
    console.log('I broke somehow in Adam creation Function');
  }
}
// 11 - Apex -- 66499
const createApex = async () => {
  try {
    const decklist = await fetch('https://netrunnerdb.com/api/2.0/public/decklist/66499');
    const decklistJson = await decklist.json();
    const cards = [];
    for (let ob in decklistJson.data[0].cards) {
      // console.log(`${ob} -- ${decklistJson.data[0].cards[ob]}`);
      cards.push([ob, decklistJson.data[0].cards[ob]])
    }
    const deck = await pool.query("INSERT INTO decks(deck_code, deck_name, deck_description, cards) VALUES($1, $2, $3, $4) RETURNING *",
      [
        decklistJson.data[0].id,
        'Age Of Apex',
        decklistJson.data[0].description,
        cards,
      ],
      console.log('done!'))

  } catch (err) {
    console.log(err.message);
    console.log('I broke somehow in Apex creation Function');
  }
}
// 12 - Sunny -- 66500
const createSunny = async () => {
  try {
    const decklist = await fetch('https://netrunnerdb.com/api/2.0/public/decklist/66500');
    const decklistJson = await decklist.json();
    const cards = [];
    for (let ob in decklistJson.data[0].cards) {
      // console.log(`${ob} -- ${decklistJson.data[0].cards[ob]}`);
      cards.push([ob, decklistJson.data[0].cards[ob]])
    }
    const deck = await pool.query("INSERT INTO decks(deck_code, deck_name, deck_description, cards) VALUES($1, $2, $3, $4) RETURNING *",
      [
        decklistJson.data[0].id,
        'Mommy Needs To Kick Some Ass',
        decklistJson.data[0].description,
        cards,
      ],
      console.log('done!'))

  } catch (err) {
    console.log(err.message);
    console.log('I broke somehow in Sunny creation Function');
  }
}

// 13 - Haas-Bioroid: Architects of Tomorrow -- 66647
const createArchitects = async () => {
  try {
    const decklist = await fetch('https://netrunnerdb.com/api/2.0/public/decklist/66647');
    const decklistJson = await decklist.json();
    const cards = [];
    for (let ob in decklistJson.data[0].cards) {
      // console.log(`${ob} -- ${decklistJson.data[0].cards[ob]}`);
      cards.push([ob, decklistJson.data[0].cards[ob]])
    }
    const deck = await pool.query("INSERT INTO decks(deck_code, deck_name, deck_description, cards) VALUES($1, $2, $3, $4) RETURNING *",
      [
        decklistJson.data[0].id,
        'Campaign: Bioroid',
        decklistJson.data[0].description,
        cards,
      ],
      console.log('done!'))

  } catch (err) {
    console.log(err.message);
    console.log('I broke somehow in Architects creation Function');
  }
}
// 14 - The Foundry -- 66674
const createFoundry = async () => {
  try {
    const decklist = await fetch('https://netrunnerdb.com/api/2.0/public/decklist/66674');
    const decklistJson = await decklist.json();
    const cards = [];
    for (let ob in decklistJson.data[0].cards) {
      // console.log(`${ob} -- ${decklistJson.data[0].cards[ob]}`);
      cards.push([ob, decklistJson.data[0].cards[ob]])
    }
    const deck = await pool.query("INSERT INTO decks(deck_code, deck_name, deck_description, cards) VALUES($1, $2, $3, $4) RETURNING *",
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
// 15 - Jinteki -- 66682
const createJinteki = async () => {
  try {
    const decklist = await fetch('https://netrunnerdb.com/api/2.0/public/decklist/66682');
    const decklistJson = await decklist.json();
    const cards = [];
    for (let ob in decklistJson.data[0].cards) {
      // console.log(`${ob} -- ${decklistJson.data[0].cards[ob]}`);
      cards.push([ob, decklistJson.data[0].cards[ob]])
    }
    const deck = await pool.query("INSERT INTO decks(deck_code, deck_name, deck_description, cards) VALUES($1, $2, $3, $4) RETURNING *",
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
// 16 - Nisei -- 66708
const createNisei = async () => {
  try {
    const decklist = await fetch('https://netrunnerdb.com/api/2.0/public/decklist/66708');
    const decklistJson = await decklist.json();
    const cards = [];
    for (let ob in decklistJson.data[0].cards) {
      // console.log(`${ob} -- ${decklistJson.data[0].cards[ob]}`);
      cards.push([ob, decklistJson.data[0].cards[ob]])
    }
    const deck = await pool.query("INSERT INTO decks(deck_code, deck_name, deck_description, cards) VALUES($1, $2, $3, $4) RETURNING *",
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
// 17 - Blue Sun -- 66677
const createBlueSun = async () => {
  try {
    const decklist = await fetch('https://netrunnerdb.com/api/2.0/public/decklist/66677');
    const decklistJson = await decklist.json();
    const cards = [];
    for (let ob in decklistJson.data[0].cards) {
      // console.log(`${ob} -- ${decklistJson.data[0].cards[ob]}`);
      cards.push([ob, decklistJson.data[0].cards[ob]])
    }
    const deck = await pool.query("INSERT INTO decks(deck_code, deck_name, deck_description, cards) VALUES($1, $2, $3, $4) RETURNING *",
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
// 18 - Weyland -- 66678
const createWeyland = async () => {
  try {
    const decklist = await fetch('https://netrunnerdb.com/api/2.0/public/decklist/66678');
    const decklistJson = await decklist.json();
    const cards = [];
    for (let ob in decklistJson.data[0].cards) {
      // console.log(`${ob} -- ${decklistJson.data[0].cards[ob]}`);
      cards.push([ob, decklistJson.data[0].cards[ob]])
    }
    const deck = await pool.query("INSERT INTO decks(deck_code, deck_name, deck_description, cards) VALUES($1, $2, $3, $4) RETURNING *",
      [
        decklistJson.data[0].id,
        'Everything Is Advanceable',
        decklistJson.data[0].description,
        cards,
      ],
      console.log('done!'))

  } catch (err) {
    console.log(err.message);
    console.log('I broke somehow in Builder creation Function');
  }
}
// 19 - Spark -- 66709
const createSpark = async () => {
  try {
    const decklist = await fetch('https://netrunnerdb.com/api/2.0/public/decklist/66709');
    const decklistJson = await decklist.json();
    const cards = [];
    for (let ob in decklistJson.data[0].cards) {
      // console.log(`${ob} -- ${decklistJson.data[0].cards[ob]}`);
      cards.push([ob, decklistJson.data[0].cards[ob]])
    }
    const deck = await pool.query("INSERT INTO decks(deck_code, deck_name, deck_description, cards) VALUES($1, $2, $3, $4) RETURNING *",
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
// 20 - Sync -- 66680
const createSync = async () => {
  try {
    const decklist = await fetch('https://netrunnerdb.com/api/2.0/public/decklist/66680');
    const decklistJson = await decklist.json();
    const cards = [];
    for (let ob in decklistJson.data[0].cards) {
      // console.log(`${ob} -- ${decklistJson.data[0].cards[ob]}`);
      cards.push([ob, decklistJson.data[0].cards[ob]])
    }
    const deck = await pool.query("INSERT INTO decks(deck_code, deck_name, deck_description, cards) VALUES($1, $2, $3, $4) RETURNING *",
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
  await createArchitects();
  await createFoundry();
  await createJinteki();
  await createNisei();
  await createBlueSun();
  await createWeyland();
  await createSpark();
  await createSync();
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
  await createArchitects();
  await createFoundry();
  await createJinteki();
  await createNisei();
  await createBlueSun();
  await createBuilder();
  await createSpark();
  await createSync();
}

// createAllCorps();
// createAll();
updateDeck();