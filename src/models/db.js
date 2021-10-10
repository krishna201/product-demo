const dbConfig = require('../config/db.config')

const Sequelize = require('sequelize')
const sequelizedata = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
})
const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelizedata

db.CategoryCollection = require('./category')(sequelizedata, Sequelize)
db.ProductCollection = require('./product')(sequelizedata, Sequelize)
db.CategoryCollection.hasMany(db.ProductCollection, { foreignKey: 'category_id' })
db.ProductCollection.belongsTo(db.CategoryCollection, { foreignKey: 'category_id' })
module.exports = db
