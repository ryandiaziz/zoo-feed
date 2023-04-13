const { animal } = require('../models');

class HomeController {
    static async showHomePage(req, res) {
        try {
            const results = await animal.findAll();
            res.status(200).render('index.ejs', { results });
        } catch (error) {
            res.json(error)
        }
    }
}

module.exports = HomeController;