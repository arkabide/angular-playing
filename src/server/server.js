var express = require('express');
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());

var books= [];
var categories = [];

function loadCategories(){
  return new Promise((resolve, reject) => {
    for (let i = 0; i < 15; i++) {
      categories.push({
          id:(i+1),
          name:"Category " + (i+1),
          desc:"Desc "+(i+1)
        });
    }
  });
}

function loadBooks(){
  return new Promise((resolve, reject) => {
    for (let i = 0; i < 10; i++) {
      books.push({
        id:(i+1),
        author: 'me',
        title: 'Angular 5',
        pages: Math.floor(Math.random() * (i+1) * 100),
        category: categories[Math.floor(Math.random() * categories.length)]
      });
    }
   resolve();
 });
}

app.get('/', function (req, res) {
  res.send("Hey bitch!");
});

app.get('/books', function (req, res) {
  res.send(books);
});

app.post('/books', function (req, res) {
  books.push(req.body);
  res.status(201).send();
});

app.delete('/books/:id', function (req, res) {
  let index = books.findIndex(book => book.id == req.params.id);
  books.splice(index ,1);
  res.status(204).send();
});

app.get('/categories', function (req, res) {
  res.send(categories);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

loadCategories().then(loadBooks());
