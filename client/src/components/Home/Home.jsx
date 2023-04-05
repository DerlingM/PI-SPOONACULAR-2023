import { getAllRecipes} from "../../redux/actions/actions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import  Card  from "../Card/Card";
import styles from "./Cards.module.css"

import Paginado from "./helper";
import Cardnorecipe from "../Card/Cardnorecipe";
import Loader from '../Loading/Loader.jsx'


export default function Home() {
 
    let recipes = useSelector(state => state.allRecipes)
   const [loading,setLoading] = useState(true)
    const page = useSelector((state) => state.page);
    let Promesa = new Promise(function(resolve,rejected){
        if(recipes.length ){
            resolve(recipes)
        }
        
    })
    Promesa.then(a=>{
     
        setLoading(false)
    })
    let currenRecipes = [];
    const tamañoRecipe = recipes.length;
    const tamañoPorpagina = 9;
    let indexFinal = tamañoPorpagina * page; // 9 x pagina
    let inicial = indexFinal - tamañoPorpagina; // 9-9=0
    currenRecipes = recipes.slice(inicial, indexFinal);

    const dispatch = useDispatch();
    useEffect(()=>{
   
        dispatch(getAllRecipes());
      
    },[dispatch])

    return(
        
        <>
        
      
        <div className={styles.container}>
       
            <div className={styles.containerPag} >   <Paginado 
        tamañoRecipe={tamañoRecipe}
        tamañoPorpagina={tamañoPorpagina}
        pageactual={page}
        /></div>
         {loading &&  <div className={styles.conteinerloading} ><Loader/></div>}
    
            <div className={styles.cards}>
          
                 {currenRecipes.length<=0 && <Cardnorecipe/>}
                {
                    
                currenRecipes?.map(res => <Card key={res.id}
                    id={res.id}
                    title={res.title}
                    healtScore={res.healtScore}
                    summary={res.summary}
                    image={res.image}
                    
                    Diets={res.Diets} />
                )
                
                }


            </div>

        </div></>
           ) 
}
