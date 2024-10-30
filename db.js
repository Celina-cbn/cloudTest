const { Sequelize } = require('sequelize')

// Database
const sequelize = new Sequelize(
  // TODO: database connection string
  // creer sa base sur render et se connecté
  process.ENV.DATABASE_URL,
  {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
