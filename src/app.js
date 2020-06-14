const express = require('express');
const stringsFunctions = require('./lib/strings');

const app = express();

// hello world
app.get('/strings/hello/world', (req, res) => {
  res.json({ result: 'Hello, world!' });
});

// hello turtle
app.get('/strings/hello/:string', (req, res) => {
  res.json({ result: stringsFunctions.sayHello(req.params.string) });
});

// uppercased string
app.get('/strings/upper/:string', (req, res) => {
  res.json({ result: stringsFunctions.uppercase(req.params.string) });
});

// lowercase string
app.get('/strings/lower/:string', (req, res) => {
  res.json({ result: stringsFunctions.lowercase(req.params.string) });
});

// length
app.get('/strings/length/:string', (req, res) => {
  res.json({ result: stringsFunctions.countCharacters(req.params.string) });
});

// first character
app.get('/strings/first-characters/:string', (req, res) => {
  if (req.query.length === undefined) {
    res.json({ result: stringsFunctions.firstCharacter(req.params.string) });
  } else {
    res.json({
      result: stringsFunctions.firstCharacters(req.params.string, parseInt(req.query.length, 10)),
    });
  }
});

module.exports = app;
