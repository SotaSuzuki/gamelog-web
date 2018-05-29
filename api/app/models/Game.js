const { connection, escape } = require('./../db')
const BaseModel = require('./BaseModel')

class Game extends BaseModel {
  static findGenres (payload) {
    const relationTableName = 'games_genres'
    const genreTableName = 'genres'
    const id = this.getPrimaryIds(payload).id
    return new Promise((resolve, reject) => {
      connection.query(`
        SELECT * FROM ${relationTableName}
        WHERE game_id = ${id} LIMIT 10
      `, (err, rows) => {
        if (err) {
          reject(err)
          return
        }
        const whereStatements = rows.map((row) => `code = ${escape(row.genre_code)}`)
        connection.query(`
          SELECT * FROM ${genreTableName}
          WHERE ${whereStatements.join(' OR ')} LIMIT 10
        `, (err, rows) => {
          if (err) {
            reject(err)
            return
          }
          resolve(rows)
        })
      })
    })
  }
}

module.exports = Game
