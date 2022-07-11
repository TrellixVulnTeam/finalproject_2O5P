const {Book} = require('../models/models')

class BookController {
    async create(req, res){
        const {imglink, bookname, price, description} = req.query;
        const book = await Book.create({imglink, bookname, price, description});
        return res.send(book)
    }

    async getAll(req, res){
        const book = await Book.findAll();
        return res.send(book)
    }

    async getDel(req, res){
        const {id} = req.query
        const book = await Book.destroy({where : {id}});
        const response = {message: `${book} rows was deleted. `}
        return res.send(response)
    }
    
}


module.exports = new BookController();