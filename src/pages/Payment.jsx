import { useNavigate } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>💳 Payment</h2>

      <p>Select payment method (Demo)</p>

      <div style={{ marginBottom: "15px" }}>
        <label>
          <input type="radio" name="payment" defaultChecked /> Cash on Delivery
        </label>
        <br />
        <label>
          <input type="radio" name="payment" /> UPI
        </label>
        <br />
        <label>
          <input type="radio" name="payment" /> Card
        </label>
      </div>

      <button
        style={{
          padding: "10px",
          width: "100%",
          background: "green",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
        onClick={() => navigate("/order-status")}
      >
        Pay Now (Demo)
      </button>
    </div>
  );
}

export default Payment;
