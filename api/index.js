const db = require('../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
  const visitor = await db.query(escape`
      SELECT *
      FROM test
    `)
  const count = await db.query(escape`
      SELECT COUNT(*)
      FROM profiles
    `)
  console.log(visitor, count)
  res.status(200).json({ visitor, visitCount })
}