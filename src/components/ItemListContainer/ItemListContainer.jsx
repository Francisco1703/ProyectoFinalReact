import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, where, query, doc } from "firebase/firestore";
import { db } from "../../services/firebase/config";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const { idCategoria } = useParams();

  useEffect(() => {
    const misProductos = idCategoria
      ? query(collection(db, "productos"), where("idCat", "==", idCategoria))
      : collection(db, "productos");

    getDocs(misProductos)
      .then((res) => {
        const nuevosProductos = res.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });

        setProductos(nuevosProductos);
      })
      .catch((error) => console.log(error));
  }, [idCategoria]);

  return (
    <div className="bgDiv">
      <h2 className="titleListContainer"> Productos en Stock </h2>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
