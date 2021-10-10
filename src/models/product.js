module.exports = (sequelize, Sequelize) => {
  const ProductCollection = sequelize.define('product', {
    product_name: {
      type: Sequelize.STRING,
      required: true,
      trim: true,
    },
    category_id: {
      type: Sequelize.INTEGER,
      required: true,
    },

    description: {
      type: Sequelize.STRING,
    },
  })


  return ProductCollection
}
