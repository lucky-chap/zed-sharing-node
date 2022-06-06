'use strict';

import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class NounList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  NounList.init(
    {
      word: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'NounList',
    },
  );
  return NounList;
};
