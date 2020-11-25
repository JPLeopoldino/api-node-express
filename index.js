const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const indexRouter = require('./routes/index');
const clientsRouter = require('./routes/clients');
const productRouter = require('./routes/products');

app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/clients', clientsRouter);
app.use('/products', productRouter);


app.listen(4000);