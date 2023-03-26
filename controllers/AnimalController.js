const { classType, habitat, food, animal, animalfood } = require("../models");

class AnimalController {
    static async getAnimal(req, res) {
        try {
            let result = await animal.findAll({
                include: [classType, habitat]
            })
            res.json(result)

        } catch (err) {
            res.json(err)
        }
    }
    static async addPage(req, res) { }
    static async add(req, res) {
        try {
            const { name, age, sex, classTypeId, habitatId } = req.body
            let result = await animal.create(
                { name, age, sex, classTypeId, habitatId }
            )
            res.json(result)
        } catch (err) {
            res.json(err)
        }
    }
    static async delete(req, res) {
        try {
            const id = req.params.id
            let result = await animal.destroy({
                where: { id }
            })
            req.json(result)
        }
        catch (err) {
            res.json(err)
        }
    }

    static async updatePage(req, res) { }
    static async update(req, res) { }
}

module.exports = AnimalController;