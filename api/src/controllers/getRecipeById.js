const axios = require('axios');
require('dotenv').config();
const {API_KEY} = process.env;
const getAllRecipes = require('./getAllRecipes')

const { Recipe, Diets } = require('../db');
const getRecipeById = async (req, res)=>{
    const {id} = req.params
    // let allRecipes = await getAllRecipes.getAllRecipes();
    
   /*  if (id) {
        let recipeId = await allRecipes.filter(recipe => recipe.id == id);
        if(recipeId.length){
            recipeId.map(a=>{
                res.status(200).json(a)
            })
           
        }
        else {
            res.status(404).send('No se Encontro Receta con el id: ' + id);
        }
     
           
      } */ 

      let Recipeid = await Recipe.findOne({
        where :{
            id : id
        },  include: {
            model: Diets,
            attributes: ['title'],
          }, through: {
            attributes: ['id', 'title'],
          },
       })
       if(Recipeid){
        let RecipeDetail = {
            id: Recipeid.id,
            title: Recipeid.title,
            image: Recipeid.image,
            Diets : Recipeid.Diets,
            summary:Recipeid.summary,
            healtScore:Recipeid.healthScore,
            analyzedInstructions:Recipeid.analyzedInstructions[0]?.map((paso,index) => {
                return `${!paso==''?index+1 + '.-':''} ${paso}  `;
              }),
        }
        
        res.status(200).send(RecipeDetail);
       }
       else{
try {
    let recipeById = await axios.get(
         `https://api.spoonacular.com/recipes/${id}/information?&apiKey=${API_KEY}`
         //`http://localhost:3000/results/${id} `
     );
     if(recipeById){
        let Recipeid = {
             id: recipeById.data.id,
             title: recipeById.data.title,
             image: recipeById.data.image,
             Diets : recipeById.data.diets,
             summary:recipeById.data.summary,
             healtScore:recipeById.data.healthScore,
             analyzedInstructions:recipeById.data.analyzedInstructions[0]?.steps.map((paso) => {
                 return `${paso.number} .-  ${paso.step}  `;
               }),
         }
        
         res.status(200).send(Recipeid);
     }
     else{
        res.status(404).send('No se Encontro Receta con el id: ' + id);
     }
} catch (error) {
    res.status(200).send({message:error})
}
       }
          
 



}
module.exports = getRecipeById;