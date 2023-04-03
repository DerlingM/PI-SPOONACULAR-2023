const { Recipe, Diets } = require('../db');




const postRecipe = async (req,res)=>{
    try {
        const {id , title , image , diets , summary, healtScore,analyzedInstructions} = req.body
    
        if( !title || !image  || !summary || !healtScore || !analyzedInstructions) {return res.status(404).json({message:'Complete all fields'})}
   
        const recipeCreated = await Recipe.create({
           
            title,
            summary,
            healtScore,
            diets,
            analyzedInstructions : [analyzedInstructions],
            image,
            
          });
           let dietDb = await Diets.findAll({
            where: {
              title: diets,
            },
          }); 
          recipeCreated.addDiets(dietDb); // agrego la dieta al modelo Recipe
          // console.log(dietDb,'estamos en dietdb',diets)
   return res.status(201).json(recipeCreated)
    } catch (error) {
        return res.status(400).send({message:error.message})
    }
}
module.exports = postRecipe;