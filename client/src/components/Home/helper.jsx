import React from 'react';
import { paginado } from '../../redux/actions/actions';
import { useDispatch } from 'react-redux';

import './boton.css'


export default function Paginado({
  tamañoRecipe,
  tamañoPorpagina,
  pageactual,
}) {
  const dispach = useDispatch();
  const pageNumbers = [];
  for (let i = 0; i < Math.ceil(tamañoRecipe / tamañoPorpagina); i++) {
    pageNumbers.push(i + 1);
  }

  function handelClickpage(numero) {
    dispach(paginado(numero));
  }

  /* next */
  function handleClickNext() {
    if (pageactual < pageNumbers.length) {
      dispach(paginado(pageactual + 1));
    } else {
      alert('there are no more pages');
    }
  }
  function handleClickPreview() {
    if (pageactual > 1) {
      dispach(paginado(pageactual - 1));
    } else {
      alert('there are no more pages');
    }
  }

  return (
    <div className='containerButton' >
      {pageactual>1?( <button className='paginado2' onClick={handleClickPreview}>
       Back
      </button>):(<></>)}
     
      {pageNumbers.map((page) => {
        return (
          <button className={`paginado1 ${
            page === pageactual ? 'active' : 'paginado'
          }`}
            key={page}
            onClick={() => handelClickpage(page)}
          >
             {page}
           
          </button>
        );
      })}
      <label className='cantPage' >de {pageNumbers.length} </label>
      {pageactual<pageNumbers.length?(<button className='paginado2' onClick={handleClickNext}>
        Next
      
      </button>):(<></>)}
      
    </div>
  );
}