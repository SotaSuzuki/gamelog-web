const mysql = require('mysql')

const client = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'gamelog_development',
})

client.connect()

module.exports = {
  connection: client,
  escape: mysql.escape,
}
