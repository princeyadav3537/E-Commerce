const mysql = require('mysql')

let connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'aprince@123',
    database:'e-commerce1'
})

module.exports = connection