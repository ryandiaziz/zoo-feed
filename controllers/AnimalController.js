const { classType, habitat, food, animal, animalFood } = require("../models");

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
            let resultAnimal = await animal.destroy({
                where: { id }
            })
            let resultAF = await animalFood.destroy({
                where: {
                    animalId: id
                }
            })
            req.json(result)
        }
        catch (err) {
            res.json(err)
        }
    }
    static async updatePage(req, res) { }
    static async update(req, res) {
        const id = Number(req.params.id)
        const { name, age, sex, classTypeId, habitatId } = req.body

        const result = await animal.update({
            name, age, sex, classTypeId, habitatId
        }, {
            where: { id }
        })
        result[0] === 1 ?
            res.json({ message: `Berhasil update ${id}` })
            :
            res.json({ message: `gagal update ${id}` })
    }
    static async getAnimalFood(req, res) {
        try {
            const id = +req.params.id

            let result = await animalFood.findAll({
                where: {
                    animalId: id
                },
                include: [animal, food]
            })

            let resultPI = {}
            let foods = []

            if (result.length === 0) {
                result = await animal.findByPk(id)
                resultPI = {
                    ...result.dataValues,
                    foods: foods
                }
            } else {
                foods = result.map(el => {
                    return el.food.dataValues
                })
                resultPI = {
                    ...result[0].animal.dataValues,
                    foods: foods
                }
            }

            res.json(resultPI)
        } catch (err) {
            res.json(err)
        }
    }
}

module.exports = AnimalController;