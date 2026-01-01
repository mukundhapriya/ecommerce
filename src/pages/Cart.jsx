function Cart({ cart, increaseQty, decreaseQty }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>🛒 Your Cart</h2>

      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map((item) => (
        <div key={item.id} style={{ marginBottom: "10px" }}>
          <strong>{item.name}</strong><br />
          ₹{item.price} × {item.qty} = ₹{item.price * item.qty}
          <br />
          <button onClick={() => decreaseQty(item.id)}>-</button>
          <button onClick={() => increaseQty(item.id)}>+</button>
        </div>
      ))}

      <hr />
      <h3>Total Price: ₹{total}</h3>

      {cart.length > 0 && (
        <button
          onClick={() => alert("🚚 Order placed! Delivery started")}
        >
          Place Order
        </button>
      )}
    </div>
  );
}

export default Cart;
