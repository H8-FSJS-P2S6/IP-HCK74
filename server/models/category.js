"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Category.hasMany(models.Product, { foreignKey: "categoryId" });
    }
  }
  Category.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "title is required",
            args: true,
          },
          notEmpty: {
            msg: "title is required",
            args: true,
          },
        },
      },
      imgUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "imgUrl is required",
            args: true,
          },
          notEmpty: {
            msg: "imgUrl is required",
            args: true,
          },
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "description is required",
            args: true,
          },
          notEmpty: {
            msg: "description is required",
            args: true,
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Category",
    }
  );
  return Category;
};
