import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import ProductsScreen from "./screens/ProductsScreen";
import SingleProduct from "./screens/SingleProduct";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<LoginScreen />}></Route>
        <Route path="/" element={<ProductsScreen />}></Route>
        <Route path="/product/:id" element={<SingleProduct />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
