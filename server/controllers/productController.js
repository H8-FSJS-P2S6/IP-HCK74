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
      const {
        page = 1,
        limit = 5,
        sortBy = "id",
        order = "ASC",
        category,
        name,
      } = req.query;

      // Set pagination
      const offset = (page - 1) * limit;

      // Create filtering conditions
      const where = {};
      if (category) {
        where.categoryId = category; // Assuming you're filtering by category ID
      }
      if (name) {
        where.name = { [Op.iLike]: `%${name}%` }; // Case-insensitive name filtering
      }

      // Fetch products with sorting, filtering, and pagination
      const product = await Product.findAndCountAll({
        where,
        include: {
          model: Category,
        },
        limit: parseInt(limit),
        offset: parseInt(offset),
        order: [[sortBy, order]], // Sorting
      });

      // Respond with data and meta info for pagination
      res.status(200).json({
        totalItems: product.count,
        totalPages: Math.ceil(product.count / limit),
        currentPage: parseInt(page),
        products: product.rows,
      });
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
