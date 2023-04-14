const { animalFood, animal, food } = require("../models");
class AnimalFoodController {
  static async getAnimalFood(req, res) {
    try {
      let result = await animalFood.findAll({
        include: [animal, food],
      });

      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({message: err.message});
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

      res.status(201).json(result);
    } catch (err) {
      res.status(500).json({message: err.message});
    }
  }

  static async deleteFA(req, res) {
    try {
      const foodId = +req.params.id1;
      const animalId = +req.params.id2;

      let resultFA = await animalFood.destroy({
        where: { foodId: foodId, animalId: animalId },
      });

      resultFA === 1
        ? res.status(200).json({
            message: ` Deleted relation!`,
          })
        : res.status(404).json({
            message: `Couldn't deleted.'`,
          });

    } catch (err) {
      res.status(500).json({message: err.message});
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

      res.status(201).json(result);
    } catch (err) {
      res.status(500).json({message: err.message});
    }
  }

  static async deleteAF(req, res) {
    try {
      const animalId = +req.params.id1;
      const foodId = +req.params.id2;

      let resultAF = await animalFood.destroy({
        where: { foodId: foodId, animalId: animalId },
      });

      resultAF === 1
        ? res.status(200).json({
            message: ` Deleted relation!`,
          })
        : res.status(404).json({
            message: `Couldn't deleted.'`,
          });
    } catch (err) {
      res.status(500).json({message: err.message});
    }
  }
}

module.exports = AnimalFoodController;
