import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ nombre, precio, id, img }) => {
  return (
    <div className="itemProducts">
      <img className="imgItem" src={img} alt={nombre} />
      <h1 className="nombreItem"> {nombre} </h1>
      <h3 className="precioItem"> $ {precio} </h3>
      <p className="idItem"> ID: {id} </p>
      <Link to={`/item/${id}`} className="verDetalles">
        Ver Detalles
      </Link>
    </div>
  );
};

export default Item;
