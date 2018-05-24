const { connection } = require('./../db')

class BaseModel {
  static tableName () {
    return this.name.toLowerCase() + 's'
  }

  static init ({ attributes, options }) {

  }

  static primaryKeys () {
    return ['id']
  }

  static getPrimaryIds (payload) {
    const ids = {}
    const primaryKeys = this.primaryKeys()
    primaryKeys.forEach((key) => {
      ids[key] = payload[key]
    })
    return ids
  }

  static find (payload) {
    const primaryIds = this.getPrimaryIds(payload)
    const whereStatements = []
    Object.keys(primaryIds).forEach((key) => {
      whereStatements.push(`${key} = ${primaryIds[key]}`)
    })
    return new Promise((resolve, reject) => {
      connection.query(`
        SELECT * FROM ${this.tableName()}
        WHERE ${whereStatements.join(' AND ')} LIMIT 1
        `, (err, rows) => {
        if (err) reject(err)
        else resolve(rows[0])
      })
    })
  }
}

module.exports = BaseModel
