const {Diets} = require('../db')

const getAllTypeDiets = async (req,res) => {
    //obtenemos los tipos de dieta desde la base de datos
    try {
     let rec =  await Diets.findAll(
     );
    
     res.status(200).json(rec.flat())
    } catch (error) {
     res.status(404).json({message:error.message})
    }
     };

     module.exports = getAllTypeDiets;