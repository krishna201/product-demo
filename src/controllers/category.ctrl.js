const db = require("../models/db");
const Categorydb = db.CategoryCollection;
class CategoryController {

  addEditCategoryFunc = async (req, res) => {
    try {
      const data = req.body;
      console.log(data)
      if (data.category_id) {
        const categoryData = await Categorydb.findAll({
          where: {
            id: data.category_id
          }
        })
        if (categoryData && categoryData.length) {
          console.log("categoryData", categoryData)

          await Categorydb.update(data, { where: { id: data.category_id } })
          return res.json({ status: 200, message: "Category Updated successfully", categoryData });
        }
        return res.json({ status: 404, message: "Category not found" });
      }
      await Categorydb
        .create({
          category_name: data.category_name
        })
      return res.json({ status: 200, message: "Category Added successfully", data });
    } catch (error) {
      console.log("==================", error)
      res.json({ message: error });

    }
  };
  deleteCategoryFunc = async (req, res) => {
    try {
      const data = req.body;
      if (data.category_id) {
        const categoryData = await Categorydb.findAll({
          where: {
            id: data.category_id
          }
        })
        if (categoryData && categoryData.length) {
          await Categorydb.destroy({ where: { id: data.category_id } })
          return res.json({ status: 200, message: "Category deleted successfully", categoryData });
        }
        return res.json({ status: 404, message: "Category not found" });
      }
    } catch (error) {
      console.log("==================", error)
      res.json({ status: 404, message: error.message });

    }
  };
  getCategoryByIdFunc = async (req, res) => {
    try {
      const data = req.body;
      if (data.category_id) {
        const categoryData = await Categorydb.findAll({
          where: {
            id: data.category_id
          }
        })
        return res.json({ status: 200, categoryData });

      }
    } catch (error) {
      console.log("==================", error)
      res.json({ status: 404, message: error.message });

    }
  };
  getAllCategoryFunc = async (req, res) => {
    try {
      const categoryData = await Categorydb.findAll({})
      await Categorydb.findAll({})
      return res.json({ status: 200, categoryData });
    } catch (error) {
      console.log("==================", error)
      res.json({ status: 404, message: error.message });

    }
  };
}
const categoryCtrl = new CategoryController();
module.exports = categoryCtrl;