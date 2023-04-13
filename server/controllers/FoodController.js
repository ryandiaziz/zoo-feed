const { food, animal, animalFood } = require("../models");
const fs = require('fs')

class FoodController {
  static async getFood(req, res) {
    try {
      let result = await food.findAll({
        include: [animal]
      });
      res.json(result);
    } catch (error) {
      res.json(error);
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

      res.json(resultfood)
    } catch (error) {
      res.json(error);
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
    ? res.json({
        message: `Id ${id} has been Deleted!`,
      })
    : res.json({
        message: `Couldn't delete id:${id}.'`,
      });
    } catch (error) {
      res.json(error);
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

        
        res.json({ resultAF ,consumed});


      } catch (error) {
        res.json(error);
      }
    }


}

module.exports = FoodController;
