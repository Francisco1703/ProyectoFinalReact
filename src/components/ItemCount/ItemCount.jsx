import "./ItemCount.css";
import { useState } from "react";

const ItemCount = ({ inicial, stock, onAdd }) => {
  const [contador, setContador] = useState(inicial);

  const restar = () => {
    if (contador > inicial) {
      setContador(contador - 1);
    }
  };

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  return (
    <>
      <div className="buttons">
        <button className="btnCambiarValor" onClick={restar}>
          {" "}
          -{" "}
        </button>
        <p className="contador"> {contador} </p>
        <button className="btnCambiarValor" onClick={sumar}>
          {" "}
          +{" "}
        </button>
      </div>
      <button className="btnAgregarAlCarrito" onClick={() => onAdd(contador)}>
        {" "}
        Agregar al Carrito{" "}
      </button>
    </>
  );
};

export default ItemCount;
