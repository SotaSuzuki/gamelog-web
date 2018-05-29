const BaseModel = require('./BaseModel')

class Game extends BaseModel {
  // afterSave () {
  //   super()
  //   if (this.isChanged("name")) {
  //     ////////
  //   }
  // }
}

// console.log(game)
//
// {
//   previousValues: {
//     id: 10,
//     name: 'DRAGON QUESET XI',
//   },
//   values: {
//     id: 10,
//     name: 'DRAGON QUESET XI',
//   },
//   isNewRecord: false
//   update: function,
//   destroy: function,
//   isChanged: function,
// }
//
// console.log(game.toJSON())
//
// {
//   id: 10,
//   name: 'DRAGON QUEST XI',
// }

// NOTE こうしてもいい
// Game.init({
//   attributes,
//   options,
// })

module.exports = Game
