import React from "react";
import ProductSection from "../Sections/Products/ProductSection";
import YouWillLike from "../Sections/Products/YouWillLike";
import YouLike from "../Sections/Products/YouLike";

const Products = () => {
  return (
    <div>
      <ProductSection />
      <YouWillLike />
      <YouLike />
    </div>
  );
};

export default Products;
