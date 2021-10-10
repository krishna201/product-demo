const express = require('express');
const app = express.Router();

const ProductCtrl = require('../controllers/product.ctrl');
const CategoryCtrl = require('../controllers/category.ctrl');

app.route('/').get(ProductCtrl.welcomeExpance);

app.route('/addEditCategory').post(CategoryCtrl.addEditCategoryFunc);
app.route('/deleteCategory').post(CategoryCtrl.deleteCategoryFunc);
app.route('/getCategorybyId').post(CategoryCtrl.getCategoryByIdFunc);
app.route('/getAllCategory').get(CategoryCtrl.getAllCategoryFunc);
app.route('/addEditProduct').post(ProductCtrl.addEditProductFunc);
app.route('/deleteProduct').post(ProductCtrl.deleteProductFunc);
app.route('/getProductbyId').post(ProductCtrl.getCategoryByIdFunc);
app.route('/getAllProduct').get(ProductCtrl.getAllProductFunc);
module.exports = app;