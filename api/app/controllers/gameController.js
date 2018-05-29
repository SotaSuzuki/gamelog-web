const GamePresenter = require('../presenters/GamePresenter')

exports.show = async (req, res) => {
  const id = req.params.id
  const gamePresenter = new GamePresenter({ id })
  const game = await gamePresenter.render()
    .catch((err) => console.log(err.message))
  res.json(game)
}
