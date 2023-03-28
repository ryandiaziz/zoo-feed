const { animalFood, animal, food } = require("../models");
class AnimalFoodController {
  static async getAnimalFood(req, res) {
    try {
      let result = await animalFood.findAll({
        include: [animal, food],
      });

      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }
  static async addFA(req, res) {
    try {
      const foodId = +req.params.id;
      const { animalId } = req.body;
      let result = await animalFood.create({
        animalId: +animalId,
        foodId: +foodId,
      });

      res.redirect(`foods/${foodId}`);
    } catch (err) {
      res.json(err);
    }
  }

  static async addPageFA(req, res) {
    try {
      const id = +req.params.id;
      let animals = await animal.findAll();
      let foods = await food.findByPk(id);
      res.render("animalfood/foodanimal.ejs", { animals, foods });
    } catch {
      res.json(err);
    }
  }

  static async addAF(req, res) {
    try {
      const animalId = +req.params.id;
      const { foodId } = req.body;
      let result = await animalFood.create({
        animalId: +animalId,
        foodId: +foodId,
      });

      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }

  static async addPageAF(req, res) {
    try {
    } catch {}
  }
}

module.exports = AnimalFoodController;
