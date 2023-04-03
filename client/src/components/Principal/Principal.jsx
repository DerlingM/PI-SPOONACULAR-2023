import { Link } from "react-router-dom"
import styles from './principal.module.css'
export default function Principal(){




    return(
        <div className={styles.containerP} >
                   

    <div className={styles.container} >
        <div> <h1>Mario Derling Lopez Jimenez</h1></div>
  
        <div>
            <p>hello, this is (PI) commissioned by Henry's teachers, 
                where I have used the knowledge that I have acquired during the bootcamp, 
                and some more that I gave myself the task of investigating, 
                to be able to finish the project and it will be to my liking,
                 without More to tell you, I hope it meets your expectations.</p>
        </div>
    
        <div>
         <h2>PI Spoonacular Henry 2023</h2>
        </div>
       
        <Link to={`/home`} >
        <button className={styles.button} ><span> Get started</span>
           
            </button> 
        </Link>
      
        </div>
        
      


 
        </div>

    )
}



