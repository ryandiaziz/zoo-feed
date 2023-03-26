const { animalFood, animal, food } = require('../models');
class AnimalFoodController {
    static async getAnimalFood(req, res) {
        try {
            let result = await animalFood.findAll({
                include: [animal, food]
            })

            res.json(result)
        } catch (err) {
            res.json(err)
        }
    }
    static async addAnimalFood(req, res) {
        try {
            const { animalId, foodId } = req.body;

            let result = await animalFood.create({
                animalId: +animalId,
                foodId: +foodId
            })

            res.json(result)
        } catch (err) {
            res.json(err)
        }
    }
}

module.exports = AnimalFoodController;