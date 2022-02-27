import React, { useRef } from 'react';
import { useToasts } from 'react-toast-notifications';

export default function Login() {
  const { addToast } = useToasts();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const login = () => {
    const email = emailRef.current.value.trim();
    const password = passwordRef.current.value.trim();
    if (email === '' || password === '') {
      addToast('Por favor rellena todos los campos', {
        appearance: 'error',
        autoDismiss: true,
      });
      return;
    }
  };

  return (
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
          <button className="login-button" onClick={login}>
            Iniciar Sesión
          </button>
        </div>
      </div>
    </div>
  );
}
