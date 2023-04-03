 require('dotenv').config();
const {API_KEY} = process.env;
const axios = require('axios');

const { Recipe, Diets } = require('../db');
const getAllRecipes = require('./getAllRecipes')

const getRecipesDborApi = async (req, res)=>{
 let allRecipes = await getAllRecipes.getAllRecipes();
    const {where} = req.query;
 

/*     try {

        if(where === 'DB'){
          let recipedbapi = await allRecipes.filter((dat) =>dat.Rel.title );
          
       
            res.status(200).json(recipedbapi)
        }
        else if(where === 'API'){
            let recipedbapi = await allRecipes.filter((dat) =>!dat.Rel.title );
            res.status(200).json(recipedbapi)
        }
        else{
            res.status(404).json({message:error.message})
        }
      
      
       
    } catch (error) {
         res.status(404).json({message:error.message});
         console.log('entro en el catch');
       
    } */

/* 
    let filter;
    if(where === 'db'){
      filter= copyRecipeADb.filter(Rel =>
        {
            if(Rel.Diets.length){
               return Rel.Diets[0].title
            }
            
        }
         )
         res.status(200).json(filter)
    }
    else if(where ==='api'){
      filter = copyRecipeADb.filter(Rel =>
         {
            if(Rel.Diets.length){
                return !Rel.Diets[0].title
             }
             else{
                return Rel.Diets.length===0
             }
        }
         )
         res.status(200).json(filter)
    }
    else if(where==='All'){
        
        res.status(200).json(allRecipes)
    }*/
} 

//module.exports = getRecipesDborApi; 