import React, { useState, Component } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../views/login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  //console.log(email, password);

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
        navigate('/dashboard');
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div className="containerPrincipal">
      <h1>BQ Restarurante </h1>
      <div className="containerSecundary">
        <h2>Bienvenidos!</h2>
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
          <button onClick={handleLogin} className="appHelp" type="button">
            Ayuda
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
