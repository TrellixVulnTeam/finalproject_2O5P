const {Articles} = require('../models/models')

class ArticlesController {
    async create(req, res){
        const {imglink, articlesname, description, carddate} = req.query;
        const articles = await Articles.create({imglink, articlesname, description, carddate});
        return res.send(articles)
    }

    async getAll(req, res){
        const articles = await Articles.findAll();
        return res.send(articles)
    }

    async getDel(req, res){
        const {id} = req.query
        const articles = await Articles.destroy({where : {id}});
        const response = {message: `${articles} rows was deleted. `}
        return res.send(response)
    }
    
}


module.exports = new ArticlesController();