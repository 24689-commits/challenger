const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const { verifyAToken } = require('../middleware/authenticateuser')
const routes = express.Router()
// importing all models objects
const {users, Books, Orders, BookAuthor}=require('../model')

// login
routes.post('/login',
bodyParser.json(), (req, res)=>{
    users.login(req, res)
})

// ===Book router===
routes.get('/Books',verifyAToken ,(req, res) => {
    Books.fetchBooks(req, res);
});

routes.get('/Book/:id', (req, res) => {
    Books.fetchBook(req, res);
});

routes.post('/registerBook', bodyParser.json(), (req, res) => {
    Books.registerBook(req, res);
});

routes.put('/Book/:id', bodyParser.json(), (req, res) => {
    Books.updateBook(req, res);
});

routes.patch('/Book/:id', bodyParser.json(), (req, res) => {
    Books.updateBook(req, res);
});

routes.delete('/Book/:id', (req, res) => {
    Books.deleteBook(req, res);
});
// ====orders=====
routes.get('/Orders', (req, res) => {
    Orders.fetchOrders(req, res);
});

routes.get('/Order/:id', (req, res) => {
    Orders.fetchOrder(req, res);
});

routes.post('/registerOrder', bodyParser.json(), (req, res) => {
    Orders.registerOrder(req, res);
});

routes.put('/Order/:id', bodyParser.json(), (req, res) => {
    Orders.updateBook(req, res);
});

routes.patch('/Order/:id', bodyParser.json(), (req, res) => {
    Orders.updateOrder(req, res);
});

routes.delete('/Order/:id', (req, res) => {
    Orders.deleteOrder(req, res);
});
// ======authors===
routes.get('/BookAuthor', (req, res) => {
    BookAuthor.fetchBookAuthor(req, res);
})
routes.get('/BookAuthor/:id',(req,res)=>{
    BookAuthor.fetchBookAuthor(req,res)
})
routes.post('/registerBookAuthor', bodyParser.json(),
(req,res)=>{
    BookAuthor.registerBookAuthor(req,res)
})
routes.put('/BookAuthor/:id',bodyParser.json(),
(req,res)=>{
    BookAuthor.updateBookAuthor(req,res)
})
routes.patch('/BookAuthor/:id',bodyParser.json(),
(req,res)=>{
    BookAuthor.updateBookAuthor(req,res)
})
routes.delete('/BookAuthor/:id',(req,res)=>{
    BookAuthor.deleteBookAuthor(req,res)
})

// =====user router==========
routes.get('/users',(req,res)=>{
    users.fetchUsers(req,res)
})
routes.get('/user/:id',(req,res)=>{
    users.fetchUser(req,res)
})
routes.post('/register', bodyParser.json(),
(req,res)=>{
    users.register(req,res)
})
routes.put('/user/:id',bodyParser.json(),
(req,res)=>{
    users.updateUser(req,res)
})
routes.patch('/user/:id',bodyParser.json(),
(req,res)=>{
    users.updateUser(req,res)
})
routes.delete('/user/:id',(req,res)=>{
    users.deleteUser(req,res)
})
module.exports ={
    express,
    routes
}

