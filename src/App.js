import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./PR11/Header";
import Product from "./PR11/Product";
import Cart from "./PR11/Cart";
import Login from "./PR11/Login";
// import AuthContext from "./PR11/authContext";
// import ProtectedRoute from "./PR11/routes/ProtectedRoute";
import Home from "./PR11/Home";
import Signup from "./PR11/Signup";
import ProtectedRoute from "./PR11/routes/ProtectedRoute";

function App() {
  return (
    <>
       <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Header" element={<Header />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/pc" element={<ProtectedRoute Comp={Cart} />} />
      </Routes>
    </BrowserRouter>

      
    </>
  );
}

export default App;
