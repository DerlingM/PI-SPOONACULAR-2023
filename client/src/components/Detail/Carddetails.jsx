import style from './Carddetail.module.css'
import { Link } from 'react-router-dom'


export default  function Carddetails(props){

    return (<div className={style.container} > 
<div><h2 className={style.title} >{props?.title}</h2> </div>


<div className={style.grid} >
          {/*--------------------------------------*/}
 <div className={style.Content} >
<div className={style.image}>
<img  src={props?.image} alt="img not found" /> 
</div>
   
    <h2 >HealtScore : {props?.healtScore} </h2>
    <h2 >Diets </h2>
    <div className={style.Diets} >

    {
    props.Diets.length?(props.Diets[0].title?(
    props.Diets.length?props.Diets.map((e) =>(
    <p className={style.p} key={e.title}  >{e.title} </p>
    )):(<></>)
    ) : (

    props.Diets.length?props.Diets.map((e) =>(
    <p key={e} className={style.p}>{e} </p>
    )):(<></>)
    )):(<h2>No Diets</h2>)
    }

    </div>
</div>
{/*--------------------------------------*/}
<div className={style.Content} >
          <h1>Summary</h1>
          <div className={style.text}  ><p>{props.summary}</p>  </div>
          <div>  <h1>Step by Step</h1>
      {props.steps.map((a)=>(
            <p className={style.text} key={a} > {a.length>0?(a):(<></>)} </p>
      )
    
      )} </div>
          </div>
          
    
</div>
          
  
   
      
    
       
    
    <div  className={style.btnBack}>
    <Link to={`/home`} >
    <button className={style.button} >Back</button> 
        </Link>  
        
        </div>
    </div>
        
           ) 
}
