import style from './Card.module.css'
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

import './cinta.css'
export  function Card(props){



return(
    <div className={style.card} >
 <div className={style.condbapi}>
 {
           props.Diets.length?( props.Diets[0].title?(
               <div  >DB </div>
            ):(<div >API </div>)):(<div >API </div>)
}
    
 </div>
       
    
     
    <h2 className= {style.Title} >{props?.title}</h2> 
    
     <h2 className={style.text} >healtScore : {props?.healtScore} </h2>
     <img className={style.image}  src={props?.image} alt="img not found" /> 
    <div className={style.Diets}>
        { 
         props.Diets.length?(props.Diets[0].title?(
                props.Diets.length?props.Diets.map(e =>
                    <p className={style.p} key={e.title} >{e.title} </p>
                   ):(<></>)
             ) : (
                props.Diets.length?props.Diets.map((e) =>(
                    <p className={style.p} key={e}  >{e} </p>
                   )):(<></>)
             )):(<h2>No Diets</h2>)     
        }
  
    </div>
    <div className={style.contButton} >
    <Link to={`/detail/${props.id}`} >
        <button  className={style.button} >
        <span>  Details</span>
        </button></Link>  
    </div>
  
    
  
  </div>
);
  
}

/* export function mapDispatchToProps(dispatch){
    onClick={()=>props.getRecipeBy(props.id)}
    return{
        getRecipeBy: function(id){
         dispatch(getRecipeById(id))
      }
  }
   } */
  
  export default connect(null,null)(Card);