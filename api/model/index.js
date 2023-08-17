const Users = require('./users')
const Orders =require('./Orders')
const Books = require('./Books')
const  BookAuthor = require('./BookAuthor')
// EXPORT AL OBJJECTS
module.exports = {
    users: new Users(),
    Orders: new Orders(),
    Books : new Books(),
    BookAuthor :new BookAuthor()
}