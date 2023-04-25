const Sequelize = require('sequelize');
const pkg = require('../../package.json');

const databaseName = pkg.name + (process.env.NODE_ENV === 'test' ? '-test' : '');

const config = {
  logging: false
};

if (process.env.LOGGING === 'true') {
  delete config.logging;
}

// Configuration for the second database (db2)
const db2 = new Sequelize(
  process.env.DATABASE_URL_2 || 'postgres://grace_buster_user:G5lyb7C97MWexfS5xxtHad75DiUcEipn@dpg-cgvuco1euhlhlbi4nhkg-a/grace_buster',
  config
);

module.exports = {
  db2
};
