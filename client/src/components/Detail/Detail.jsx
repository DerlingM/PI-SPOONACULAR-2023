import Carddetails from "./Carddetails";
import style from './Carddetail.module.css'
import { useDispatch , useSelector, useStore} from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { getRecipeById } from "../../redux/actions/actions";
import { useParams } from "react-router-dom";
import Loader from '../Loading/Loader.jsx'
import '../Loading/Loader.css'

import { connect } from "react-redux";

export  function  Detail(props){
 
  let  recipes =  props.details;
const [Loading,setLoading] = useState(true);
const [Details,setDetails] = useState({});
  const dispatch = useDispatch();
const {detailId} = useParams();
let res = useSelector(state => state.Details)
useEffect(()=>{
  fetch(`http://localhost:3001/recipe/recipeId/${detailId}`)
  .then((response )=> response.json())
  .then((details) =>{
  
     
      setDetails(details)
    setLoading(false)
  }).catch((err)=>{
    window.alert("No hay detalles");
  })
  return setDetails({}); 

  
  },[detailId]);
  



  
     return(
      <div > 
     
     {Loading && <div className={style.conteinerloading}> <Loader/></div> }
 {Details.id&&(<Carddetails 
           id={Details.id}
           title={Details.title}
           healtScore = {Details.healtScore}
           summary = {Details.summary}
           image = {Details.image}
           Diets={Details.Diets}
           steps = {Details.analyzedInstructions}
           />)
            } 
         
         </div>
          
         )   
      

}

export  function mapStateToProps(state){
  return{
    details :  state.Details
  }

}
 export function mapDispatchToProps(dispatch){
    
    return{
        getRecipeBy: function(id){
         dispatch(getRecipeById(id))
      }
  }
   } 


export default connect(mapStateToProps,mapDispatchToProps)(Detail);