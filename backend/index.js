const express = require('express');
require('dotenv').config();
require('./models/models');

const cors = require('cors')
const bookRouter = require('./routes/bookRouter')
const corpRouter = require('./routes/corpRouter')
const learnRouter = require('./routes/learnRouter')
const articlesRouter = require('./routes/articlesRouter')

const sequelize = require('./db')
const PORT = process.env.PORT
const app = express();

app.use(cors())
app.use('/api/book', bookRouter)
app.use('/api/corp', corpRouter)
app.use('/api/learn', learnRouter)
app.use('/api/articles', articlesRouter)

const start = async () =>{
    try{
        await sequelize.authenticate();
        await sequelize.sync()

        app.listen(PORT, ()=>{
            console.log('server started...')
        })
    }catch(err){
        console.log(err)
    }

}
start();
