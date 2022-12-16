import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function Menu() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [order, setOrder] = useState({
    client: '',
    productOrder: [],
    status: 'pending',
  });
  const [orderProducts, setOrderProducts] = useState([]);
  console.log(orderProducts);
  useEffect(() => {
    fetch('http://localhost:8080/products')
      .then((response) => response.json())
      .then((allproducts) => setProducts(allproducts))
      .catch((error) => console.error('error:', error));
  }, []);

  // array con pproducto y cantidad
  function Add(product) {
    setOrderProducts((prevOrderProducts) => {
      let agregar = true;
      const newOrderproducts = prevOrderProducts.map((item) => {
        if (item.name === product.name) {
          agregar = false;
          const newItem = {
            ...item,
            qty: item.qty + 1,
          };
          return newItem;
        }
        return item;
      });
      if (agregar) {
        const newItem = {
          ...product,
          qty: 1,
        };
        newOrderproducts.push(newItem);
      }
      return newOrderproducts;
    });
  }
  function handleChangeClient(e) {
    const clientName = e.target.value;

    setOrder((prevOrder) => ({ ...prevOrder, client: clientName }));
  }
  useEffect(() => {
    setFilteredProducts(products.filter((product) => product.category === '1'));
  }, [products]);
  return (
    <ul className="orderStyle">
      <div className="productView">
        {filteredProducts.map((product) => (
          <button
            onClick={() => Add(product)}
            className="product"
            type="button"
            key={product.name}
          >
            {product.name} $ {product.price}
          </button>
        ))}
      </div>
      <div className="clientView">
        <p>Cliente</p>
        <input
          className="clientInput"
          onChange={handleChangeClient}
          value={order.client}
        />
      </div>
      <div className="components">
        {orderProducts.map((element) => (
          <>
            <div className="layoutname">
              {element.name}
            </div>
            <div className="layoutprice">
              {element.price}
            </div>
            <div className="layoutqty">
              {element.qty}
            </div>
            <div />
          </>
        ))}
      </div>
    </ul>
  );
}
const x = styled.div`
  display: flex;
  flex-direction: column;
  top: 659px;
  left: 120px;
  position: absolute;
`;
