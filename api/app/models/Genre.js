const BaseModel = require('./BaseModel')

class Genre extends BaseModel {
  static primaryKeys () {
    return ['code']
  }
}

module.exports = Genre
