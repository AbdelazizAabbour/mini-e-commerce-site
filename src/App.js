import React from 'react';
import Home from './pages/Home';
import Cart from './pages/Cart';
function App() {
  return (
    <div >
      <h1
        style={{ textAlign: "center", marginTop: "20px", fontFamily: "Arial, sans-serif", color: "#333", }}>
        Hello to your store CreoShop
      </h1>
      <br></br>
      <Home />
      <hr></hr>
      <Cart />
    </div>
  );
}

export default App;
