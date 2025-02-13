const Sequelize = require('sequelize');
const connection = require('../database/connection');

const Account = connection.sequelize.define(
  'account',
  {
    uuid: {
      type: Sequelize.UUID,
      primaryKey: true
    },
    username: {
      type: Sequelize.STRING(45),
      unique: true,
    },
    password: {
      type: Sequelize.STRING(60)
    },
    role: {
      type: Sequelize.INTEGER
    }
  }
);

module.exports = Account;