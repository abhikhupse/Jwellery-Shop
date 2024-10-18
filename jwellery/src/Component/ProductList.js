// ProductList.js
import React from "react";
import "../Styles/ProductList.css"; // Make sure the path is correct

const ProductList = ({ products }) => {
  return (
    <main>
      <section className="productListContainer123">
        {products.map((product, index) => (
          <div className="productCard456" key={index}>
            <div className="productImageContainer789">
              <img src={product.image} alt={`${product.title} Image`} />
            </div>
            <div className="productDetailsContainer101112">
              <h2 className="productTitle131415">{product.title}</h2>
              <p className="productPrice161718">₹{product.price}</p>
              <button className="addToCartButton192021">Add to Cart</button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default ProductList;
