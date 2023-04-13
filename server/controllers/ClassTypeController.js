const { animal, classType, habitat } = require("../models");

class ClassTypeController {
    static async getClass(req, res) {
        try {
            let result = await classType.findAll()
            res.json(result)

        } catch (err) {
            res.json(err)
        }
    }

    static async detail(req, res) {
        try {
            const id = +req.params.id
        let result = await classType.findAll({
            where: {
                id : id
            },include : [animal]
        })

        let resultAF = result[0].dataValues
        let animals = result[0].dataValues.animals.map(animal =>{
            return animal.dataValues
        })
        resultAF.animals = animals
        
            res.json(resultAF)

        } catch (err) {
            res.json(err)
        }
    }
}

module.exports = ClassTypeController