
import { Routes, Route } from "react-router";

import NavBar from "./components/NavBar.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";
import ProductsList from "./pages/ProductList/ProductList.jsx";
import CreateProduct from "./pages/CreateProduct/CreateProduct.jsx";
import ProductDetails from "./pages/ProductDetails/ProductDetails.jsx";
function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/products" element={<ProductsList/>} />
        <Route path="/new-product" element={<CreateProduct/>}/>
        <Route path="/products/:productId" element={<ProductDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
