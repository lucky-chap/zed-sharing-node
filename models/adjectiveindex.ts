'use strict';

import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class AdjectiveIndex extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AdjectiveIndex.init({
    currentIndex: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'AdjectiveIndex',
  });
  return AdjectiveIndex;
};