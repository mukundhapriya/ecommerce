import "./CartModal.css";

function CartModal({
  cart,
  onClose,
  onCheckout,
  increaseQty,
  decreaseQty,
}) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div
        className="cart-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        <div className="cart-header">
          <h2>🛒 Your Cart</h2>
          <span className="cart-close" onClick={onClose}>✕</span>
        </div>

        {/* EMPTY CART */}
        {cart.length === 0 && (
          <p className="empty-cart">Cart is empty</p>
        )}

        {/* ITEMS */}
        {cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <span className="item-name">{item.name}</span>

            {/* ➖ ➕ CONTROLS */}
            <div className="qty-controls">
              <button onClick={() => decreaseQty(item.id)}>-</button>
              <span>{item.qty}</span>
              <button onClick={() => increaseQty(item.id)}>+</button>
            </div>

            <span className="item-price">
              ₹{item.price * item.qty}
            </span>
          </div>
        ))}

        {/* TOTAL */}
        <div className="cart-total">
          Total Amount: <strong>₹{total}</strong>
        </div>

        {/* ACTIONS */}
        <div className="cart-actions">
          <button className="pay-btn" onClick={onCheckout}>
            Proceed to Payment
          </button>
          <button className="continue-btn" onClick={onClose}>
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
