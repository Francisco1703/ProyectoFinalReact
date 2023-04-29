import "./Cart.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { carrito, vaciarCarrito, totalCantidad } = useContext(CarritoContext);

  const total = carrito.reduce(
    (total, producto) => total + producto.item.precio * producto.cantidad,
    0
  );

  if (totalCantidad === 0) {
    return (
      <>
        <h2 className="h2Cart"> NO HAY PRODUCTOS EN EL CARRITO </h2>
        <Link className="linkProductos" to="/">
          <img
            className="imgFlecha"
            src="../img/flecha.png"
            alt="Flecha de regreso"
          />
          Productos
        </Link>
      </>
    );
  }

  return (
    <div className="divCart">
      <div className="direction">
        {carrito.map((producto) => (
          <CartItem key={producto.id} {...producto} />
        ))}
      </div>
      <h3 className="totalCompra"> Total: ${total} </h3>
      <div className="juntos">
        <button className="vaciarCarrito" onClick={() => vaciarCarrito()}>
          Vaciar Carrito
        </button>
        <Link className="finalizarCompra" to="/checkout">
          Finalizar Compra
        </Link>
        <Link className="continuarComprando" to="/">
          Continuar Comprando
        </Link>
      </div>
    </div>
  );
};

export default Cart;
