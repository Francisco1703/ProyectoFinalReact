import { useState, createContext } from "react";

export const CarritoContext = createContext({ carrito: [] });

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  console.log(carrito);

  const agregarProducto = (item, cantidad, id) => {
    if (!yaEstaEnCarrito(item.id)) {
      setCarrito((prev) => [...prev, { item, cantidad }]);
    } else {
      console.log("Producto ya agregado");
    }
  };

  const eliminarProd = (id) => {
    const carritoActualizado = carrito.filter((prod) => prod.item.id !== id);
    setCarrito(carritoActualizado);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const yaEstaEnCarrito = (id) => {
    return carrito.some((prod) => prod.id === id);
  };

  const totalCantidad = carrito.reduce(
    (total, producto) => total + producto.cantidad,
    0
  );

  const total = carrito.reduce(
    (total, producto) => total + producto.item.precio * producto.cantidad,
    0
  );

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        totalCantidad,
        total,
        eliminarProd,
        vaciarCarrito,
        agregarProducto,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
