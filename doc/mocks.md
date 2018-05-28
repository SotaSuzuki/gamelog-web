## Create game data

to display `/games/:id`

```sql
INSERT INTO makers (name)
  VALUES ('スクウェア');

INSERT INTO games (title, description)
  VALUES ('Final Fantasy 5', 'ジョブチェンジでキャラクターを自由にカスタマイズしよう');

INSERT INTO genres (code, name)
  VALUES ('rpg', 'ロールプレイング');

INSERT INTO games_genres (game_id, genre_code)
  VALUES (1, 'rpg');
```
