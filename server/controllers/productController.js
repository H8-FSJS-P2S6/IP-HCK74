const { Op, where } = require("sequelize");
const { Product, User, Category } = require("../models");

class productController {
  static async createProduct(req, res, next) {
    try {
      const { title, description, imgUrl, price, categoryId, userId } =
        req.body;
      const product = await Product.create({
        title,
        description,
        imgUrl,
        price,
        categoryId,
        userId,
      });
      res.status(201).json(product);
    } catch (error) {
      next(error);
    }
  }

  static async findProduct(req, res, next) {
    try {
      const product = await Product.findAll({
        include: {
          model: Category,
        },
      });
      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  }

  static async findProductById(req, res, next) {
    try {
      const { id } = req.params;
      const product = await Product.findByPk(+id);
      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  }

  static async editProduct(req, res, next) {
    try {
      const { id } = req.params;
      const { title, description, imgUrl, price, categoryId, userId } =
        req.body;
      const dataId = await Product.findByPk(id);
      if (!dataId) {
        throw { name: "NotFound" };
      }

      const data = await dataId.update(
        {
          title,
          description,
          imgUrl,
          price,
          categoryId,
          userId,
        },
        {
          where: {
            id: id,
          },
          returning: true,
        }
      );

      res.status(200).json({ messsage: "Product has been updated" });
    } catch (error) {
      next(error);
    }
  }

  static async deleteProduct(req, res, next) {
    try {
      const { id } = req.params;
      const product = await Product.findByPk(id);

      if (!product) {
        throw {
          name: "NotFound",
        };
      } else {
        await Product.destroy({
          where: {
            id: id,
          },
        });
        res.status(200).json({
          message: `Id ${id} success to delete`,
        });
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = productController;
