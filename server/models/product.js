"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.User, { foreignKey: "userId" });
      Product.belongsTo(models.Category, { foreignKey: "categoryId" });
    }
  }
  Product.init(
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
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "price is required",
            args: true,
          },
          notEmpty: {
            msg: "price is required",
            args: true,
          },
        },
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "categoryId is required",
            args: true,
          },
          notEmpty: {
            msg: "categoryId is required",
            args: true,
          },
        },
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "userId is required",
            args: true,
          },
          notEmpty: {
            msg: "userId is required",
            args: true,
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
