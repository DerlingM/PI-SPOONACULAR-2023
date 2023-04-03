const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
//https://api.spoonacular.com/recipes/complexSearch?number=100&apiKey=21e6eee508d04efe8f16f1f6aacf10df&addRecipeInformation=true para traer 100 recetas
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Recipe', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      autoIncrement :true
   },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image:{
      type: DataTypes.STRING,
      allowNull : false
    },
    summary:{
      type:DataTypes.STRING,
      allowNull :false
    },
    healtScore:{
      type:DataTypes.INTEGER,
      allowNull :false
    },
    analyzedInstructions:{
      type : DataTypes.ARRAY(DataTypes.TEXT)
    }


 /*    Resumen del plato. *
Nivel de comida saludable (health score). *
Paso a paso. * */
  },{
    timestamps :false
  });
};
