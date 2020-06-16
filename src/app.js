const express = require('express');
const stringFunctions = require('./lib/strings');
const numberFunctions = require('./lib/numbers');
const booleanFunctions = require('./lib/booleans');
const arrayFunctions = require('./lib/arrays');

const app = express();
app.use(express.json());

// strings

// hello world
app.get('/strings/hello/world', (req, res) => {
  res.json({ result: 'Hello, world!' });
});

// hello turtle
app.get('/strings/hello/:string', (req, res) => {
  res.json({ result: stringFunctions.sayHello(req.params.string) });
});

// uppercased string
app.get('/strings/upper/:string', (req, res) => {
  res.json({ result: stringFunctions.uppercase(req.params.string) });
});

// lowercase string
app.get('/strings/lower/:string', (req, res) => {
  res.json({ result: stringFunctions.lowercase(req.params.string) });
});

// length
app.get('/strings/length/:string', (req, res) => {
  res.json({ result: stringFunctions.countCharacters(req.params.string) });
});

// first character
app.get('/strings/first-characters/:string', (req, res) => {
  if (req.query.length === undefined) {
    res.json({ result: stringFunctions.firstCharacter(req.params.string) });
  } else {
    res.json({
      result: stringFunctions.firstCharacters(req.params.string, parseInt(req.query.length, 10)),
    });
  }
});

// numbers

// add
app.get('/numbers/add/:a/and/:b', (req, res) => {
  const a = parseInt(req.params.a, 10);
  const b = parseInt(req.params.b, 10);
  if (a || b === !NaN) {
    res.status(200).json({ result: numberFunctions.add(a, b) });
  } else {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
});

// subtract
app.get('/numbers/subtract/:b/from/:a', (req, res) => {
  const a = parseInt(req.params.a, 10);
  const b = parseInt(req.params.b, 10);
  if (a || b === !NaN) {
    res.status(200).json({ result: numberFunctions.subtract(a, b) });
  } else {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
});

// multiply
app.post('/numbers/multiply', (req, res) => {
  const a = parseInt(req.body.a, 10);
  const b = parseInt(req.body.b, 10);
  if (req.body.a === undefined || req.body.b === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).json({ result: numberFunctions.multiply(a, b) });
  }
});

// divide
app.post('/numbers/divide', (req, res) => {
  const a = parseInt(req.body.a, 10);
  const b = parseInt(req.body.b, 10);
  if (req.body.a === undefined || req.body.b === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else if (b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else {
    res.status(200).json({ result: numberFunctions.divide(a, b) });
  }
});

// remainders
app.post('/numbers/remainder', (req, res) => {
  const a = parseInt(req.body.a, 10);
  const b = parseInt(req.body.b, 10);

  if (req.body.a === undefined || req.body.b === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else if (b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else {
    res.status(200).json({ result: numberFunctions.remainder(a, b) });
  }
});

module.exports = app;
