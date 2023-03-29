const { animal, classType, habitat } = require("../models");

class ClassTypeController {
    static async getClass(req, res) {
        try {
            let result = await classType.findAll()
            res.render('Class/index.ejs',{result})

        } catch (err) {
            res.json(err)
        }
    }
    static async addPage(req, res) { }

    static async add(req, res) {
        try {
            const { name } = req.body
            let result = await classType.create(
                { name }
            )
            res.json(result)

        } catch (err) {
            res.json(err)
        }
    }

    static async delete(req, res) {
        try {
            const id = +req.params.id
            let result = await classType.destroy({
                where: { id }
            })
            res.json(result)
        }

        catch (err) {
            res.json(err)
        }
    }
}

module.exports = ClassTypeController