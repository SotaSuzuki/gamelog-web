const mysql = require('mysql')

module.exports = () => {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'gamelog_development',
  })

  connection.connect()

  connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
    if (err) {
      throw err
    }
    console.log('rows', rows)
    console.log('The solution is: ', rows[0].solution)
  })

  connection.query(`DELETE FROM games`, (err) => {
    if (err) {
      throw err
    }
    console.log('successfully deleted')
  })

  connection.query(`
    INSERT INTO games (title, description)
      VALUES(
        'Chrono Trigger',
        '楽しいゲーム')`, (err) => {
    if (err) {
      throw err
    }
    console.log('successfully inserted')
  })

  connection.query('SELECT * FROM games', (err, rows) => {
    if (err) {
      throw err
    }
    console.log(`${rows[0].title} selected`)
  })

  connection.end()
}
