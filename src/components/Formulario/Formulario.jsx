import { useState } from "react";
import { db } from "../../services/firebase/config";
import { collection, addDoc } from "firebase/firestore";
import ReactModal from "react-modal";
import "./Formulario.css";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [modallsOpen, setModallsOpen] = useState(true);

  function closeModal() {
    setModallsOpen(false);
  }

  const handleForm = (e) => {
    e.preventDefault();

    addDoc(collection(db, "usuarios"), {
      nombre: nombre,
      apellido: apellido,
      email: email,
      telefono: telefono,
    });

    setNombre("");
    setApellido("");
    setEmail("");
    setTelefono("");

    closeModal();
  };

  return (
    <ReactModal
      className="reactModal"
      isOpen={modallsOpen}
      onRequestClose={closeModal}
    >
      <form className="formNike" onSubmit={handleForm}>
        <button onClick={closeModal} className="btnCloseForm">
          X
        </button>

        <h2 className="loginForm">LogIn</h2>
        <div className="divForm">
          <label className="label" htmlFor="nombre">
            {" "}
            Nombre{" "}
          </label>
          <input
            className="input"
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            placeholder="nombre"
          />
        </div>

        <div className="divForm">
          <label className="label" htmlFor="apellido">
            {" "}
            Apellido{" "}
          </label>
          <input
            className="input"
            type="text"
            id="apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            required
            placeholder="apellido"
          />
        </div>

        <div className="divForm emailForm">
          <label className="label" htmlFor="email">
            {" "}
            Email{" "}
          </label>
          <input
            className="input"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="email"
          />
        </div>

        <div className="divForm">
          <label className="label" htmlFor="telefono">
            {" "}
            Teléfono{" "}
          </label>
          <input
            className="input"
            type="text"
            id="telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            placeholder="telefono (ocpional)"
          />
        </div>

        <button className="btnForm" type="submit">
          Enviar
        </button>
      </form>
    </ReactModal>
  );
};

export default Formulario;
