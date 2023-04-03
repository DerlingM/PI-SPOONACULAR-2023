import React from 'react'
import styles from './post.module.css'
import './boton.css'
import validation from './validation'

import {  useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import './boton.css'
import Modal from './modal.jsx'
const initialForm={
    title :'',
    healtScore:'',
    summary : '',
    image:'',
    diets:'',
    analyzedInstructions:''
}

const validationsForm =  (form) =>{
    let errors ={}
   
    let regexComments = /^.{1,255}$/;
    let regexNumber = /^[0-9]+$/;
if(!form.title.trim()){
errors.title = 'El campo Title es requerido'
}
else if(!form.healtScore.trim()){
    errors.healtScore = 'El campo HealtScore es requerido'
    }else if(!regexNumber.test(form.healtScore.trim())){
        errors.healtScore = 'El campo HealtScore solo acepta numeros'
        
    }
    else if(form.healtScore.trim()>100){
        errors.healtScore = 'El campo HealtScore No debe superar 100 puntos'
    } else if(!form.image.trim()){
        errors.image = 'El campo Url es requerido'
        }else if(!regexComments.test(form.image.trim())){
            errors.image = 'El campo "image" debe contener entre 1 y 255 caracteres'
        }
        else if(!form.summary.trim()){
            errors.summary = 'El campo Summary es requerido'
            }else if(!regexComments.test(form.summary.trim())){
                errors.summary = 'El campo "Sumary" debe contener entre 1 y 255 caracteres'
            }
else if(form.diets.length===0){
    errors.diets = 'Agrega al menos un tipo de dieta'
}

   
 
       else if(!form.analyzedInstructions){
            errors.analyzedInstructions = 'El campo Steps es requerido'
            }/* else if(!regexComments.test(form.analyzedInstructions)){
                errors.analyzedInstructions = 'El campo "Steps" debe contener entre 1 y 255 caracteres'
            } */
          




    return errors
}
export default function UsePostRecipe(){
    let TypeDiets = useSelector(state => state.allTypeDiets)
   
    
const {  
    form,
    errors,
    bt,
    closeModal,
    handleSteps,
    modal,
    handleInputChange,
    Diets,
elimDiets,
    handleBlur,
    handleSubmit} = validation(initialForm,validationsForm)
  


        return(
            <div  className={styles.container}>
                
              { modal &&  <Modal modal={closeModal} />}



   
                <form className={styles.container_form}  onSubmit={handleSubmit}>
               <div className={styles.Title} ><h1>New Recipe</h1></div>
                <label>Title</label>
                 <input type='text'
                  name='title'
                  placeholder='write a title'
                  onChange={handleInputChange}
                  value={form.title}
                  onBlur={handleBlur} required 
                  className={errors.title && styles.warning}          
                  />
                  {errors.title && <p className={styles.errors} >{errors.title} </p> }
                  <br/>
{/**-------------------------------------------- */}
                   <label>HealtScore</label>
                 <input type='text'
                  name='healtScore'
                  placeholder='write score'
                  onChange={handleInputChange}
                  value={form.healtScore}
                  onBlur={handleBlur} required className={errors.healtScore && styles.warning } />
                   {errors.healtScore && <p className={styles.errors} >{errors.healtScore} </p> }
{/**-------------------------------------------- */}
{/**-------------------------------------------- */}
<label>Image</label>
                 <input type='url'
                  name='image'
                  placeholder='URL'
                  onChange={handleInputChange}
                  value={form.image}
                  onBlur={handleBlur} required className={errors.image && styles.warning } />
                   {errors.image && <p className={styles.errors} >{errors.image} </p> }
{/**-------------------------------------------- */}
                    <label>Summary</label>
               <textarea name="summary" id="summary" cols="50" rows="5"
           
               placeholder='write a summary of the recipe'
               onBlur={handleBlur}
               onChange={handleInputChange}
               value = {form.summary}
               className={errors.summary && styles.warning }
               ></textarea>
                {errors.summary && <p className={styles.errors} >{errors.summary} </p> }
{/**-------------------------------------------- */}




{/**-------------------------------------------- */}

<label>Select type Diets</label>
    <br/>
    <select  name="diets" id="diets" onChange={Diets}>
    {TypeDiets.length?TypeDiets.map(a =>
    <option 
    key={a.title}
    >{a.title} </option>
    ):(<></>)}
    </select>
    {errors.diets && <p className={styles.errors} >{errors.diets} </p> }
    <div>
    <label>List Diets</label>
    <br/>
    <div className={styles.divDiets} >
    {form.diets.length?form.diets.map(a =>
    <label key={a} className={styles.container_Diets}><p>{a}</p> <button onClick={()=>elimDiets(a)} >X</button></label>
   
 
    ):(<></>)}
    </div>
  

</div>
   <br/>

{/**-------------------------------------------- */}
                  <label>Steps</label>
                  <textarea name="analyzedInstructions" id="analyzedInstructions" cols="50" rows="5"
               
               placeholder='write the step by step, separate the steps by a comma '
               onBlur={handleBlur}
               onChange={handleSteps}
          
               className={errors.analyzedInstructions && styles.warning }
               ></textarea>

         
                {errors.analyzedInstructions && <p className={styles.errors} >{errors.analyzedInstructions} </p> }
                <br></br>
                <div className='contentbt'>
                <div> <Link to={`/home`} > <button className='boton' >Back</button> </Link></div>
                <div>{!Object.keys(errors).length && bt? (<button  type="submit" className='boton' >Create</button>):(<button className='botondis' disabled={true} >Create</button>)}</div>
              
                </div>
               
      
                </form>

               
            </div>
        )
       
}  