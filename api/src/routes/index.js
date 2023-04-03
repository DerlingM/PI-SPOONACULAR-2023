const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const {allRecipes} = require('../controllers/getAllRecipes.js');
const getRecipesById = require('../controllers/getRecipeById.js')
const getRecipeByName = require('../controllers/getRecipeByName.js')
const postRecipe = require('../controllers/postRecipe.js')
const getDietsDb = require('../controllers/getDiets.js')
const getAllTypeDiets = require('../controllers/getAllTypeDiets.js')
//const getRecipesDborApi= require('../controllers/getRecipesDborApi.js')


const routes = Router();



routes.get("/recipe/allRecipes",allRecipes)
routes.get("/recipe/recipeId/:id",getRecipesById)
routes.get("/recipe/byName",getRecipeByName);
routes.post("/recipe/createRecipe", postRecipe )
routes.get("/diets/allDiets",getDietsDb)
routes.get("/diets/allTypeDiets",getAllTypeDiets)


//routes.get("/recipe/where",getRecipesDborApi)




module.exports = routes;
