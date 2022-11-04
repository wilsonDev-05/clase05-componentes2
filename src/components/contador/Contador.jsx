import './contador';
import React, { useState } from 'react';
/* useState: primer hoock de clase, permite guardar variables en memoria y pdoer ser modificadas.
un hook es una funcion que devuelve (siempre) un array con 2 elementos. */

const Contador = () => {
  /* useState: declaracion de varaible estado, la cual llamamos "count". 
  "count": estado actual de la variable
  "setCount": funcion que se utiliza para acraulizar nuestro estado 
  "useState()" declaracion del valor por defecto
  */
  const [count, setCount] = useState(1);

  // function
  function modifCount(operation) {
    if (operation === '+') {
      if (count < 10) {
        // producto.stock(dependiendo la cantidad de productos que tengo en stock)
        setCount(count + 1);
      }
      /* no se puede hacer, count++. 00:59:09(clase-5) */
    } else {
      if (count > 1) {
        setCount(count - 1);
      }
    }
  }

  return (
    <>
      <div className="display">{count}</div>
      <button onClick={() => modifCount('+')}>+</button>
      <button onClick={() => modifCount('-')}>-</button>
    </>
  );
};

export default Contador;
