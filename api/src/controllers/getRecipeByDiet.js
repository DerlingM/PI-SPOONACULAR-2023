/* require('dotenv').config();
const {API_KEY} = process.env;
const axios = require('axios');

const { Recipe, Diets } = require('../db');
const getAllRecipes = require('./getAllRecipes')

const getRecipeByDiet = async (req, res)=>{
 let allRecipes = await getAllRecipes.getAllRecipes();
    const {diet} = req.query;
 

    try {

        if(diet){
        
            let recipeName = await allRecipes.filter((dat) =>
            dat.title.toLowerCase().includes(diet.toString().toLowerCase())
            
          );
          if(recipeName.length){
         //   res.status(200).json(recipeName)
          }else{
            res.status(404).json({message:'no se encontro ninguna receta con ese nombre'})
          }
          
          
     
        }
      
      
       
    } catch (error) {
         res.status(404).json({message:error.message});
         console.log('entro en el catch');
       
    }
}

module.exports = getRecipeByDiet; */