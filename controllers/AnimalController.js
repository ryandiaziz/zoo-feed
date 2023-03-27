const { classType, habitat, food, animal, animalFood } = require("../models");

class AnimalController {
    static async getAnimal(req, res) {
        try {
            let result = await animal.findAll({
                include: [classType, habitat]
            })
            // res.json(result)
            res.render('animals/index.ejs', { result });
        } catch (err) {
            res.json(err)
        }
    }
    static async getAnimalDetail(req, res) {
        try {
            const id = req.params.id;
            let result = await animal.findByPk(id);
            res.json(result);
        } catch (error) {
            res.json(error);
        }
    }
    static async addPage(req, res) {
        try {
            let classTypes = await classType.findAll();
            let habitats = await habitat.findAll();
            res.render('animals/addPage.ejs', { classTypes, habitats });
        } catch (error) {
            res.json(error)
        }
    }
    static async add(req, res) {
        try {
            // console.log(req.body);
            const { name, age, sex, imageUrl, classTypeId, habitatId } = req.body;
            // // // let age = +ageS;
            // // // let classTypeId = +classTypeIdS;
            // // // let habitatId = +habitatIdS;
            let result = await animal.create(
                { name, age, sex, imageUrl, classTypeId, habitatId }
            )
            // // res.json(result);
            res.redirect('/animals');
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
            res.redirect('/animals');
        }
        catch (err) {
            res.json(err)
        }
    }
    static async updatePage(req, res) {
        try {
            const id = +req.params.id;
            let animalData = await animal.findByPk(id);
            // res.render('animals/updatePage.ejs')
        } catch (error) {
            res.json(error)
        }
    }
    static async update(req, res) {
        try {
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
        } catch (error) {
            res.json(error)
        }
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