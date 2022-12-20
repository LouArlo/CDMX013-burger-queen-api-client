import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';

// const flag = true;
console.log(useEffect, 'useEffect');

export default function Menu() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const initialValue = {
    client: '',
    status: 'pending',
  };
  const [order, setOrder] = useState({ ...initialValue });

  const [orderProducts, setOrderProducts] = useState([]);
  // console.log('orderproduct ', orderProducts);
  useEffect(() => {
    fetch('http://localhost:8080/products')
      .then((response) => response.json())
      .then((allproducts) => setProducts(allproducts))
      .catch((error) => console.error('error:', error));
  }, []);
  let total = 0;
  function AddandRest(product, flag, accion) {
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
      // add to order
      if (agregar) {
        const newItem = {
          ...product,
          qty: 1,
        };
        // console.log('newItem ', newItem);
        newOrderproducts.push(newItem);
      }
      // rest to part of order
      if (!accion) {
        newOrderproducts.splice(product.name, 1);
      }
      // obtain total of order
      total = 0;
      for (let i = 0; i < newOrderproducts.length; i += 1) {
        total += newOrderproducts[i].price * newOrderproducts[i].qty;
      }
      console.log(total);
      return newOrderproducts;
    });
  }
  function handleChangeClient(e) {
    const clientName = e.target.value;

    setOrder((prevOrder) => ({ ...prevOrder, client: clientName }));
  }
  function sendToCook(newOrderproducts) {
    // console.log('cocinando......', orderProducts);
    axios
      .post(
        'http://localhost:8080/orders',
        JSON.stringify({
          client: order.client,
          productOrder: orderProducts,
          status: 'cooking',
        }),
        {
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        },
      )
      .then((res) => {
        console.log(res.data);
        setOrder({ ...initialValue });
        setOrderProducts([]);
      })
      .catch((error) => {
        console.error('Error:', error);
        // setModalErrorLogin(true);
      });
  }

  useEffect(() => {
    setFilteredProducts(products.filter((product) => product.category === '1'));
  }, [products]);

  return (
    <ul className="orderStyle">
      <div className="productView">
        {filteredProducts.map((product) => (
          <button
            onClick={() => AddandRest(product, true, true)}
            className="product"
            type="button"
            key={product._id}
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
          <div key={element._id}>
            <p className="layoutname">{element.name}</p>
            <p className="layoutprice">$ {element.price}</p>
            <button
              onClick={() => AddandRest(element, false, true)}
              className="restBotton"
              type="button"

            >
              -
            </button>
            <p className="layoutqty">{element.qty}</p>
            <button
              onClick={() => AddandRest(element, true, true)}
              className="addBotton"
              type="button"

            >
              +
            </button>
            <button
              onClick={() => AddandRest(element, false, false)}
              className="deleteBotton"
              type="button"

            >
              X
            </button>
            <div />
            <p className="total">Total $ {total}</p>
          </div>
        ))}
      </div>
      <button onClick={sendToCook} className="sendBotton" type="button">
        Enviar a Cocina
      </button>
    </ul>
  );
}
