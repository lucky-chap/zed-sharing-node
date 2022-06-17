require('dotenv').config();
const fs = require('fs');

module.exports = {
  development: {
    username: `${process.env.DB_USER}`,
    password: `${process.env.DB_PASSWORD}`,
    database: `${process.env.DB_NAME}`,
    host: `${process.env.DB_HOST}`,
    port: `${process.env.DB_PORT}`,
    dialect: `${process.env.DB_DIALECT}`,
    dialectOptions: {
      ssl: {
        ca: fs.readFileSync(__dirname + '/../ca.crt'),
      },
    },
  },
  test: {
    username: `${process.env.TEST_DB_USER}`,
    password: `${process.env.TEST_DB_PASSWORD}`,
    database: `${process.env.TEST_DB_NAME}`,
    host: `${process.env.TEST_DB_HOST}`,
    dialect: `${process.env.TEST_DB_DIALECT}`,
    port: `${process.env.TEST_DB_PORT}`,
  },
  production: {
    username: `${process.env.PROD_DB_USER}`,
    password: `${process.env.PROD_DB_PASSWORD}`,
    database: `${process.env.PROD_DB_NAME}`,
    host: `${process.env.PROD_DB_HOST}`,
    dialect: `${process.env.PROD_DB_DIALECT}`,
    port: `${process.env.PROD_DB_PORT}`,
  },
};
