import React, { useContext } from "react";
import NavBar from "./../components/NavBar";

import { dashboardContext } from "./../context/DashboardContext.js";

export default function AddHouse() {
  const { addHouse } = useContext(dashboardContext);

  const addHouses = (event) => {
    event.preventDefault();
    const house = {
      country: event.target.country.value,
      city: event.target.city.value,
      state: event.target.state.value,
      street: event.target.street.value,
      number: event.target.number.value,
      zipCode: event.target.zipCode.value,
      price: event.target.price.value,
      rooms: event.target.rooms.value,
      bathrooms: event.target.bathrooms.value,
      animals: String(event.target.animals.value) === "true",
      img: event.target.img.value,
      services: {
        kitchen: String(event.target.kitchen.value) === "true",
        parking: String(event.target.parking.value) === "true",
        patio: String(event.target.patio.value) === "true",
        wifi: String(event.target.wifi.value) === "true",
        tv: String(event.target.tv.value) === "true",
        airConditioner: String(event.target.airConditioner.value) === "true",
        smockingArea: String(event.target.smockingArea.value) === "true",
      },
    };

    addHouse(house);
  };

  return (
    <>
      <NavBar />
      <form /* onSubmit={addHouses} */>
        <div className="addHouse">
          <div className="addHouse-container">
            <span className="addHouse-container-title">
              Agregar una nueva casa
            </span>
            <div className="addHouse-container-input">
              <input
                className="input"
                name="country"
                type="text"
                placeholder="País"
              />
              <input
                className="input"
                name="city"
                type="text"
                placeholder="Estado"
              />
              <input
                className="input"
                name="state"
                type="text"
                placeholder="Ciudad"
              />
              <input
                className="input"
                name="street"
                type="text"
                placeholder="Calle"
              />
              <input
                className="input"
                name="number"
                type="number"
                placeholder="Numero"
              />
              <input
                className="input"
                name="zipCode"
                type="text"
                placeholder="C.P."
              />
            </div>
            <div className="addHouse-container-input">
              <input
                className="input"
                name="price"
                type="text"
                placeholder="Precio"
              />
              <input
                className="input"
                name="rooms"
                type="number"
                placeholder="Num. Cuartos"
              />
              <input
                className="input"
                name="bathrooms"
                type="number"
                placeholder="Num. Baños"
              />
            </div>
            <div className="addHouse-container-input">
              <span>Aceptan mascotas</span>
              <label href="si">SI</label>
              <input type="radio" value={true} name="animals" />
              <label href="no">No</label>
              <input type="radio" value={false} name="animals" />
              <input
                type="text"
                className="input"
                name="img"
                placeholder="link de imagen"
              />
            </div>
            <div className="addHouse-service">
              <div className="addHouse-service-radio">
                <span>Incluye Cocina </span>
                <div className="addHouse-service-radio-input">
                  <label href="si">Si</label>
                  <input type="radio" value="true" name="kitchen" />
                  <label href="no">No</label>
                  <input type="radio" value="false" name="kitchen" />
                </div>
              </div>
              <div className="addHouse-service-radio">
                <span>Incluye Estacionamiento</span>
                <div className="addHouse-service-radio-input">
                  <label href="si">Si</label>
                  <input type="radio" value="true" name="parking" />
                  <label href="no">No</label>
                  <input type="radio" value="false" name="parking" />
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
                  <input type="radio" value="true" name="airConditioner" />
                  <label href="no">No</label>
                  <input type="radio" value="false" name="airConditioner" />
                </div>
              </div>
              <div className="addHouse-service-radio">
                <span>Incluye Area de fumar</span>
                <div className="addHouse-service-radio-input">
                  <label href="si">Si</label>
                  <input type="radio" value="true" name="smockingArea" />
                  <label href="no">No</label>
                  <input type="radio" value="false" name="smockingArea" />
                </div>
              </div>
            </div>
            <div className="addHouse-container-button">
              <button className="addHouse-button" onClick={addHouses}>
                Agregar Casa
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
