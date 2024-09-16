const { where } = require("sequelize");
const { category, User, Category } = require("../models");

class categoryController {
  static async createCategory(req, res, next) {
    try {
      const { title, imgUrl, description } = req.body;
      const category = await Category.create({
        title,
        imgUrl,
        description,
      });

      res.status(201).json(category);
    } catch (error) {
      next(error);
    }
  }

  static async findAllCategory(req, res, next) {
    try {
      const category = await Category.findAll();
      res.status(200).json(category);
    } catch (error) {
      next(error);
    }
  }

  static async findCategoryById(req, res, next) {
    try {
      const { id } = req.params;
      const category = await Category.findByPk(+id);
      res.status(200).json(category);
    } catch (error) {
      next(error);
    }
  }

  static async editCategory(req, res, next) {
    try {
      const { id } = req.params;
      const { title, imgUrl, description } = req.body;
      const category = await Category.update(
        {
          title,
          imgUrl,
          description,
        },
        {
          where: {
            id: id,
          },
        }
      );
      res.status(200).json(category);
    } catch (error) {
      next(error);
    }
  }

  static async deleteCategory(req, res, next) {
    try {
      const { id } = req.params;

      const category = await Category.findByPk(id);

      if (!category) {
        throw { name: "NotFound", message: `Category with ID ${id} not found` };
      }

      await Category.destroy({ where: { id } });

      res.status(200).json({
        message: `Category with ID ${id} successfully deleted`,
      });
    } catch (error) {
      next(error); // Pass the error to the next middleware (error handler)
    }
  }
}

module.exports = categoryController;
