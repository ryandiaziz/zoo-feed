const { animal, habitat, classType } = require("../models");

class HabitatController {
  static async getHabitat(req, res) {
    try {
      let result = await habitat.findAll();
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }

  static async detail(req, res) {
    try {
      const id = +req.params.id;
      let result = await habitat.findAll({
        where: {
          id: id,
        },
        include: [animal],
      });

      let resultAF = result[0].dataValues;
      let animals = result[0].dataValues.animals.map((animal) => {
        return animal.dataValues;
      });
      resultAF.animals = animals;

      res.json(resultAF);
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = HabitatController;
