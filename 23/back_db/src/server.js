const cors = require(`cors`);
const express = require(`express`);
const {v4: uuidv4} = require("uuid");
const app = express();
const TodoModel = require('../src/mongo/todoModel')
const {response} = require("express");
app.use(cors())
app.use(express.json())
app.use(express.static(`public`))

function server() {
    let todos_db = [{
        id: uuidv4(),
        text: `text example`,
        checked: false,
    }]
    app.listen(3333, () => {
        console.log(`Server is here...`)
    })
    app.get(`/todos`, (req, res) => {
        TodoModel.find()
            .then( response => res.send(response))
        /*  res.send(todos_db)*/
    })
    app.get(`/todos/:id`, (req, res) => {
        TodoModel.findById(req.params.id)
            .then(response => res.send(response))
        /* console.log(req.params.id)
         todos_db = todos_db.find(item => item.id === req.params.id)
         res.send(todos_db)*/
    })
    app.post(`/todos`, (req, res) => {
        TodoModel(req.body).save()
            .then(response => res.send(response))
        /* todos_db.push({
             id: uuidv4(),
             ...req.body
         })
         res.send({'message': 'ok'})*/
    })
    app.put(`/todos/:id`, (req, res) => {
         const newTodo = req.body;
         const id = req.params.id;
        TodoModel.updateOne({ _id: id }, newTodo)
            .then(() => {
                return  TodoModel.findById(id)
            })
            .then(response => res.send(response))
    })
    app.delete(`/todos/:id`, (req, res) => {
        TodoModel.deleteOne({_id: req.params.id} )
            .then(response => res.send(response))
    })
}

module.exports = server;