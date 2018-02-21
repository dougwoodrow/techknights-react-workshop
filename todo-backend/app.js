var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();

app.use(cors());
app.use(bodyParser.json());

var todos = [
    {
        title: "Initialize Github repo",
        isCompleted: true,
        completedAt: new Date()
    },
    {
        title: "Scaffold Angular App",
        isCompleted: true,
        completedAt: new Date()
    },
    {
        title: "Get Express API up",
        isCompleted: true,
        completedAt: new Date()
    },
    {
        title: "Give presentation",
        isCompleted: false,
        completedAt: null
    }
];

app.get('/api/todos', function (req, res) {
    console.log("Getting Todo items");
    res.json(todos);
});

app.post('/api/todos', function (req, res) {
    console.log("Saving Todo items");
    todos = req.body.todos;
    res.json(todos);
});

app.listen(7777);
console.log("App booted and listening on port 7777");