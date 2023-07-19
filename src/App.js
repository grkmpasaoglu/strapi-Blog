import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

import ProductDetails from "./pages/AproductDetails"
import Products from "./pages/Aproducts"
import Blogs from "./pages/Blog"

export default function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Products/>}/>
        <Route path="/products/:id" element={<ProductDetails/>}/> */}
        <Route path="/" element={<Blogs/>}/>
      </Routes>
    </Router>
  )
}