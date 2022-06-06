'use strict';

import { readdirSync } from 'fs';
import { basename as _basename, join } from 'path';
import { Sequelize, DataTypes } from 'sequelize';

const basename = _basename(__filename);
const env = process.env.NODE_ENV || 'development';
// eslint-disable-next-line @typescript-eslint/no-var-requires
// the models folder is now located in the dist folder after build
// you now have to move up from the models folder, and move up from the dist folder
// only then can you access the config file in the config folder
const config = require(__dirname + '/../../config/config.ts')[env];

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

const db = {
  sequelize: sequelize,
  Sequelize: Sequelize,
};

readdirSync(__dirname)
  .filter(file => {
    return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
  })
  .forEach(file => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const model = require(join(__dirname, file))(sequelize, DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

export default db;
