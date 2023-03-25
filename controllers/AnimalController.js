class AnimalController {
    static showAnimals(req, res) {
        res.json({
            message: 'ANIMAL CONTROLLER'
        })
    }
}

module.exports = AnimalController;