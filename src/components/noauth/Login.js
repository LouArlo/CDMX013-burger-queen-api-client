/* eslint-disable react/button-has-type */
import React, { useState, Component } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Modal from '../buttons/Modal';
import '../views/login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [statusModalHelp, setStatusModalHelp] = useState(false);
  const [ModalErrorLogin, setModalErrorLogin] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    axios
      .post(
        'http://localhost:8080/auth',
        {
          email,
          password,
        },
        {
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        },
      )
      .then((res) => {
        // console.log(res.data.token);
        console.log(res.data);
        navigate('/home');
      })
      .catch((error) => {
        /* console.error('Error:', error); */
        setModalErrorLogin(true);
      });
  };

  return (
    <div className="containerPrincipal">
      <h1>BQ Restaurante </h1>
      <div className="containerSecundary">
        <h2>Bienvenido!</h2>
        <div className="form-group">
          <p>Correo electrónico</p>
          <input
            id="boxInput"
            placeholder="Introduce Correo electrónico"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <p>Contraseña</p>
          <input
            id="boxInput"
            type="password"
            placeholder="Introduce Contraseña"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <button onClick={handleLogin} className="appButton" type="button">
            iniciar sesión
          </button>
          <button
            onClick={() => setStatusModalHelp(!statusModalHelp)}
            className="appHelp"
            type="button"
          >
            {' '}
          </button>
          <Modal status={statusModalHelp} changeStatus={setStatusModalHelp}>
            <container>
              <h3>olvido su contraseña?</h3>
              <p> * si es colaborador dirijase con el administrador</p>
              <p> * si es administrador dirijase a soporte técnico</p>
              <button onClick={() => setStatusModalHelp(!statusModalHelp)}>
                Aceptar
              </button>
            </container>
          </Modal>
        </div>
      </div>
      <Modal status={ModalErrorLogin} changeStatus={setModalErrorLogin}>
        <container>
          <h3>Datos Incorrectos/Usuario Inexistente</h3>
          <button onClick={() => setModalErrorLogin(!ModalErrorLogin)}>
            Aceptar
          </button>
        </container>
      </Modal>
    </div>
  );
}

export default Login;
