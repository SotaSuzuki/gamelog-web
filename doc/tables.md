# Tables

## users

has many game_list
has many reviews

- id (PK, AI)
- name
- bio
- icon_url
- review_count
- fav_count
- follower_count
- following_count
- created_at

```sql
CREATE TABLE users (
  id VARCHAR(63) NOT NULL,
  name VARCHAR(128) NOT NULL,
  bio VARCHAR(1024),
  icon_url VARCHAR(255),
  review_count INT(10) UNSIGNED,
  fav_count INT(10) UNSIGNED,
  follower_count INT(10) UNSIGNED,
  following_count INT(10) UNSIGNED,
  created_at DATETIME,
  updated_at DATETIME,
  PRIMARY KEY(id)
);
```

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
- image_url
- game_count
- created_at
- updated_at

```sql
CREATE TABLE makers (
  id INT(10) AUTO_INCREMENT,
  name VARCHAR(128) NOT NULL,
  image_url VARCHAR(255),
  game_count INT(10) UNSIGNED,
  created_at DATETIME,
  updated_at DATETIME,
  PRIMARY KEY(id)
);
```

## genres

belongs to games

- code (PK, AI)
- name
- created_at
- updated_at

```sql
CREATE TABLE genres (
  code VARCHAR(63) NOT NULL,
  name VARCHAR(128) NOT NULL,
  created_at DATETIME,
  updated_at DATETIME,
  PRIMARY KEY(code)
);
```

## games_genres

belongs to games
belongs to genres

- game_id (FK)
- ganre_code (FK)

```sql
CREATE TABLE games_genres (
  game_id INT(10),
  ganre_code VARCHAR(63) NOT NULL,
  PRIMARY KEY(game_id, genre_code),
  FOREIGN KEY(game_id)
    REFERENCES games(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE,
  FOREIGN KEY(genre_code)
    REFERENCES genres(code)
    ON UPDATE CASCADE
    ON DELETE CASCADE
);
```

## games

belongs to a maker
has many genres
has many reviews

- id (PK, AI)
- maker_id (FK)
- image_url
- title
- description
- review_count
- release_date
- created_at
- updated_at

```sql
CREATE TABLE games (
  id INT(10) AUTO_INCREMENT,
  title VARCHAR(128) NOT NULL,
  image_url VARCHAR(255),
  description VARCHAR(1024) NOT NULL,
  maker_id INT(10),
  release_date DATE,
  review_count INT(10) UNSIGNED,
  created_at DATETIME,
  updated_at DATETIME,
  PRIMARY KEY(id),
  FOREIGN KEY(maker_id)
    REFERENCES makers(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE
);
```

## platforms

belongs to games

- id (PK, AI)
- name

```sql
CREATE TABLE platforms (
  id INT(10) AUTO_INCREMENT,
  name VARCHAR(128) NOT NULL,
  PRIMARY KEY(id)
);
```

## games_platforms

belongs to games
belongs to platforms

- game_id (FK)
- platform_id (FK)

```sql
CREATE TABLE games_platforms (
  game_id INT(10),
  platform_id INT(10),
  PRIMARY KEY(game_id, platform_id),
  FOREIGN KEY(game_id)
    REFERENCES games(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE,
  FOREIGN KEY(platform_id)
    REFERENCES platforms(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE
);
```

## reviews

belongs to a game
belongs to a user

- id (PK, AI)
- game_id (FK)
- user_id (FK)
- body
- published_at
- updated_at

```sql
CREATE TABLE reviews (
  id INT(10) AUTO_INCREMENT,
  game_id INT(10),
  user_id VARCHAR(63),
  body TEXT,
  created_at DATETIME,
  updated_at DATETIME,
  PRIMARY KEY(id),
  FOREIGN KEY(game_id)
    REFERENCES games(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE,
  FOREIGN KEY(user_id)
    REFERENCES users(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE
);
```

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
