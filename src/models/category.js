module.exports = (sequelize, Sequelize) => {
  const CategoryCollection = sequelize.define('category', {
    category_name: {
      type: Sequelize.STRING,
      required: true,
      trim: true,
    },
    createdOn: {
      type: Sequelize.DATE,
      required: true,
    },
    description: {
      type: Sequelize.STRING,
    },
  })


  return CategoryCollection
}
