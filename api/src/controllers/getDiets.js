require('dotenv').config();
const {API_KEY} = process.env;
const axios = require('axios');

const { Recipe, Diets } = require('../db');

 const getDiets = async (req,res) => {
    try {
     let rec =  await Diets.findAll({
       include: {
         model: Recipe,
         attributes: ['title'],
       },
     });
   
     res.status(200).json(rec)
    } catch (error) {
     res.status(404).json({message:error.message})
    }
     };




     const getDietsDb = async (req, res)=>{
        const {diet} = req.query;
        try {
       let recipes2 = []
       let recipesAll =[];
             const infRecipes = await axios.get(
               // `https://api.spoonacular.com/recipes/complexSearch?number=100&apiKey=${API_KEY}&addRecipeInformation=true`
               "http://localhost:3000/results"
           
               );  
               console.log(diet)
            let rec =  await Recipe.findAll({
                include: {
                    model: Diets,
                    attributes: ['title'],
                  }, through: {
                    attributes: ['id', 'title'],
                  },
            });
            recipes2.push(infRecipes)
            // al regresar al link de la api agreggar results despues de data
            let recipes = recipes2.map(res => res.data.map(data =>{
            
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
            //llenamos el array con todas las recetas sin una busqueda por dieta y aplicamos un flat para limpiar nuestro array+
            // y se una perfectamente los datos de la base y los datos de la api
           
            recipesAll.push(recipes.flat())
            recipesAll.push(rec.flat())
            let recipestotal = recipesAll.flat();
            //
           // creamos varriables para porder hacerles un filter
            let recipesDb = rec.flat();
            let recipesApi = recipes.flat();
            if(diet){
        if(diet!=='All'){                
                   let allDiets =[];
                      let typeDietApi = await recipesApi.filter(dat =>
                            dat.Diets.some(element => {                     
                          return element.toLowerCase().includes(diet.toString().toLowerCase())                  
                        })
                    ) 
                      let typeDietdb = await recipesDb.filter(dato=>             
                        dato.Diets.some(element => {                   
                            return element.dataValues.title.toLowerCase().includes(diet.toString().toLowerCase())                  
                          })
                        )
                        allDiets.push(typeDietApi);
                        allDiets.push(typeDietdb);
                        if(allDiets.length){
                        res.status(200).json(allDiets.flat())
                        }
                        else
                        {
                        res.status(404).json({message:'no se encontro ninguna receta con ese tipo de dietas'})
                        }
                      }
                        else{
                          res.status(200).json(recipestotal)
                        }
            }
            else
            {
              res.status(200).json(recipestotal)
            }
          
          
           
        } catch (error) {
             res.status(404).json({message:error.message}); 
        }
      }
     module.exports = getDietsDb;