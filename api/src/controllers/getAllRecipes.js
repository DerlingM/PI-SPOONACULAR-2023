require('dotenv').config();
const {API_KEY} = process.env;
const axios = require('axios');

const { Recipe, Diets } = require('../db');
const allRecipes = async(req,res)=>{
        let recipes = await getAllRecipes();

  res.status(200).json(recipes)

}
        
const getAllRecipes = async ()=>{
     try { 
   let recipes2 = []
   let rercipesUnid =[];

         const infRecipes = await axios.get(
            `https://api.spoonacular.com/recipes/complexSearch?number=100&apiKey=${API_KEY}&addRecipeInformation=true`
         // "http://localhost:3000/results"
       
           );  
      recipes2.push(infRecipes)
      let rec =  await Recipe.findAll({
        include: {
          model: Diets,
          attributes: ['title'],
        }, through: {
          attributes: ['id', 'title'],
        },
      });
 
        // al regresar al link de la api agreggar results despues de data
        let recipes = recipes2.map(res => res.data.results.map(data =>{
        
       return  { 
              id: data.id,
            title: data.title,
            image: data.image,
            summary:data.summary,
            Diets:data.diets,
            healtScore:data.healthScore,
            analyzedInstructions: data.analyzedInstructions[0]?.steps.map((paso) => {
                return `<b>${paso.number}</b>   ${paso.step}  `;
              }), }
        
        }))
        rercipesUnid.push(recipes.flat())
    
        rercipesUnid.push(rec);
        
       /*  if(name){
          let recipeName = await recipestotal.filter((dat) =>
          dat.title.toLowerCase().includes(name.toString().toLowerCase())
          
        );
        if(recipeName.length){
          res.status(200).json(recipeName)
        }else{
          res.status(404).json({message:'no se encontro ninguna receta con ese nombre'})
        }
        }else{
          res.status(200).json(rercipesUnid.flat())
        } */
      // res.status(200).json(rercipesUnid.flat())
      
      return rercipesUnid.flat();
    } catch (error) {
     
    return error;
       
    } 
   
}
/*  const getRecipesDb = async (req,res) => {
 try {
  let rec =  await Recipe.findAll({
    include: {
      model: Diets,
      attributes: ['title'],
    },
  });

  res.status(200).json(rec)
 } catch (error) {
  res.status(404).json({message:error.message})
 }
  };  */

module.exports = {
  getAllRecipes,
 
  allRecipes
};
