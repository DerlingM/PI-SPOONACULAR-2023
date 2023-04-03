import { ALL_RECIPES,POSTRECIPE,PAGE,SEARCH_RECIPE_BYNAME,NO_RECIPE,GET_RECIPE_BYID,ORDER_BY_DIET,ALL_TYPE_DIETS,ORDER_BY_NAME,ORDER_BY_HEALTSCORE,FILTERBY_DBORAPI, GET_TYPE_DIET } from "./types";
import axios from 'axios'
import { useSelector } from "react-redux";



export function paginado(numero) {
    return (dispatch) => {
      dispatch({ type: PAGE, payload: numero });
    };
  }
export  function getAllRecipes(){
 return async function(dispatch){   try {
        let allRecipes = await axios.get(
            `http://localhost:3001/recipe/allRecipes`
        )
        return dispatch({
            type : ALL_RECIPES,
            payload : allRecipes.data
        })
    } catch (error) {
        
    }}
}
export function postNewRecipe(Recipe,res){
    return async function(dispatch){
        try {
       let response =    await axios.post(
                `http://localhost:3001/recipe/createRecipe`,Recipe
                
                   )
                   return dispatch({
                    type : POSTRECIPE,
                    payload : response.status
                })
        } catch (error) {
            
        }
    }

}
export function getRecipeByName(name){
    return async function(dispatch){
        try {
            let recipeName = await axios.get(
                //`http://localhost:3001/recipe/allRecipes?name=`+name
                `http://localhost:3001/recipe/byName?name=`+name
                
            )
            return dispatch({
                type : SEARCH_RECIPE_BYNAME,
                payload : recipeName.data
            })
        } catch (error) {
            console.log('esta en el eror')
            dispatch({type:NO_RECIPE ,payload : error})
        }
    }
}
export function getRecipeByDiet(diet){
   
    return async function(dispatch){
        try {
            
            let recipeDiet = await axios.get(
                `http://localhost:3001/diets/allDiets?diet=`+diet
            )
            return dispatch({
                type : GET_TYPE_DIET,
                payload : recipeDiet.data,
                
            })
        } catch (error) {
            
        }
    }

}
export function getRecipeById(id){
  
    return async function(dispatch){

try {
     let recipeById = await axios.get(
        `http://localhost:3001/recipe/recipeId/${id} `
    ) 
    
    return dispatch({
        type : GET_RECIPE_BYID,
        payload : recipeById.data
    })
} catch (error) {
    throw Error(error)
}

    }

}
export function orderByScore(dat){
    return {
        type: ORDER_BY_HEALTSCORE,
        payload: dat,
      };
}

export function orderByName(order){
return{
    type : ORDER_BY_NAME,
    payload : order
}
}

export function filterByDBorApi(Rel){
    return{
        type : FILTERBY_DBORAPI,
        payload : Rel
    }

}
export function getAllTypeDiets(){
    return async function(dispatch){

        try {
            let allTypeDiets = await axios.get(
                `http://localhost:3001/diets/allTypeDiets`
            )
          
            return dispatch({
                type : ALL_TYPE_DIETS,
                payload : allTypeDiets.data
            })
        } catch (error) {
            throw Error(error)
        }
        
            }
}