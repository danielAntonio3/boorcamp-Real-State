import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const user = localStorage.getItem("user");

  // console.log(user);

  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
    window.location.replace("http://localhost:3000/");
    // TODO: borra las cookies, hacer peticion al servidor
  };

  return (
    <nav className="nav">
      <div className="nav-login">
        {user ? (
          <div className="nav-login-container">
            <Link to="/">
              <button >Home</button>
            </Link>
            <Link to={"/dashboard"}><button>Mis casas</button></Link>
            <Link to={"/add-house"}><button>Agregar casa</button></Link>
            <Link to={"/search-house"}><button>Buscar</button></Link>
            <Link to="/">
              <button onClick={logout}>Cerrar Session</button>
            </Link>
          </div>
        ) : (
          <div className="nav-login-container">
            <Link to="/login">
              <button>Iniciar Session</button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
