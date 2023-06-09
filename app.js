const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('./mongo');
const mongoose = require('mongoose');
const productControllers = require('./controllers/products');
const todoControllers = require('./controllers/todos');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept, Authorization')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

    
    next();
})

// products

app.post('/products', productControllers.createProduct);

app.get('/products', productControllers.getProducts);

app.patch('/products/:pid', productControllers.updateProduct);

app.delete('/products/:pid', productControllers.deleteProduct);


// todos

app.post('/todos', todoControllers.createTodo);

app.get('/todos', todoControllers.getTodos);

app.patch('/todos/:id', todoControllers.updateTodo);

app.delete('/todos/:id', todoControllers.deleteTodo);

// app.listen(3000);

mongoose
    .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.zuo9uoe.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)
    .then(() => app.listen(process.env.PORT || 5000))
    .catch((error) => console.log(error))

