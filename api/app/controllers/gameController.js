const Game = require('../models/Game')
const Genre = require('../models/Genre')
const Maker = require('../models/Maker')
const Platform = require('../models/Platform')

exports.show = async (req, res) => {
  const id = req.params.id

  try {
    let responseData = {}

    const game = await Game.find({ id })
    const maker = await Maker.find({ id: game.maker_id })
    // NOTE games_genres から取ってきたいが、難しそうなので一旦決め打ちしてる
    // あと、 Genre.findAll で複数とってきたいところ
    // そしたら変数名も変更する (genre -> genres, platform -> platforms)
    const genreCodes = ['rpg']
    const genre = await Genre.find({ code: genreCodes[0] })
    // NOTE 上に同じ
    const platformIds = [1]
    const platform = await Platform.find({ id: platformIds[0] })

    responseData.game = game
    responseData.game.maker = maker
    responseData.game.genres = [genre]
    responseData.game.platforms = [platform]
    // NOTE game.reviews もおいおい必要
    // [{body<string>, author{}, publishedAt<string>}]

    res.json(responseData)
  } catch (err) {
    res.json({ message: err.message })
  }
}
