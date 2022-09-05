/* eslint-disable react/prop-types */
import React from 'react';
import Product from './Product';

const Products = (props) => {
  const { products } = props;
  return (
    <section className="products">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </section>
  );
};

export default Products;
