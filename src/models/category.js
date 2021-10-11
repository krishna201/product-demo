module.exports = (sequelize, Sequelize) => {
  const CategoryCollection = sequelize.define('category', {
    category_name: {
      type: Sequelize.STRING,
      required: true,
      trim: true,
    },
    description: {
      type: Sequelize.STRING,
    },
  })
  CategoryCollection.associate = function (models) {
    console.log("=============", models)
    CategoryCollection.hasMany(models.product, {
      foreignKey: 'id',
      as: 'products'
    });
  };

  return CategoryCollection
}
