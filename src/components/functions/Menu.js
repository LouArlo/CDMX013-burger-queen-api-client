import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// const flag = true;

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
  function Add(product, flag) {
    let value = 0;
    if (flag) {
      value = 1;
    } else {
      value = -1;
    }
    setOrderProducts((prevOrderProducts) => {
      let agregar = true;
      const newOrderproducts = prevOrderProducts.map((item) => {
        if (item.name === product.name) {
          agregar = false;
          const newItem = {
            ...item,
            qty: item.qty + value,
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
            onClick={() => Add(product, true)}
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
            <p className="layoutname">{element.name}</p>
            <p className="layoutprice">$ {element.price}</p>
            <button
              onClick={() => Add(element, false)}
              className="restBotton"
              type="button"
              key={element.name}
            >
              -
            </button>
            <p className="layoutqty">{element.qty}</p>
            <button
              onClick={() => Add(element, true)}
              className="addBotton"
              type="button"
              key={element.name}
            >
              +
            </button>
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
