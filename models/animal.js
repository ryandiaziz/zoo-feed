'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class animal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      animal.belongsTo(models.classType);
      animal.belongsTo(models.habitat);
      animal.belongsToMany(models.food, { through: models.animalFood });
    }
  }
  animal.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    sex: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    classTypeId: DataTypes.INTEGER,
    habitatId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'animal',
  });
  return animal;
};