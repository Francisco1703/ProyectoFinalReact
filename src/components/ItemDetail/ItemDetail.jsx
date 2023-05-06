import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { useContext } from "react";

const ItemDetail = ({ id, nombre, precio, img, stock, descripcion }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { agregarProducto } = useContext(CarritoContext);

  const handlerCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    const item = { id, nombre, precio, img };
    agregarProducto(item, cantidad);
  };

  return (
    <div className="contenedorItem">
      <div className="divisor">
        <img className="imgProduct" src={img} alt={nombre} />
      </div>
      <div className="card ms-2 ms-md-4">
        <h2 className="name"> {nombre} </h2>
        <h3 className="price"> Precio : ${precio} </h3>
        <h3 className="id">ID: {id} </h3>
        <p className="descripcion">{descripcion}</p>
        {agregarCantidad > 0 ? (
          <Link className="terminarCompra" to={"/cart"}>
            {" "}
            Terminar Compra
          </Link>
        ) : (
          <ItemCount inicial={1} stock={stock} onAdd={handlerCantidad} />
        )}
        {agregarCantidad > 0 ? (
          <Link className="seguirComprando" to={"/"}>
            Seguir Comprando
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default ItemDetail;
