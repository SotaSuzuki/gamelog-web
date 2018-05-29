const { connection, escape } = require('./../db')
const BaseModel = require('./BaseModel')

class Game extends BaseModel {
  static findGenres (payload) {
    const relation = {
      tableName: 'games_genres',
      keys: ['game_id', 'genre_code'],
    }
    const target = {
      tableName: 'genres',
      key: 'code',
    }

    return this._findByRelation({ relation, target }, payload)
  }

  static findPlatforms (payload) {
    const relation = {
      tableName: 'games_platforms',
      keys: ['game_id', 'platform_id'],
    }
    const target = {
      tableName: 'platforms',
      key: 'id',
    }

    return this._findByRelation({ relation, target }, payload)
  }

  static _findByRelation ({ relation, target }, payload) {
    const id = this.getPrimaryIds(payload).id
    return new Promise((resolve, reject) => {
      connection.query(`
        SELECT * FROM ${relation.tableName}
        WHERE ${relation.keys[0]} = ${id} LIMIT 10
      `, (err, rows) => {
        if (err) {
          reject(err)
          return
        }
        const whereStatements = rows.map((row) => {
          return `${target.key} = ${escape(row[relation.keys[1]])}`
        })
        connection.query(`
          SELECT * FROM ${target.tableName}
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
