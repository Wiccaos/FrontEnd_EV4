import React, { useState } from 'react';

function RecetasAleatorias({ agregarReceta }) {
  const [cargando, setCargando] = useState(false);

  const obtenerRecetaAleatoria = async () => {
    setCargando(true);
    
    try {
      const respuesta = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
      const datos = await respuesta.json();
      
      if (datos.meals && datos.meals[0]) {
        const receta = datos.meals[0];
        agregarReceta({
          titulo: receta.strMeal,
          desc: receta.strInstructions,
        });
      }
    } finally {
      setCargando(false);
    }
  };

  return (
      <button className='boton-receta' onClick={obtenerRecetaAleatoria}> Mostrar receta aleatoria</button>
  );
}

export default RecetasAleatorias;