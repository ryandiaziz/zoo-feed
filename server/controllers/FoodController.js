const { food, animal, animalFood } = require("../models");
const fs = require('fs')

class FoodController {
  static async getFood(req, res) {
    try {
      let result = await food.findAll({
        include: [animal]
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
      const { name, type, animalId } = req.body;
      const resultfood = await food.create({
        name,
        type,
        imageUrl,
      });

      res.status(201).json(resultfood)
    } catch (err) {
      res.status(500).json({message: err.message});
    }
  }

  static async delete(req, res) {
    try {
      const id = +req.params.id;

      const temp = await food.findByPk(id);
      let fileName = temp.dataValues.imageUrl;
      const split = fileName.split("/");
      fileName = split[split.length - 1];
      fs.unlinkSync(`./public/images/${fileName}`);

      let resultfood = await food.destroy({
        where: { id },
      });

      let resultAF = await animalFood.destroy({
        where: {
            foodId: id
        }
    })

    resultfood === 1  
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
      const temp = await food.findByPk(id);
      let fileName = temp.dataValues.imageUrl;
      const split = fileName.split("/");
      fileName = split[split.length - 1];
      fs.unlinkSync(`./public/images/${fileName}`);

      let imageUrl =
        req.protocol + "://" + req.get("host") + "/images/" + req.file.filename;

      const { name, type } = req.body;
      const result = await food.update(
        {
          name : name,
          type : type,
          imageUrl : imageUrl
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

  static async getFoodDetail(req, res) {
    try {
        const id = +req.params.id
        let result = await animalFood.findAll({
            where: {
                foodId: id
            },
            include: [animal, food]
        })
        let resultAF = {}
        let animals = []
        if (result.length === 0) {
            result = await food.findByPk(id)
            resultAF = {
                ...result.dataValues,
                animals: animals
            }
        } else {
            animals = result.map(el => {
                return el.animal.dataValues
            })
            resultAF = {
                ...result[0].food.dataValues,
                animals: animals
            }
        }
        
        let consumed = resultAF.animals.map(animal => {
            return animal
        });

        
        res.status(200).json({ resultAF ,consumed});


      } catch (err) {
        res.status(500).json({message: err.message});
      }
    }


}

module.exports = FoodController;
