# Tables

## users

has many game_list
has many reviews

- id (PK, AI)
- name
- icon_url
- review_count
- fav count
- follower_count
- following_count
- created_at

## favs

belongs to users
belongs to games

- user_id (PK)
- game_id (PK)
- created_at

## makers

has many games

- id (PK, AI)
- name
- icon_url
- game_count
- created_at
- updated_at

## genres

belongs to games

- code (PK, AI)
- game_count

## games_genres

belongs to games
belongs to genres

- game_id (FK)
- ganre_code (FK)

## games

belongs to a maker
has many genres
has many reviews

- id (PK, AI)
- maker_id (FK)
<!-- - image_url -->
- title
- description
- review_count
- release_date
- created_at
- updated_at

## platforms

belongs to games

- code (PK, AI)
- name

## games_platforms

belongs to games
belongs to platforms

- game_id (FK)
- platform_code (FK)

## reviews

belongs to a game
belongs to a user

- id (PK, AI)
- game_id (FK)
- user_id (FK)
- body
- published_at
- updated_at

---

## Drafts

### series

has many games

### images or photos

belongs to games

- id (PK, AI)
- game_id (FK)
- referenceFrom
- referenceName
