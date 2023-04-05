import './App.css';
import Postrecipe from './components/postRecipe/Postrecipe.jsx';
import  Home  from './components/Home/Home';
import Navbar from './components/Home/Navbar/Navbar';
import {  useEffect } from 'react'
import {  Route, Routes, useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Detail from './components/Detail/Detail';
import Principal from './components/Principal/Principal';
function App() {
  const location = useLocation();
  const navigate = useNavigate();
useEffect(()=>{
  navigate('/Principal');
},[])

  return (
    <div>
       {location.pathname ==='/home'&&  < Navbar />}
      <Routes>
        <Route path='/' />
        <Route path='/home' element={<Home/>} />
        <Route path='/detail/:detailId' element = {<Detail/>}/>
        <Route path='/recipe/postRecipe' element = {<Postrecipe/>}/>
        <Route path='/Principal' element={<Principal/>}/>
     </Routes>
    </div>
  )
}

export default App;
