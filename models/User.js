'use strict';
const db = require('../config/dbConnect')
const sequelize = db.sequelize;
const Sequelize = db.Sequelize;

let User = sequelize.define('user', {
  id:{
      type: Sequelize.INTEGER(11),
      primaryKey: true
  },
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  fullName: Sequelize.STRING,
  birthDay: Sequelize.DATE,
  gender:  Sequelize.BOOLEAN
});

module.exports = User;