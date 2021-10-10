
<!-- ABOUT THE PROJECT -->
## About The Project

* create folder of app (mkdir "folder name")
* go to folder run cmd `npm init`
* install dependencies And devDependencies package using (npm install package_name --save and napm i package_name --save-dev)
* create folder to `src` for all source code
* create main file in src `index.js` call intaill
* setup script in package.json for create server calling `index.js` file
* install framework package `express` and create listen server on port
* install some middlewahare package like`cookie-parser`,`cors`,`body-parser` etc as require
* creted architech folder like
- src
  - config
  - models
  - migration
  - controller
  - util
  - router
- indx.js

### Built With
* [Node.js](https://nodejs.org/)
* [Express.js](https://expressjs.com/)
* [PostgreSQL](https://www.postgresql.org/)
* [Sequelize ORM](https://sequelize.org/)

setup Sequelize Orm and migration given below cmd
-------------
- Sequelize 
- To install the Sequelize CLI:
 ```sh
npm install --save-dev sequelize-cli
```
To create an empty project you will need to execute init command
 ```sh
npx sequelize-cli init
```
create or generate migration
 ```sh
  npx sequelize-cli migration:generate --name add-title-post-table
```
 ```sh
  npx sequelize-cli migration:create --name your_migration_name
```
run migration
npx sequelize-cli db:migrate
undo migratioin
npx sequelize-cli db:migrate:undo
---------------------
* database connection done
# create the api curd operaton
- Category
   - addEditCategory
   - deleteCategory
   - deleteCategory
   - getAllCategory
- product
   - caddEditProduct
   - cdeleteProduct
   - getProductbyId
   - getAllProduct
