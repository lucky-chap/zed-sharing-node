'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const sequelize_1 = require("sequelize");
const basename = (0, path_1.basename)(__filename);
const env = process.env.NODE_ENV || 'development';
// eslint-disable-next-line @typescript-eslint/no-var-requires
// the models folder is now located in the dist folder after build
// you now have to move up from the models folder, and move up from the dist folder
// only then can you access the config file in the config folder
const config = require(__dirname + '/../../config/config.js')[env];
let sequelize;
if (config.use_env_variable) {
    sequelize = new sequelize_1.Sequelize(process.env[config.use_env_variable], config);
}
else {
    sequelize = new sequelize_1.Sequelize(config.database, config.username, config.password, config);
}
const db = {
    sequelize: sequelize,
    Sequelize: sequelize_1.Sequelize,
};
(0, fs_1.readdirSync)(__dirname)
    .filter(file => {
    return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
})
    .forEach(file => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const model = require((0, path_1.join)(__dirname, file))(sequelize, sequelize_1.DataTypes);
    db[model.name] = model;
});
Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});
exports.default = db;
//# sourceMappingURL=index.js.map