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

      res.redirect(`/foods/detail/${foodId}`);
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

  static async deleteFA(req, res) {
    try {
      const foodId = +req.params.id1;
      const animalId = +req.params.id2;

      let resultAF = await animalFood.destroy({
        where: { foodId: foodId, animalId: animalId },
      });

      res.redirect(`/foods/detail/${foodId}`)

    } catch (err) {
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

      res.redirect(`/animals/detail/${animalId}`);
    } catch (err) {
      res.json(err);
    }
  }

  static async addPageAF(req, res) {
    try {
      const id = +req.params.id;
      let foodData = await food.findAll();
      let animalData = await animal.findByPk(id);
      res.render("animalfood/animalfood.ejs", { animalData, foodData });
    } catch {
      res.json(err);
    }
  }

  static async deleteAF(req, res) {
    try {
      const animalId = +req.params.id1;
      const foodId = +req.params.id2;

      let resultAF = await animalFood.destroy({
        where: { foodId: foodId, animalId: animalId },
      });

      res.redirect(`/animals/detail/${animalId}`)

    } catch (err) {
      res.json(err);
    }
  }

}

module.exports = AnimalFoodController;
