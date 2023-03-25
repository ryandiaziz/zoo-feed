class FoodController {
    static showFoods(req, res) {
        res.json({
            message: 'FOOD CONTROLLER'
        })
    }
}

module.exports = FoodController;