import "./CartItem.css";
import { CarritoContext } from "../../context/CarritoContext";
import { useContext } from "react";

const CartItem = ({ item, cantidad }) => {
  const { eliminarProd } = useContext(CarritoContext);

  return (
    <div className="cartItem">
      <img className="imgCart" src={item.img} alt="Imagen" />
      <h4 className="nombreCart">{item.nombre}</h4>
      <p className="cantidadCart"> Cantidad: {cantidad} </p>
      <p className="precioCart"> ${item.precio} </p>
      <p className="idCart"> ID: {item.id} </p>
      <button className="btnEliminarProd" onClick={() => eliminarProd(item.id)}>
        X
      </button>
    </div>
  );
};

export default CartItem;
