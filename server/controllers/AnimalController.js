const { classType, habitat, food, animal, animalFood } = require("../models");
const fs = require("fs")

class AnimalController {
  static async getAnimal(req, res) {
    try {
      let result = await animal.findAll({
        include: [classType, habitat],
      });
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }

  static async add(req, res) {
    try {
      let imageUrl =
        req.protocol + "://" + req.get("host") + "/images/" + req.file.filename;
      const { name, age, sex, classTypeId, habitatId, userId } = req.body;
      let result = await animal.create({
        name: name,
        age: +age,
        sex: sex,
        imageUrl: imageUrl,
        classTypeId: +classTypeId,
        habitatId: +habitatId,
        userId: +userId,
      });

      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }

  static async delete(req, res) {
    try {
      const id = +req.params.id;

      const temp = await animal.findByPk(id);
      let fileName = temp.dataValues.imageUrl;
      const split = fileName.split("/");
      fileName = split[split.length - 1];
      fs.unlinkSync(`./public/images/${fileName}`);

      let resultAnimal = await animal.destroy({
        where: { id },
      });
      let resultAF = await animalFood.destroy({
        where: {
          animalId: id,
        },
      });

      resultAnimal  === 1
        ? res.json({
            message: `Id ${id} has been Deleted!`,
          })
        : res.json({
            message: `Couldn't delete id:${id}.'`,
          });
    } catch (err) {
      res.json(err);
    }
  }

  static async update(req, res) {
    try {
      const id = +req.params.id;

      const temp = await animal.findByPk(id);
      let fileName = temp.dataValues.imageUrl;
      const split = fileName.split("/");
      fileName = split[split.length - 1];
      fs.unlinkSync(`./public/images/${fileName}`);

      let imageUrl =
        req.protocol + "://" + req.get("host") + "/images/" + req.file.filename;
      const { name, age, sex, classTypeId, habitatId, userId } = req.body;
      const result = await animal.update(
        {
          name: name,
          age: age,
          sex: sex,
          imageUrl: imageUrl,
          classTypeId: classTypeId,
          habitatId: habitatId,
          userId: userId,
        },
        {
          where: { id },
        }
      );

      result[0] === 1
        ? res.json({
            message: `Id ${id} has been Updated!`,
          })
        : res.json({
            message: `Couldn't Update id:${id}.'`,
          });
    } catch (error) {
      res.json(error);
    }
  }

  static async getAnimalDetail(req, res) {
    try {
      const id = +req.params.id;
      let result = await animalFood.findAll({
        where: {
          animalId: id,
        },
        include: [animal, food],
      });
      let resultAF = {};
      let foods = [];
      if (result.length === 0) {
        result = await animal.findByPk(id);
        resultAF = {
          ...result.dataValues,
          foods: foods,
        };
      } else {
        foods = result.map((el) => {
          return el.food.dataValues;
        });
        resultAF = {
          ...result[0].animal.dataValues,
          foods: foods,
        };
      }
      let classTypeData = await classType.findAll({
        where: {
          id: resultAF.classTypeId,
        },
      });
      let habitatData = await habitat.findAll({
        where: {
          id: resultAF.habitatId,
        },
      });
      res.json( {
        resultAF,
        classTypeData,
        habitatData,
      });
    } catch (err) {
      res.json(err);
    }
  }

  
}

module.exports = AnimalController;
