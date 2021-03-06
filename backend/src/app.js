const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate')
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json()); // Informando ao srevidor que o Body das requisiões está repassando em json
app.use(routes);
app.use(errors());

// app.listen(3333);

module.exports = app;