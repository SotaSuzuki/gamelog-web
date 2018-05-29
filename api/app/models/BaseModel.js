const { connection, escape } = require('./../db')

class BaseModel {
  constructor (attributes) {
    this.values = attributes
    this.defaultValues = Object.assign({}, attributes)
  }

  get json () {
    return this.values
  }

  // NOTE 使うときにコメントイン＆検証
  // isChanged (attr) {
  //   return this.defaultValues[attr] === this.values[attr]
  // }

  static get tableName () {
    return this.name.toLowerCase() + 's'
  }

  static get primaryKeys () {
    return ['id']
  }

  static getPrimaryIds (payload) {
    const primaryKeys = this.primaryKeys
    return primaryKeys.reduce((ids, key) => {
      ids[key] = escape(payload[key])
      return ids
    }, {})
  }

  static find (payload) {
    const primaryIds = this.getPrimaryIds(payload)
    const whereStatements = Object.keys(primaryIds)
      .map((key) => `${key} = ${primaryIds[key]}`)

    return new Promise((resolve, reject) => {
      connection.query(`
        SELECT * FROM ${this.tableName}
        WHERE ${whereStatements.join(' AND ')} LIMIT 1
      `, (err, rows) => {
        if (err) {
          reject(err)
          return
        }
        resolve(new this(rows[0]))
      })
    })
  }
}

module.exports = BaseModel
