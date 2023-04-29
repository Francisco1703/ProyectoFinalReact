import "./CartWidget.css";
import React from "react";
import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalCantidad } = useContext(CarritoContext);

  return (
    <div>
      <Link className="totalCantidad" to={"/cart"}>
        <img className="imgCarrito" src="../img/carrito.png" alt="Carrito" />
        {totalCantidad}
      </Link>
    </div>
  );
};

export default CartWidget;
