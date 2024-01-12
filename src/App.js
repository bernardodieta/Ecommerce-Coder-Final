import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/pages/Layout/Layout.js";
import Home from "./components/pages/Home/Home.js";
import CategoryMen from "./components/pages/Categorys/CategoryMen.js"
import CategoryWoman from "./components/pages/Categorys/CategoryWoman.js"
import CategoryElectronic from "./components/pages/Categorys/CategoryElectronic.js"
import { CartProvider } from "./components/context/CartContext.js";
import { ShoppingCart } from "./components/ShoopingCart/ShoppingCart.jsx";
import { OrderDetails } from './components/pages/OrderDetail.jsx';



function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/categoryman" element={<CategoryMen />} />
            <Route path="/categorywoman" element={<CategoryWoman />} />
            <Route path="/categoryelectronic" element={<CategoryElectronic />} />
            <Route path="/shoppingcart" element={<ShoppingCart />} />
            <Route path="/order-details" element={<OrderDetails/>} />
            <Route path="*" element={<h1>404 NOT FOUND</h1>} /> 
          </Route>
        </Routes>
      </BrowserRouter>

    </CartProvider>
  );
}

export default App;