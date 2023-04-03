import { useState } from "react";
import { postNewRecipe } from "../../redux/actions/actions";

import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function useFormValidation (initialForm,validateForm){
 const navigate = useNavigate();
const dispatch = useDispatch();

    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({})
    const [loading,setLoading] = useState(false);
    const [response,setResponse] = useState(null);
    const [modal,setModal] = useState(false);
    const [bt,setbt] = useState(false);
    let status = useSelector(state => state.stat)
    let arrayDiets = []
    let arrayStep =[]
    const Diets=(e) =>{
        if(!form.diets.includes(e.target.value)){
            setForm({
                ...form,
                 diets: [...form.diets, e.target.value]
                 
              })
        }
        else{
            window.alert('Esta dieta ya esta agregada')
        }
        setErrors(validateForm(form))
        
    }
    const elimDiets=(e) =>{
       console.log(e)
       
        let newDiets = form.diets.filter(Res=> Res!= e )
          setForm({
            ...form,
            diets : newDiets
          }) 
    }

    const handleInputChange = (e) =>{
  e.preventDefault()
 
    setForm({
        ...form,
        [e.target.name]:e.target.value,
       
    })

    setErrors(validateForm(form))
    }
    const handleBlur = (e) =>{
        if(Object.keys(errors).length ===0){
            setbt(true)
          }
          else{
            setbt(false)
          }
        handleInputChange(e);
        handleSteps(e)
        setErrors(validateForm(form))
    }
    const handleSteps = (e)=>{
     
         setForm({
            ...form,
            analyzedInstructions:e.target.value.split('.')
             
          })
          setErrors(validateForm(form))
          console.log(form);
    }
    const handleSubmit = e =>{
       
        e.preventDefault();

     console.log(form);
        setErrors(validateForm(form))
    
        if(Object.keys(errors).length ===0){
     dispatch (postNewRecipe(form))
        setModal(true)
    
        }else{
            return;
        }
        if(status == 201){
            //window.alert("New recipe added")
          setModal(true)
           navigate('/home');
        }
    }
    const closeModal=()=>{
        setModal(false)
      navigate('/home')
    }

    return {
        form,
        errors,
        loading,
        response,
        bt,
        closeModal,
        modal,
        Diets,
        elimDiets,
        handleSteps,
        handleInputChange,
        handleBlur,
        handleSubmit
    };

}