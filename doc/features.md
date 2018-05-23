# gamelog

- login
- review games
- search games
- search reviews
- manage my game list
  - playing
  - finish
  - want playing
- follow other user
- activity (timeline)
- user profile

## Resources

### User

- permanent resources.
- attributes
  - id
  - name
  - email
  - password
  - iconUrl
  - bio
  - games

### Token

- impermanent resources.
- JWT
- attributes
  - userId
  - expiredAt
  - ipAddress?
  - userAgent?

## Features

### Login

#### Front

GET /signin
  -> Login Form
    action: '/signin'
    method: 'POST'

POST /signin
  -> Login Process
  -> Login Form / Redirect to Top

POST /signout
  -> Redirect to Top

Signout Button
  action: '/signout'
  method: 'POST'

#### API

REST /users (POST)
REST /tokens (POST)

### User Account

#### Front

GET /signup
  -> Register Form
    action: '/signup'
    method: 'POST'

POST /signup
  -> Register Process
  -> Send Mail

GET /leave
  -> Show confirmation message

POST /leave
  -> Destroy user
  -> Redirect to top

### Email Verification

#### Front

GET /verify/:emailVerificationToken
  -> Show result

#### API

REST /verify (POST)

### Find Game

- search

#### Front

GET /
  -> Search game
  -> Show search result

#### API

REST /search (GET)

### View Game

- review list on another resources
- permanently url

#### Front

GET /games/:id
  -> Show overview
  -> Show reviews

POST /games/:id
  -> Add game to own game list

#### API

REST /games/:id (GET)
REST /users/:id/games (POST)

### Write Review of Game

#### Front

Write Review Button
  action: '/games/:id/reviews/new'
  method: 'GET'

GET /games/:id/reviews/new
  -> Review form
     action: '/games/:id/reviews'
     method: 'POST'

POST /games/:id/reviews
  -> Post new review
  -> Redirect to complete page or show error

Edit Button
  action: '/reviews/:id'
  method: 'PUT'

Delete Button
  action: '/reviews/:id'
  method: 'DELETE'

#### API

REST /reviews

### Manage Game List

- state
  - playing
  - played
  - interested in

#### Front

GET /users/:id/gemes
  -> Show own game list

#### API

GET /self/game_list or GET /self/games
POST /games/:id/fav
DELETE /games/:id/fav

### Manage Reviews

#### Front

GET /users/:id/reviews
  -> Show own review list

Edit Button
  action: '/reviews/:id/edit'
  method: 'GET'
    -> PUT '/reviews/:id'

Delete Button
  action: '/reviews/:id'
  method: 'DELETE'

#### API

REST /reviews/:id (PUT, DELETE)

### Follow user

#### Front

Follow Button
  action: '/users/:id/follow'
  domain: 'api'
  method: 'POST'

Unfollow Button
  action: '/users/:id/follow'
  domain: 'api'
  method: 'DELETE'

#### API

REST /users/:id/follow (POST, DELETE)

### View Activity

#### Front

GET /users/:id/activity
  -> Show follow user's activity
  -> Show self activity
  -> Show Analytics

#### API

REST /users/:id/activity (GET)
