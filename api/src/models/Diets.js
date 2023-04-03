module.exports = (sequelize) => {
    const { DataTypes } = require('sequelize');
    // defino el modelo
    sequelize.define('Diets', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
     },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      }
  
  
   /*    Resumen del plato. *
  Nivel de comida saludable (health score). *
  Paso a paso. * */
    },{
      timestamps :false
    });
  };
  