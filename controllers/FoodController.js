const { food } = require('../models');
class FoodController {
    static async getFood(req, res) {
        try {
            let result = await food.findAll();
            res.json(result);
        } catch (error) {
            res.json(error);
        }
    }
    static addPage(req, res) { }
    static async add(req, res) {
        try {
            const { name, type } = req.body;
            const result = await food.create({
                name, type
            })
            res.json(result);
        } catch (err) {
            res.json(err)
        }
    }
    static delete(req, res) { }
}

module.exports = FoodController;