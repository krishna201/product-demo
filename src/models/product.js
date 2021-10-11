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
  ProductCollection.associate = function (models) {
    ProductCollection.belongsTo(models.category, {
      foreignKey: 'category_id'
    });
  };


  return ProductCollection
}
