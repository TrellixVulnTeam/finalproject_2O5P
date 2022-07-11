const {Learn} = require('../models/models')

class LearnController {
    async create(req, res){
        const {description} = req.query;
        const learn = await Learn.create({description});
        return res.send(learn)
    }

    async getAll(req, res){
        const learn = await Learn.findAll();
        return res.send(learn)
    }

    async getDel(req, res){
        const {id} = req.query
        const learn = await Learn.destroy({where : {id}});
        const response = {message: `${learn} rows was deleted. `}
        return res.send(response)
    }
    
}


module.exports = new LearnController();