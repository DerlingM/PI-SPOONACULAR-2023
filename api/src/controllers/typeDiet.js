const axios = require('axios');

const { Diets } = require('../db');
require('dotenv').config();
const { API_KEY } = process.env;
//creamos todos los timpos de dietas en la base de datos
const typeDiet = async ()=>{
const cont = await Diets.findByPk(1);
if(!cont){
    const dietsApi = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?number=100&apiKey=${API_KEY}&addRecipeInformation=true`
    );
    const diet = await dietsApi.data.results.map((data)=> data.diets);
    let data = diet.flat();
    const typeD = [...new Set(data)];

    typeD.forEach((data)=>{
        Diets.findOrCreate({
            where: {title:data}
        })
    })
}

}
module.exports = typeDiet;