import style from './Navbar.module.css'
import './nav.css'
import SearchBar from '../Search/SearchBar'
import { useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllTypeDiets } from '../../../redux/actions/actions';
import { orderByScore,orderByName, filterByDBorApi,getRecipeByDiet } from '../../../redux/actions/actions';
import { useEffect, useState } from "react";


export default function Navbar(){
 const dispatch = useDispatch();
 useEffect(()=>{
  dispatch(getAllTypeDiets())
},[])
const [typeFilter,setTypeFilter] = useState('No filter')


    let TypeDiets = useSelector(state => state.allTypeDiets)
     let recipes = useSelector(state => state.allRecipes) 
     console.log('cantidad',recipes)
/*     function handleOrderScore(e) {
        dispatch(orderByScore(e.target.value));
      }
      function handleOrderByName(data){
        dispatch(orderByName(data.target.value))
      } */
      function handleFilter(data){
        dispatch(filterByDBorApi(data.target.value))
        if(data.target.value==='All'){
          setTypeFilter('No filter')
        }
      }
      function handleFilterDIet(data){
       
          dispatch(getRecipeByDiet(data.target.value))
          if(data.target.value==='All'){
            setTypeFilter('No filter')
          }
       
    
      }
    
function MultipleOrder(data){
 if(data.target.value ==="ascendente" || data.target.value ==="descendente"){
  dispatch(orderByName(data.target.value))
 }
 else if(data.target.value ==="highest" || data.target.value ==="lowest"){
  dispatch(orderByScore(data.target.value));
 }
 }

 function MultiFilter(data){
if(data.target.value==='No filter'){
  dispatch(getRecipeByDiet('All'))
  dispatch(filterByDBorApi('All'))
  setTypeFilter('No filter');
}else if(data.target.value==='Diets'){
  setTypeFilter('Diets')
}
else{
  setTypeFilter('DBORAPI')
}
 }





    return(
      
        <div className={style.Nav} > 
        <div className={style.container} >


<div className={style.ContentDiv} >
            <Link to={`/recipe/postRecipe/`} >
            <button className={style.button} >
            <span>  Create Recipe</span>
            </button></Link> 
            </div>

            


      <div className={style.ContentDiv}>
        <SearchBar/>
      </div>
      <div  className={style.ContentDiv}>
        <input className={style.check} type='checkbox' id="check" />
        <div className={style.barritas} >  
          <label htmlFor="check">
          <div></div>
          <div></div>
          <div></div>
          </label>
          </div>
      

       
      <div className={style.Avtivateoptions} >
        <div>
          
        <span> Order by :   </span>
         
         <select className={style.selectbox}  onChange={MultipleOrder} name="Mult" id="Mult">
         <option defaultValue='default' >Select option</option>
         <option value="ascendente">Order A-Z</option>
     <option value="descendente">Order Z-A</option>
     <option value="highest">highest health score</option>
     <option value="lowest">lowest health score</option>
   </select>
        </div>
    
      <div>   <span>  Filters by :  </span>
      {typeFilter==='No filter'?(<select className={style.selectbox} onChange={MultiFilter} name="dbapi" id="dbapi">
            <option value="No filter">No filter</option>
            <option value="Diets">Diets</option>
            <option value="DBORAPI">DB or API</option>
      </select>):(<></>)}
      {typeFilter==='Diets'?(
          <select className={style.selectbox} onChange={handleFilterDIet} name="diet" id="diet">
           
          <option value='All'>All</option>
          
          {
            TypeDiets.length?TypeDiets.map(a=>
              <option className={style.select} key={a.title}>{a.title} </option>
    
            ):(<></>)
          }
          </select>
      ):(<></>)}  
    
             {
         typeFilter==='DBORAPI'?(
        
            <select className={style.selectbox} onChange={handleFilter} name="dbapi" id="dbapi">
            <option value="All">All</option>
        <option value="db">Database</option>
        <option value="api">Api</option>
      </select> ):(<></>) } 
      </div>
        </div>
      </div>
        </div>
           </div>
           ) 
}