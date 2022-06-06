'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class AdjectiveList extends sequelize_1.Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    AdjectiveList.init({
        word: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'AdjectiveList',
    });
    return AdjectiveList;
};
//# sourceMappingURL=adjectivelist.js.map