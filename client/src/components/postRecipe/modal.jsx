import styles from './post.module.css'
import './boton.css'
import { useDispatch } from 'react-redux'

export default function Modal(props){
const dispatch =useDispatch();
console.log(props)
const closeModal = () =>{
    dispatch(props.setModal(false))
}
    return(
        <div className={styles.cmodal}>
    
        <div className={styles.modal}>
  
    <div>
    <h1>Congratulations!</h1>
    </div>
<div>
<h4>The new recipe has been saved</h4>
</div>
<div><button className='boton' onClick={()=>props.modal()} >Accept</button></div>
</div>
</div>
    )
}