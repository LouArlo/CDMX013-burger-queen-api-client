import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getDefaultNormalizer } from '@testing-library/react';
import styled from 'styled-components';

export default function MenuAlmuerzo() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8080/products')
      .then((response) => response.json())
      .then((allproducts) => setProducts(allproducts))
      .catch((error) => console.error('error:', error));
  }, []);

  function Add(nameproduct) {
    // const nameproduct = filteredProducts.name;
    console.log(nameproduct);
  }

  useEffect(() => {
    setFilteredProducts(products.filter((product) => product.category === '2'));
  }, [products]);
  return (
    <ul className="components">
      {filteredProducts.map((product) => (
        <button onClick={() => Add(product)} className="product" type="button" key={product.name}>
          {product.name} {product.price}
        </button>
      ))}
    </ul>
  );
}
