const { DataTypes } = require('sequelize');
const sequelize = require('./db');

const Order = sequelize.define('Order', {
  'id': {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  'name': {
    type: DataTypes.STRING,
    allowNull: false
  },
  'date': {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false
  },
  'customerId': {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

/*
setTimeout(() => {
  sequelize.sync()
    .then(() => console.log('Order table created'))
    .catch(error => console.log('Error creating Order table: ', error));
}, 8000);
*/

async function initialize() {
  await sequelize.sync();
}

async function getAll() {
  await initialize();
  return Order.findAll();
}

async function getById(id) {
  await initialize();
  return Order.findByPk(id);
}

function save(order) {
  return Order.upsert(order);
}

function removeById(id) {
  return Order.destroy({
    where: {
      id
    }
  });
}

function getByCustomerId(customerId) {
  return Order.findAll({
    where: {
      customerId
    }
  });
}

module.exports = {
  getAll,
  getById,
  save,
  removeById,
  getByCustomerId
};
