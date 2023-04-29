import "./CartItem.css";

const CartItem = ({ item, cantidad }) => {
  return (
    <div className="cartItem">
      <img className="imgCart" src={item.img} alt="Imagen" />
      <h4 className="nombreCart">{item.nombre}</h4>
      <p className="cantidadCart"> Cantidad: {cantidad} </p>
      <p className="precioCart"> ${item.precio} </p>
      <p className="idCart"> ID: {item.id} </p>
    </div>
  );
};

export default CartItem;
