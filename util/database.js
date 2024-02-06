const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodedb', 'nodeUser', 'nodecomplete', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;