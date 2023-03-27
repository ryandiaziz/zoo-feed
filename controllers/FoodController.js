const { food, animal, animalFood } = require("../models");

class FoodController {
  static async getFood(req, res) {
    try {
      let result = await food.findAll({
        include: [animal],
      });
      res.render("foods/index.ejs", { result });
    } catch (error) {
      res.json(error);
    }
  }

  static async addPage(req, res) {
    try {
      let animals = await animal.findAll();
      res.render("foods/addPage.ejs", { animals });
    } catch (error) {
      res.json(error);
    }
  }

  static async add(req, res) {
    try {
      const { name, type, animalId } = req.body;
      const resultfood = await food.create({
        name,
        type,
      });

      const foodId = resultfood.id;
      const resultanimalfood = await animalFood.create({
        animalId: animalId,
        foodId: foodId,
      });

      res.redirect('/foods')
    } catch (error) {
      res.json(error);
    }
  }

  static async delete(req, res) {
    try {
      const id = +req.params.id;
      const result = await food.destroy({
        where: { id },
      });
      res.redirect('/foods')
    } catch (error) {
      res.json(error);
    }
  }

  static async updatePage(req, res) {
    try {
        let animals = await animal.findAll();
        res.render("foods/addPage.ejs", { animals });
      } catch (error) {
        res.json(error);
      }

  }
  static async update(req, res) {
    try {
      const id = Number(req.params.id);
      const { name, type } = req.body;

      const result = await food.update(
        {
          name,
          type,
        },
        {
          where: { id },
        }
      );
      res.redirect('/foods')
    } catch (error) {
      res.json(error);
    }
  }

  static async detailPage(req, res) {
    try {
        let animals = await animal.findAll();
        res.render("foods/detailPage.ejs", { animals });
      } catch (error) {
        res.json(error);
      }
    }


}

module.exports = FoodController;
