const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors')
const productRoute = require('./routes/product.route')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))


app.use(bodyParser.json())
app.use(cors());
app.use(cookieParser());

app.use('/', productRoute);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});


app.listen(4500, () => {
  console.log("Product app is running on 4500");
});

module.exports = app;