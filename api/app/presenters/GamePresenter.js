const BasePresenter = require('./BasePresenter')
const Game = require('../models/Game')
const Genre = require('../models/Genre')
const Maker = require('../models/Maker')
const Platform = require('../models/Platform')

class GamePresenter extends BasePresenter {
  constructor ({ id }) {
    super()
    this.id = id
  }

  render () {
    return new Promise(async (resolve, reject) => {
      try {
        let response = {}
        const id = this.id
        const game = await Game.find({ id })
        const maker = await Maker.find({ id: game.maker_id })
        const genreCode = ['rpg']
        const platformIds = [1]
        const genre = await Genre.find({ code: genreCode[0] })
        const platform = await Platform.find({ id: platformIds[0] })
        response.game = game
        response.game.maker = maker
        response.game.genres = [genre]
        response.game.platforms = [platform]
        resolve(response)
      } catch (err) {
        reject(err.message)
      }
    })
  }
}

module.exports = GamePresenter
