import React from "react";
import { useParams } from "react-router-dom";
import fakeData from "../../fakeData";
import Product from "../Product/Product";

const ProductDetails = () => {
  const { productkey } = useParams();
  //useEffect use korte hoto jodi server theke data load kora lagto
  const product = fakeData.find(pd => pd.key === productkey);
  return (
    <div>
      <Product showAddToCart={false} product={product}></Product>
    </div>
  );
};

export default ProductDetails;
