require('dotenv').config();
const {API_KEY} = process.env;
const axios = require('axios');

const { Recipe, Diets } = require('../db');
const getAllRecipes = require('./getAllRecipes')

const getRecipeByName = async (req, res)=>{
 let allRecipes = await getAllRecipes.getAllRecipes();
    const {name} = req.query;
 

    try {


    if(name){
          let recipeName = await allRecipes.filter((dat) =>
          dat.title.toLowerCase().includes(name.toString().toLowerCase()));
          
        if(recipeName.length){
          res.status(200).json(recipeName)
        }else{
          res.status(404).json({message:'no se encontro ninguna receta con ese nombre'})
        }
     }
     else{
          res.status(200).json(allRecipes)
        }
      
      
       
    } catch (error) {
         res.status(404).json({message:error.message});
     
       
    }
}

module.exports = getRecipeByName;