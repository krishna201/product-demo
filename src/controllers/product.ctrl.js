
const db = require("../models/db");
const Productdb = db.ProductCollection;
const Categorydb = db.CategoryCollection;
const { QueryTypes } = require('sequelize');
class ExpanceController {
  welcomeExpance = async (req, res) => {
    res.send("Wellcome to product App");
  };

  addEditProductFunc = async (req, res) => {
    try {
      const data = req.body;
      console.log(data)
      if (data.product_id) {
        const productData = await Productdb.findAll({
          where: {
            id: data.product_id
          }
        })
        if (productData && productData.length) {

          await Productdb.update(data, { where: { id: data.product_id } })
          return res.json({ status: 200, message: "Category Updated successfully" });
        }
        return res.json({ status: 404, message: "Category not found" });
      }
      await Productdb
        .create({
          product_name: data.product_name,
          category_id: data.category_id,
          description: data.description
        })
      res.json({ status: 200, message: "Product Added successfully", data });
    } catch (error) {
      console.log("==================", error)
      res.json({ message: error });

    }
  };
  deleteProductFunc = async (req, res) => {
    try {
      const data = req.body;
      if (data.product_id) {
        const productData = await Productdb.findAll({
          where: {
            id: data.product_id
          }
        })
        if (productData && productData.length) {
          await Productdb.destroy({ where: { id: data.product_id } })
          return res.json({ status: 200, message: "Product deleted successfully", productData });
        }
        return res.json({ status: 404, message: "Product not found" });
      }
    } catch (error) {
      console.log("==================", error)
      res.json({ status: 404, message: error.message });

    }
  };
  getCategoryByIdFunc = async (req, res) => {
    try {
      const data = req.body;
      if (data.product_id) {
        const productData = await Productdb.findAll({
          where: {
            id: data.product_id
          }
        })
        return res.json({ status: 200, productData });

      }
    } catch (error) {
      console.log("==================", error)
      res.json({ status: 404, message: error.message });

    }
  };
  getAllProductFunc = async (req, res) => {
    try {
      const productData = await Productdb.findAll({
        include: [{
          model: Categorydb,
          required: true
        }]
      })
      // const productData = await Productdb.query("SELECT * FROM `product`", { type: QueryTypes.SELECT });
      return res.json({ status: 200, productData });
    } catch (error) {
      console.log("==================", error)
      res.json({ status: 404, message: error.message });

    }
  };
}
const expanceCtrl = new ExpanceController();
module.exports = expanceCtrl;