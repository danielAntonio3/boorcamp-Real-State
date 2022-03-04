import React from "react";

export default function Search() {
  return (
    <nav className="nav-search">
      <div className="nav-search-container">
        <input type="text" placeholder="Search" />
        <button className="nav-search-button">Aplicar filtro</button>
      </div>
    </nav>
  );
}
