const { animal, habitat ,classType} = require("../models");

class HabitatController {
    static async getHabitat(req, res) {
        try {
            let result = await habitat.findAll()
            res.render('Habitats/index.ejs',{result})
        } catch (err) {
            res.json(err)
        }
    }
    static async addPage(req, res) { 
        try {
            const id = +req.params.id
            const habitatData = await habitat.findAll({where:{id : id}});
            const classTypeData = await classType.findAll();
            let habitatID = habitatData[0].dataValues

            res.render("Habitats/addPage.ejs", { habitatID, classTypeData });
        } catch (error) {
            res.json(error);
        }

    }

    static async add(req, res) {
        try {
            const habitatId = +req.params.id
            const {name,age,sex,classTypeId,imageUrl} = req.body
            let result = await animal.create(
                { name : name,age:+age,sex:sex,classTypeId : +classTypeId,habitatId : +habitatId,imageUrl:imageUrl }
            )
            res.redirect(`/habitats/detail/${habitatId}`)

        } catch (err) {
            res.json(err)
        }
    }

    static async delete(req, res) {
        try {
            const id = +req.params.id
            let result = await habitat.destroy({
                where: { id }
            })
            res.json(result)
        }
        catch (err) {
            res.json(err)
        }
    }

    static async detail(req, res) {
        try {
            const id = +req.params.id
        let result = await habitat.findAll({
            where: {
                id : id
            },include : [animal]
        })

        let resultAF = result[0].dataValues
        let animals = result[0].dataValues.animals.map(animal =>{
            return animal.dataValues
        })
        resultAF.animals = animals
        
            res.render('Habitats/detailPage.ejs',{resultAF})

        } catch (err) {
            res.json(err)
        }
    }


}

module.exports = HabitatController