const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize('a4_todo', 'root', 'root123', {
  host: '127.0.0.1',
  dialect: 'mysql'
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('./userModel') (sequelize, DataTypes);
db.products = require('./productModel')(sequelize, DataTypes);

// db.users.hasMany(db.todos)
// db.todos.belongsTo(db.users)

module.exports = db;