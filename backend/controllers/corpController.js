const {Corp} = require('../models/models')

class CorpController {
    async create(req, res){
        const {imglink, corpname, description} = req.query;
        const corp = await Corp.create({imglink, corpname, description});
        return res.send(corp)
    }

    async getAll(req, res){
        const corp = await Corp.findAll();
        return res.send(corp)
    }

    async getDel(req, res){
        const {id} = req.query
        const corp = await Corp.destroy({where : {id}});
        const response = {message: `${corp} rows was deleted. `}
        return res.send(response)
    }
    
}


module.exports = new CorpController();