CREATE DATABASE netrunnerlegacy;

CREATE TABLE cards(
  card_id SERIAL PRIMARY KEY,
  advancement_cost integer,
  agenda_points integer,
  base_link integer,
  code text NOT NULL,
  cost integer,
  deck_limit integer,
  faction_code faction,
  faction_cost integer,
  flavor text,
  illustrator text,
  influence_limit integer,
  keywords text,
  memory_cost integer,
  minimum_deck_size integer,
  pack_code text,
  position integer,
  quantity integer,
  side_code side,
  strength integer,
  stripped_text text,
  stripped_title text,
  full_text text,
  title text,
  trash_cost integer,
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