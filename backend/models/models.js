const sequelize = require('../db');
const {DataTypes} = require('sequelize');


const {INTEGER, STRING} = DataTypes;

const Book = sequelize.define('Book',{
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    imglink: {type: STRING, allowNull: false},
    bookname: {type: STRING, allowNull: false},
    price: {type: STRING, allowNull: false},
    description: {type: STRING, allowNull: false}
})

const Corp = sequelize.define('Corp',{
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    imglink: {type: STRING, allowNull: false},
    corpname: {type: STRING, allowNull: false},
    description: {type: STRING, allowNull: false}
})

const Learn = sequelize.define('Learn',{
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    description: {type: STRING, allowNull: false}
})

const Articles = sequelize.define('Articles',{
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    imglink: {type: STRING, allowNull: false},
    articlesname: {type: STRING, allowNull: false},
    description: {type: STRING, allowNull: false},
    carddate: {type: STRING, allowNull: false}
})

module.exports = {Book, Corp, Learn, Articles}