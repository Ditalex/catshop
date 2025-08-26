import { useCart } from "../src/CartContext";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  if (cart.length === 0) return <h2>El carrito está vacío</h2>;

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cart.map((item) => (
        <div key={item.id} className="flex justify-between border-b py-2">
          <span>{item.name} (x{item.quantity})</span>
          <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
        </div>
      ))}
      <button onClick={clearCart} className="bg-red-500 text-white px-3 py-1">
        Vaciar carrito
      </button>
    </div>
  );
};

export default Cart;
