CREATE DATABASE netrunnerlegacy;

CREATE TABLE cards(
  card_id SERIAL PRIMARY KEY,
  code text NOT NULL,
  cost integer,
  deck_limit integer,
  faction_code faction,
  faction_cost integer,
  flavor text,
  illustrator text,
  keywords text,
  pack_code text,
  position integer,
  quantity integer,
  side_code side,
  stripped_text text,
  stripped_title text,
  full_text text,
  title text,
  type_code text,
  uniqueness boolean
);

CREATE TABLE decks(
  deck_id SERIAL PRIMARY KEY,
  deck_code integer,
  deck_name text,
  deck_description text,
  cards text[]
)