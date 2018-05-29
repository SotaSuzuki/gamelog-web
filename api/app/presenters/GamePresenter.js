const BasePresenter = require('./BasePresenter')
const Game = require('../models/Game')
const Maker = require('../models/Maker')

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
        const makerId = game.json.maker_id
        const maker = await Maker.find({ id: makerId })
        const genres = await Game.findGenres({ id })
        const platforms = await Game.findPlatforms({ id })
        response.game = game.json
        response.game.maker = maker.json
        response.game.genres = genres
        response.game.platforms = platforms
        resolve(response)
      } catch (err) {
        reject(err)
      }
    })
  }
}

module.exports = GamePresenter
