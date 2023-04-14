const { classType, habitat, food, animal, animalFood ,user} = require("../models");
const fs = require("fs")

class AnimalController {
  static async getAnimal(req, res) {
    try {
      let result = await animal.findAll({
        include: [classType, habitat,user],
      });
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({message: err.message});
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

      res.status(201).json(result);
    } catch (err) {
      res.status(500).json({message: err.message});
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
        ? res.status(200).json({
            message: `Id ${id} has been Deleted!`,
          })
        : res.status(404).json({
            message: `Couldn't delete id:${id}.'`,
          });
    } catch (err) {
      res.status(500).json({message: err.message});
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
        ? res.status(200).json({
            message: `Id ${id} has been Updated!`,
          })
        : res.status(404).json({
            message: `Couldn't Update id:${id}.'`,
          });
    } catch (err) {
      res.status(500).json({message: err.message});
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
      res.status(200).json( {
        resultAF,
        classTypeData,
        habitatData,
      });
    } catch (err) {
      res.status(500).json({message: err.message});
    }
  }

  
}

module.exports = AnimalController;
