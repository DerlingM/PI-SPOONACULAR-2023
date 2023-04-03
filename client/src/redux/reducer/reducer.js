import { ALL_RECIPES,POSTRECIPE,PAGE,ORDER_BY_HEALTSCORE,SEARCH_RECIPE_BYNAME,NO_RECIPE, ORDER_BY_NAME, FILTERBY_DBORAPI, GET_RECIPE_BYID,GET_TYPE_DIET,ALL_TYPE_DIETS } from "../actions/types";

const initialState = {
   
    allRecipes: [],
    Details:{},
    cpAllrecipes: [],
    allTypeDiets : [],
    apiDb:'',
    page: 1,
    stat :0
};
function rootReducer(state=initialState, {type,payload}){
    switch (type) {
        case ALL_RECIPES:
            return {...state,
                allRecipes: payload,
                cpAllrecipes: payload
                }
        

        case GET_TYPE_DIET:{
            return{
                ...state,
                allRecipes :payload,
                page :1
            }
        }
        case POSTRECIPE:
            return{
                ...state,
                  stat : payload,
            }
     
        case GET_RECIPE_BYID:{
            
            return{
                ...state,
                Details : payload

            }
        }
        case PAGE: {
            return {
              ...state,
              page: payload,
            };
          }
            
            case SEARCH_RECIPE_BYNAME:{
                return{
                    ...state,
                    allRecipes : payload,
                    page: state.page < payload.length ? state.page : 1,
                    }
            }
               
                case NO_RECIPE:{
                    return{
                        ...state,
                        allRecipes : []
                    }
                }
                  

                case ORDER_BY_HEALTSCORE:{
     let orderScore = [...state.allRecipes];
     let OrderCopy =[];
                    if(payload === 'lowest'){
                     
                        OrderCopy  = orderScore.sort(function(a,b){
                            console.log(a.healtScore)
                            if(a.healtScore > b.healtScore){ return 1;}
                            if(a.healtScore < b.healtScore){ return -1;}
                            else {return 0;}
                        })
                        
                    }
                    if(payload === 'highest'){
                     
                        OrderCopy  = orderScore.sort(function(a,b){
                            console.log(a.healtScore)
                            if(a.healtScore > b.healtScore){return -1;}
                            if(a.healtScore < b.healtScore) {return 1;}
                            else {return 0;}
                        })
                    }  
                   
                  /*   const allRecipesCopy = [...state.allRecipes]
                    const order = allRecipesCopy.sort((a,b) => {
                        console.log(payload)
                        if(a.healtScore > b.healtScore){
                            return payload === "ascendente" ? 1 : -1
                        }
                        if(a.healtScore < b.healtScore){
                            return payload === "descendente" ? -1 : 1
                        }
                        else return 0
                    }); */
    /*  let sortscore = payload === 'ascendente'
          ? state.allRecipes.sort(function (a, b) {
            console.log(a.healtScore)
              if (a.healtScore > b.healtScore) return 1;
              if (a.healtScore < b.healtScore) return -1;
              else return 0;
            })
          : state.allRecipes.sort(function (a, b) {
            console.log(a.healtScore)
              if (a.healtScore > b.healtScore) return -1;
              if (a.healtScore < b.healtScore) return 1;
              else return 0;
            });  */

      return {
        ...state,
        allRecipes: OrderCopy,
       
      };
                }
                
       case ORDER_BY_NAME:{
        let orderScore = [...state.allRecipes];
     let OrderCopy =[];
                    if(payload === 'ascendente'){
                     
                        OrderCopy  = orderScore.sort(function(a,b){
                          
                            if(a.title > b.title){ return 1;}
                            if(a.title < b.title){ return -1;}
                            else {return 0;}
                        })
                        
                    }
                    if(payload === 'descendente'){
                     
                        OrderCopy  = orderScore.sort(function(a,b){
                            
                            if(a.title > b.title){return -1;}
                            if(a.title < b.title) {return 1;}
                            else {return 0;}
                        })
                    }   
        return{
            ...state,
            allRecipes: OrderCopy,
        } 
       }
               
        case FILTERBY_DBORAPI:
          
            const copyRecipeADb = [...state.cpAllrecipes]
            let filter;
            if(payload === 'db'){
              filter= copyRecipeADb.filter(Rel =>
                {
                    if(Rel.Diets.length){
                       return Rel.Diets[0].title
                    }
                    
                }
                 )

            }
            else if(payload ==='api'){
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
            }
            else if(payload==='All'){
                filter = copyRecipeADb
                
            }
            return{
                ...state,
                allRecipes : filter,
                page :1
                
            }
          
            case ALL_TYPE_DIETS:{
                return{
                    ...state,
                    allTypeDiets : payload
                    }
            }
        default:
          return state
           
          

    }
}












export default rootReducer;