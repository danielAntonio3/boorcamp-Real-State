import React from "react";
import NavBar from "./../components/NavBar";

export default function AddHouse() {
  const addHouse = (event) => {
    event.preventDefault();
    alert("House added");
  };

  return (
    <>
      <NavBar />
      <form onSubmit={addHouse}>
        <div className="addHouse">
          <div className="addHouse-container">
            <span className="addHouse-container-title">
              Agregar una nueva casa
            </span>
            <div className="addHouse-container-input">
              <input className="input" type="text" placeholder="País" />
              <input className="input" type="text" placeholder="Estado" />
              <input className="input" type="text" placeholder="Ciudad" />
              <input className="input" type="text" placeholder="Calle" />
              <input className="input" type="number" placeholder="Numero" />
              <input className="input" type="text" placeholder="C.P." />
            </div>
            <div className="addHouse-container-input">
              <input className="input" type="text" placeholder="Precio" />
              <input
                className="input"
                type="number"
                placeholder="Num. Cuartos"
              />
              <input className="input" type="number" placeholder="Num. Baños" />
            </div>
            <div className="addHouse-container-input">
              <span>Aceptan mascotas</span>
              <label href="si">SI</label>
              <input type="radio" value="true" name="mascota" />
              <label href="no">No</label>
              <input type="radio" value="false" name="mascota" />
              <input
                type="text"
                className="input"
                placeholder="link de imagen"
              />
            </div>
            <div className="addHouse-service">
              <div className="addHouse-service-radio">
                <span>Incluye Cocina </span>
                <div className="addHouse-service-radio-input">
                  <label href="si">Si</label>
                  <input type="radio" value="true" name="cocina" />
                  <label href="no">No</label>
                  <input type="radio" value="false" name="cocina" />
                </div>
              </div>
              <div className="addHouse-service-radio">
                <span>Incluye Estacionamiento</span>
                <div className="addHouse-service-radio-input">
                  <label href="si">Si</label>
                  <input type="radio" value="true" name="Estacionamiento" />
                  <label href="no">No</label>
                  <input type="radio" value="false" name="Estacionamiento" />
                </div>
              </div>
              <div className="addHouse-service-radio">
                <span>Incluye Patio</span>
                <div className="addHouse-service-radio-input">
                  <label href="si">Si</label>
                  <input type="radio" value="true" name="patio" />
                  <label href="no">No</label>
                  <input type="radio" value="false" name="patio" />
                </div>
              </div>
              <div className="addHouse-service-radio">
                <span>Incluye Wifi</span>
                <div className="addHouse-service-radio-input">
                  <label href="si">Si</label>
                  <input type="radio" value="true" name="wifi" />
                  <label href="no">No</label>
                  <input type="radio" value="false" name="wifi" />
                </div>
              </div>
              <div className="addHouse-service-radio">
                <span>Incluye Tv</span>
                <div className="addHouse-service-radio-input">
                  <label href="si">Si</label>
                  <input type="radio" value="true" name="tv" />
                  <label href="no">No</label>
                  <input type="radio" value="false" name="tv" />
                </div>
              </div>
              <div className="addHouse-service-radio">
                <span>Incluye Aire acondicionado</span>
                <div className="addHouse-service-radio-input">
                  <label href="si">Si</label>
                  <input type="radio" value="true" name="aire" />
                  <label href="no">No</label>
                  <input type="radio" value="false" name="aire" />
                </div>
              </div>
              <div className="addHouse-service-radio">
                <span>Incluye Area de fumar</span>
                <div className="addHouse-service-radio-input">
                  <label href="si">Si</label>
                  <input type="radio" value="true" name="fumar" />
                  <label href="no">No</label>
                  <input type="radio" value="false" name="fumar" />
                </div>
              </div>
            </div>
            <div className="addHouse-container-button">
              <button className="addHouse-button">Agregar Casa</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
