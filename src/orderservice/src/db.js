const  { Sequelize } = require('sequelize');

const sequelize = new Sequelize('microservices-test', 'root', 'my-secret-pw', {
  host: process.env.DB_HOST || 'localhost',
  dialect: 'mariadb',
  dialectOptions: {
    allowPublicKeyRetrieval: true
  }
});

module.exports = sequelize;