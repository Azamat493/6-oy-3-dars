import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import Catalog from "./Pages/Catalog";
import NewCatalog from "./Pages/NewCatalog";
import Products from "./Pages/Products";
import Service from "./Sections/Service/Service";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/newcatalog" element={<NewCatalog />} />
        <Route path="/products" element={<Products />} />
        <Route path="/service" element={<Service />} />
      </Route>
    </Routes>
  );
}

export default App;
