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
    static async delete(req, res) {
        try {
            const id = +req.params.id;
            const result = await food.destroy({
                where: { id }
            })
            result === 1 ?
                res.json({ message: `Berhasil delete ${id}` })
                :
                res.json({ message: `gagal delete ${id}` })
        } catch (error) {
            res.json(error)
        }
    }
    static updatePage(req, res) { }
    static async update(req, res) {
        try {
            const id = Number(req.params.id)
            const { name, type } = req.body

            const result = await food.update({
                name, type
            }, {
                where: { id }
            })
            result[0] === 1 ?
                res.json({ message: `Berhasil update ${id}` })
                :
                res.json({ message: `gagal update ${id}` })
        } catch (error) {
            res.json(error);
        }
    }
}

module.exports = FoodController;