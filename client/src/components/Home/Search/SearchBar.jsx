import { useDispatch} from "react-redux";
import { getRecipeByName, paginado } from "../../../redux/actions/actions";
import  style  from "./search.module.css";
export default function SearchBar(props) {

const dispatch = useDispatch();
const handleChange = e =>{
   e.preventDefault();
   const {value} = e.target

   dispatch(paginado(1))
   dispatch(getRecipeByName(value))

}
   return (
      <div className={style.container} >
        
        
          
         <input className={style.input} type='text' placeholder="Search by name" onChange={handleChange} />
    
      </div>
   );
}
