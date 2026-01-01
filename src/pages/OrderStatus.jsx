import { useEffect, useState } from "react";

function OrderStatus() {
  const steps = [
    "Order Placed",
    "Packed",
    "Shipped",
    "Out for Delivery",
    "Delivered",
  ];

  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (currentStep < steps.length - 1) {
      const timer = setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  return (
    <div
      style={{
        paddingTop: "80px",
        paddingLeft: "20px",
        paddingRight: "20px",
        maxWidth: "600px",
        margin: "auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center" }}>📦 Order Status</h2>

      {/* STATUS TIMELINE */}
      <div style={{ marginTop: "30px" }}>
        {steps.map((step, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <div
              style={{
                height: "26px",
                width: "26px",
                borderRadius: "50%",
                backgroundColor:
                  index <= currentStep ? "#2e7d32" : "#ccc",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "15px",
                fontWeight: "bold",
              }}
            >
              {index <= currentStep ? "✓" : ""}
            </div>

            <span
              style={{
                fontSize: "16px",
                fontWeight:
                  index === currentStep ? "bold" : "normal",
                color:
                  index <= currentStep ? "#2e7d32" : "#777",
              }}
            >
              {step}
            </span>
          </div>
        ))}
      </div>

      {/* LIVE TRACKING */}
      <div
        style={{
          marginTop: "35px",
          padding: "20px",
          borderRadius: "12px",
          background: "#f5f5f5",
          textAlign: "center",
        }}
      >
        <h3>🗺️ Live Tracking</h3>
        <p>
          Rider status: <strong>{steps[currentStep]}</strong>
        </p>

        <div
          style={{
            marginTop: "15px",
            height: "180px",
            background: "#e0e0e0",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#555",
          }}
        >
          Google Map / Live Location (Demo)
        </div>
      </div>

      {/* DELIVERY MESSAGE */}
      {currentStep === steps.length - 1 && (
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <h3 style={{ color: "#2e7d32" }}>
            🎉 Order Delivered Successfully!
          </h3>
        </div>
      )}
    </div>
  );
}

export default OrderStatus;
