import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../services/firebase/config";
import { collection, addDoc } from "firebase/firestore";
import "./Checkout.css";

const Checkout = () => {
  const { carrito, vaciarCarrito, total } = useContext(CarritoContext);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState("");
  const [error, setError] = useState("");
  const [ordenId, setOrdenId] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError("Por favor, complete todos los campos");
      return;
    }

    if (email !== emailConfirmacion) {
      setError("Los campos del email no coinciden");
      return;
    }

    const orden = {
      items: carrito.map((producto) => ({
        id: producto.item.id,
        nombre: producto.item.nombre,
        cantidad: producto.cantidad,
      })),

      total: carrito.reduce(
        (total, producto) => total + producto.item.precio * producto.cantidad,
        0
      ),
      nombre,
      apellido,
      telefono,
      email,
    };

    if (orden.total === 0) {
      setError(
        "Lo sentimos, debe tener productos en el carrito para poder realizar una compra"
      );
      setApellido("");
      setNombre("");
      setEmail("");
      setEmailConfirmacion("");
      setTelefono("");
      return;
    }

    addDoc(collection(db, "ordenes"), orden)
      .then((docRef) => {
        setOrdenId(docRef.id);
        vaciarCarrito();
      })
      .catch((error) => {
        console.error("Error al crear la orden", error);
        setError(
          "Se produjo un error al crear la orden, vuelva a intentarlo en unos minutos"
        );
      });

    setNombre("");
    setApellido("");
    setTelefono("");
    setEmail("");
    setEmailConfirmacion("");
    setError("");
  };

  return (
    <div>
      <h2 className="title"> CHECKOUT </h2>
      <form className="formCheckout" onSubmit={handleSubmit}>
        <div className="divEstructura">
          {carrito.map((producto) => (
            <div className="divProductos" key={producto.item.id}>
              <img
                className="imgCheckout"
                src={producto.item.img}
                alt={producto.item.nombre}
              />
              <p className="pValores">
                {producto.item.nombre} x {producto.cantidad}
              </p>
              <p className="pValores">
                Precio unitario: ${producto.item.precio}
              </p>

              <hr />
            </div>
          ))}
        </div>
        <div>
          <p className="totalCheckout">
            {" "}
            <span className="spanTotal">Total:</span> ${total}{" "}
          </p>
        </div>

        <hr />
        <div className="divTitles">
          <label className="titlesCheck" htmlFor="nombre">
            {" "}
            Nombre{" "}
          </label>
          <input
            id="nombre"
            className="inputCheck"
            placeholder="nombre"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="divTitles">
          <label className="titlesCheck" htmlFor="apellido">
            {" "}
            Apellido{" "}
          </label>
          <input
            id="apellido"
            className="inputCheck"
            placeholder="apellido"
            type="text"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>

        <div className="divTitles">
          <label className="titlesCheck" htmlFor="telefono">
            {" "}
            Teléfono{" "}
          </label>
          <input
            id="telefono"
            className="inputCheck"
            placeholder="telefono"
            type="text"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>

        <div className="divTitles email">
          <label className="titlesCheck" htmlFor="email">
            {" "}
            Email{" "}
          </label>
          <input
            id="email"
            className="inputCheck"
            placeholder="Ex: Lorem@gmail.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="divTitles emailConfirmacion">
          <label className="titlesCheck " htmlFor="emailConfirmacion">
            {" "}
            Email Confirmación{" "}
          </label>
          <input
            id="emailConfirmacion"
            className="inputCheck"
            placeholder="Ex: Lorem@gmail.com"
            type="email"
            value={emailConfirmacion}
            onChange={(e) => setEmailConfirmacion(e.target.value)}
          />
        </div>
        {error && <p className="textoError"> {error} </p>}
        <button className="btnCheckout" type="submit">
          {" "}
          Finalizar Compra{" "}
        </button>
        <Link to={"/"}>
          <button className="btnVolver">Volver a Inicio</button>
        </Link>
      </form>

      {ordenId && (
        <strong className="strongOrden">
          ¡Gracias por tu compra! Tu número de orden es:{" "}
          <span className="numeroOrden"> {ordenId} </span>
        </strong>
      )}
    </div>
  );
};

export default Checkout;
