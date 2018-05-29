## Create tables

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

CREATE TABLE makers (
  id INT(10) AUTO_INCREMENT,
  name VARCHAR(128) NOT NULL,
  image_url VARCHAR(255),
  game_count INT(10) UNSIGNED,
  created_at DATETIME,
  updated_at DATETIME,
  PRIMARY KEY(id)
);

CREATE TABLE genres (
  code VARCHAR(63) NOT NULL,
  name VARCHAR(128) NOT NULL,
  created_at DATETIME,
  updated_at DATETIME,
  PRIMARY KEY(code)
);

CREATE TABLE platforms (
  id INT(10) AUTO_INCREMENT,
  name VARCHAR(128) NOT NULL,
  PRIMARY KEY(id)
);

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

then run below

```sql
CREATE TABLE games_genres (
  game_id INT(10),
  genre_code VARCHAR(63) NOT NULL,
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

## Insert game data

to display `/games/:id`

```sql
INSERT INTO makers (name)
  VALUES ('スクウェア');

INSERT INTO games (title, description)
  VALUES ('Final Fantasy 5', 'ジョブチェンジでキャラクターを自由にカスタマイズしよう');

INSERT INTO platforms (id, name)
  VALUES (1, 'SFC')

INSERT INTO genres (code, name)
  VALUES ('rpg', 'ロールプレイング');

INSERT INTO games_platforms (game_id, platform_id)
  VALUES (1, 1)

INSERT INTO games_genres (game_id, genre_code)
  VALUES (1, 'rpg');
```
