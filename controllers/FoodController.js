const { food, animal, animalFood } = require("../models");

class FoodController {
  static async getFood(req, res) {
    try {
      let result = await food.findAll({
        include: [animal]
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
      const { name, type,imageUrl, animalId } = req.body;
      const resultfood = await food.create({
        name,
        type,
        imageUrl,
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
        const id = +req.params.id;
        let animals = await animal.findAll();
        let foods = await food.findByPk(id);
        res.render("foods/updatePage.ejs", { animals,foods });
      } catch (error) {
        res.json(error);
      }

  }
  static async update(req, res) {
    try {
      const id = Number(req.params.id);
      const { name, type , imageUrl} = req.body;

      const result = await food.update(
        {
          name,
          type,
          imageUrl
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

        consumed.forEach(consume => {
          console.log(consume.name)
        });
        
        res.render("foods/detailPage.ejs", { resultAF ,consumed});


      } catch (error) {
        res.json(error);
      }
    }


}

module.exports = FoodController;
