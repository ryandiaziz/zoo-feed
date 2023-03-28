const { classType, habitat, food, animal, animalFood } = require("../models");

class AnimalController {
    static async getAnimal(req, res) {
        try {
            let result = await animal.findAll({
                include: [classType, habitat]
            })
            res.render('animals/index.ejs', { result });
        } catch (err) {
            res.json(err)
        }
    }
    static async addPage(req, res) {
        try {
            console.log("masuk")
            let classTypes = await classType.findAll();
            let habitats = await habitat.findAll();
            res.render('animals/addPage.ejs',{classTypes,habitats});
        } catch (error) {
            res.json(error)
        }
    }
    static async add(req, res) {
        try {
            const { name, age, sex, imageUrl, classTypeId, habitatId } = req.body;
            let result = await animal.create(
                { name : name, age : +age, sex : sex, imageUrl : imageUrl, classTypeId : +classTypeId, habitatId: +habitatId }
            )
            res.redirect('/animals');
        } catch (err) {
            res.json(err)
        }
    }
    static async delete(req, res) {
        try {
            const id = +req.params.id
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
            let classTypes = await classType.findAll();
            let habitats = await habitat.findAll();
            res.render('animals/updatePage.ejs', { animalData, classTypes, habitats });
        } catch (error) {
            res.json(error)
        }
    }
    static async update(req, res) {
        try {
            const id = +req.params.id;
            console.log(req.body);
            const { name, age, sex, imageUrl, classTypeId, habitatId } = req.body
            const result = await animal.update({
                name, age, sex, imageUrl, classTypeId, habitatId
            }, {
                where: { id }
            })
            res.redirect('/animals');
        } catch (error) {
            res.json(error)
        }
    }
    static async getAnimalDetail(req, res) {
        try {
            const id = +req.params.id
            let result = await animalFood.findAll({
                where: {
                    animalId: id
                },
                include: [animal, food]
            })
            let resultAF = {}
            let foods = []
            if (result.length === 0) {
                result = await animal.findByPk(id)
                resultAF = {
                    ...result.dataValues,
                    foods: foods
                }
            } else {
                foods = result.map(el => {
                    return el.food.dataValues
                })
                resultAF = {
                    ...result[0].animal.dataValues,
                    foods: foods
                }
            }
            res.render('animals/detailPage.ejs', { resultAF });
        } catch (err) {
            res.json(err)
        }
    }
}

module.exports = AnimalController;