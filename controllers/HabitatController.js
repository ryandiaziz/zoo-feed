const { animal, food, animalfood, habitat } = require("../models");

class HabitatController {
    static async getHabitat(req, res) {
        try {
            let result = await habitat.findAll()
            res.json(result)
        } catch (err) {
            res.json(err)
        }
    }
    static async addPage(req, res) { }
    static async add(req, res) {
        try {
            const { name } = req.body
            let result = await habitat.create(
                { name }
            )
            res.json(result)
        } catch (err) {
            console.log(req.body)
            res.json(err)
        }
    }
    static async delete(req, res) {
        try {
            const id = req.params.id
            let result = await habitat.destroy({
                where: { id }
            })
            res.json(result)
        }
        catch (err) {
            res.json(err)
        }
    }
}

module.exports = HabitatController