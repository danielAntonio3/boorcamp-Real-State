import React, { useContext, useRef } from "react";
import NavBar from "./../components/NavBar";

import { dashboardContext } from "./../context/DashboardContext.js";
import { gql, useMutation } from "@apollo/client";

const ADD_HOUSE = gql`
  mutation Mutation($house: HouseInput) {
    createHouse(house: $house) {
      _id
      country
      state
      street
      city
      number
      zipCode
      price
      rooms
      bathrooms
      animals
      rating
      img
      idUser
      services {
        kitchen
        parking
        patio
        wifi
        tv
        airConditioner
        smockingArea
      }
    }
  }
`;

export default function AddHouse() {
  const [
    mutate,
    { loading: mutationLoading, data: mutationData, error: mutationError },
  ] = useMutation(ADD_HOUSE);

  const country = useRef();
  const city = useRef();
  const state = useRef();
  const street = useRef();
  const number = useRef();
  const zipCode = useRef();
  const price = useRef();
  const rooms = useRef();
  const bathrooms = useRef();
  const animals = useRef();
  const img = useRef();
  const kitchen = useRef();
  const parking = useRef();
  const patio = useRef();
  const wifi = useRef();
  const tv = useRef();
  const airConditioner = useRef();
  const smockingArea = useRef();

  return (
    <>
      <NavBar />
      <div className="addHouse">
        <div className="addHouse-container">
          <span className="addHouse-container-title">
            Agregar una nueva casa
          </span>
          <div className="addHouse-container-input">
            <input
              className="input"
              ref={country}
              type="text"
              placeholder="País"
            />
            <input
              className="input"
              ref={city}
              type="text"
              placeholder="Estado"
            />
            <input
              className="input"
              ref={state}
              type="text"
              placeholder="Ciudad"
            />
            <input
              className="input"
              ref={street}
              type="text"
              placeholder="Calle"
            />
            <input
              className="input"
              ref={number}
              type="number"
              placeholder="Numero"
            />
            <input
              className="input"
              ref={zipCode}
              type="text"
              placeholder="C.P."
            />
          </div>
          <div className="addHouse-container-input">
            <input
              className="input"
              ref={price}
              type="text"
              placeholder="Precio"
            />
            <input
              className="input"
              ref={rooms}
              type="number"
              placeholder="Num. Cuartos"
            />
            <input
              className="input"
              ref={bathrooms}
              type="number"
              placeholder="Num. Baños"
            />
          </div>
          <div className="addHouse-container-input">
            <span>Aceptan mascotas</span>
            <label href="si">SI</label>
            <input type="radio" value={true} ref={animals} />
            <label href="no">No</label>
            <input type="radio" value={false} ref={animals} />
            <input
              type="text"
              className="input"
              ref={img}
              placeholder="link de imagen"
            />
          </div>
          <div className="addHouse-service">
            <div className="addHouse-service-radio">
              <span>Incluye Cocina </span>
              <div className="addHouse-service-radio-input">
                <label href="si">Si</label>
                <input type="radio" value="true" ref={kitchen} />
                <label href="no">No</label>
                <input type="radio" value="false" ref={kitchen} />
              </div>
            </div>
            <div className="addHouse-service-radio">
              <span>Incluye Estacionamiento</span>
              <div className="addHouse-service-radio-input">
                <label href="si">Si</label>
                <input type="radio" value="true" ref={parking} />
                <label href="no">No</label>
                <input type="radio" value="false" ref={parking} />
              </div>
            </div>
            <div className="addHouse-service-radio">
              <span>Incluye Patio</span>
              <div className="addHouse-service-radio-input">
                <label href="si">Si</label>
                <input type="radio" value="true" ref={patio} />
                <label href="no">No</label>
                <input type="radio" value="false" ref={patio} />
              </div>
            </div>
            <div className="addHouse-service-radio">
              <span>Incluye Wifi</span>
              <div className="addHouse-service-radio-input">
                <label href="si">Si</label>
                <input type="radio" value={true} ref={wifi} />
                <label href="no">No</label>
                <input type="radio" value={false} ref={wifi} />
              </div>
            </div>
            <div className="addHouse-service-radio">
              <span>Incluye Tv</span>
              <div className="addHouse-service-radio-input">
                <label href="si">Si</label>
                <input type="radio" value="true" ref={tv} />
                <label href="no">No</label>
                <input type="radio" value="false" ref={tv} />
              </div>
            </div>
            <div className="addHouse-service-radio">
              <span>Incluye Aire acondicionado</span>
              <div className="addHouse-service-radio-input">
                <label href="si">Si</label>
                <input type="radio" value="true" ref={airConditioner} />
                <label href="no">No</label>
                <input type="radio" value="false" ref={airConditioner} />
              </div>
            </div>
            <div className="addHouse-service-radio">
              <span>Incluye Area de fumar</span>
              <div className="addHouse-service-radio-input">
                <label href="si">Si</label>
                <input type="radio" value="true" ref={smockingArea} />
                <label href="no">No</label>
                <input type="radio" value="false" ref={smockingArea} />
              </div>
            </div>
          </div>
          <div className="addHouse-container-button">
            <button
              className="addHouse-button"
              onClick={() =>
                mutate({
                  variables: {
                    house: {
                      country: country.current.value,
                      city: city.current.value,
                      state: state.current.value,
                      street: street.current.value,
                      number: number.current.value,
                      zipCode: zipCode.current.value,
                      price: price.current.value,
                      rooms: rooms.current.value,
                      bathrooms: bathrooms.current.value,
                      animals: String(animals.current.value) === "true",
                      img: img.current.value,
                      services: {
                        kitchen: String(kitchen.current.value) === "true",
                        parking: String(parking.current.value) === "true",
                        patio: String(patio.current.value) === "true",
                        wifi: String(wifi.current.value) === "true",
                        tv: String(tv.current.value) === "true",
                        airConditioner:
                          String(airConditioner.current.value) === "true",
                        smockingArea:
                          String(smockingArea.current.value) === "true",
                      },
                    },
                  },
                })
              }
            >
              Agregar Casa
            </button>
          </div>
        </div>
      </div>
      {/* </form> */}
    </>
  );
}
