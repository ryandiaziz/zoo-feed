const { animal, user, animalUser } = require("../models");

class AnimalUserController {
  static async get(req, res) {
    try {
        let result = await animalUser.findAll({
            include : [animal,user]
        })
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json({message : err.message})
    }
  }

  static async add(req, res) {
    try {
        const {animalId,userId} = req.body;

        let result = await animalUser.create({
            userId: +userId,
            animalId:+animalId
        })

        res.status(200).json(result)

    } catch (err) {
        res.status(500).json({message : err.message})
    }
  }

  static async delete(req, res) {
    try {
        const userId = +req.params.id1
        const  animalId = +req.params.id2

        let result = await animalUser.destroy({
            where:{
                userId : userId,
                animalId: animalId
            }
        })

        res.status(200).json({message : "deleted successfully"})

    } catch (err) {
        res.status(500).json({message : err.message})
    }
  }
}

module.exports = AnimalUserController;
