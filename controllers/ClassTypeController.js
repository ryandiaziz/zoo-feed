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
    static async addPage(req, res) { 
        try {
            const id = +req.params.id
            const classTypeData = await classType.findAll({where:{id : id}});
            const habitatData = await habitat.findAll();
            let classTypeID = classTypeData[0].dataValues

            res.render("Class/addPage.ejs", { classTypeID, habitatData });
        } catch (error) {
            res.json(error);
        }
    }

    static async add(req, res) {
        try {
            const classTypeId = +req.params.id
            const {name,age,sex,habitatId,imageUrl} = req.body
            let result = await animal.create(
                { name : name,age:+age,sex:sex,classTypeId : +classTypeId,habitatId : +habitatId,imageUrl:imageUrl }
            )
            res.redirect(`/classtypes/detail/${classTypeId }`)

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
        
            res.render('Class/detailPage.ejs',{resultAF})

        } catch (err) {
            res.json(err)
        }
    }
}

module.exports = ClassTypeController