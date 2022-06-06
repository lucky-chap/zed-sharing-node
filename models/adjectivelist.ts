'use strict';

import { Model } from 'sequelize';
module.exports = (sequelize, DataTypes) => {
  class AdjectiveList extends Model {
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
    word: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AdjectiveList',
  });
  return AdjectiveList;
};