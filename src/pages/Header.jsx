import React from 'react';
import { Link } from "react-router-dom";

export default function Header() {
  const linkStyle = {
    margin: "0 10px",
    textDecoration: "none",
    color: "#000000ff",      
    fontWeight: "bold",
    fontSize: "16px",
  };

  const linkHover = {
    textDecoration: "underline",
    color: "#4f4400ff",
  };

  return (
    <header style={{ marginBottom: "30px" }}>
      <h1 style={{ textAlign: "center", marginTop: "20px", fontFamily: "Arial, sans-serif", color: "#333" }}>
        Welcome to CreoShop
      </h1>

      <nav style={{ textAlign: "center", marginTop: "15px" }}>
        <Link  to="/" style={linkStyle}  >
          Home
        </Link>
        |
        <Link to="/cart"  style={linkStyle}  >
          Cart
        </Link>
      </nav>
    </header>
  );
}
