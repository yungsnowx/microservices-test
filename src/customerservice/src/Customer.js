const { DataTypes } = require("sequelize");
const sequelize = require("./db");

const Customer = sequelize.define("Customer", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dateOfBirth: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

async function initialize() {
  await sequelize.sync();
}

async function getAll() {
  await initialize();
  return Customer.findAll();
}

async function getById(id) {
  await initialize();
  return Customer.findByPk(id);
}

function save(customer) {
  return Customer.upsert(customer);
}

function removeById(id) {
  return Customer.destroy({
    where: {
      id,
    },
  });
}

module.exports = {
  getAll,
  getById,
  save,
  removeById,
};
