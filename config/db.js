const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('otp_db', 'root', 'Gdpteam3', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

module.exports = sequelize;
