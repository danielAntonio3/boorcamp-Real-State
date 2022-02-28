import React, { useRef } from 'react';
import { useToasts } from 'react-toast-notifications';
import axios from 'axios';

// import { userContext } from './../context/UseContext';

export default function Login() {
  // const { setUser } = useContext(userContext);

  const { addToast } = useToasts();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const login = (event) => {
    event.preventDefault();
    const email = emailRef.current.value.trim();
    const password = passwordRef.current.value.trim();
    if (email === '' || password === '') {
      addToast('Por favor rellena todos los campos', {
        appearance: 'error',
        autoDismiss: true,
      });
      return;
    }

    axios
      .post(
        `http://localhost:4000/api/auth`,
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        // console.log(res.data);
        localStorage.setItem('user', res.data.name);
        window.location.replace('http://localhost:3000/');
      })
      .catch((err) => {
        addToast(err.response.data.message, {
          appearance: 'error',
          autoDismiss: true,
        });
      });
  };

  // TODO: Si ya esta inicio sesión enviarlo a la pagina principal

  return (
    <form onSubmit={login}>
      <div className="login">
        <div className="login-container">
          <span className="login-container-title">Iniciar Sesión</span>
          <div className="login-container-input">
            <input
              className="input-login"
              type="text"
              placeholder="Email"
              ref={emailRef}
            />
          </div>
          <div className="login-container-input">
            <input
              className="input-password"
              type="password"
              placeholder="Password"
              ref={passwordRef}
            />
          </div>
          <div className="login-container-button">
            <button className="login-button">Iniciar Sesión</button>
          </div>
        </div>
      </div>
    </form>
  );
}
