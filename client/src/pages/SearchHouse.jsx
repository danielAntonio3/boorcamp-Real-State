import React, { useRef } from "react";
import { useLazyQuery, gql } from "@apollo/client";
import NavBar from "./../components/NavBar";
import Houses from "./../components/Houses";

const GET_FILTER_HOUSE = gql`
  query Query($limit: Int!, $skip: Int!, $payload: UpdateHouseInput) {
    filterHouse(limit: $limit, skip: $skip, payload: $payload) {
      _id
      country
      state
      city
      street
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

export default function SearchHouse() {
  const pais = useRef();
  const state = useRef();
  const price = useRef();
  const rooms = useRef();
  const city = useRef();

  const [filter, { loading, data, error }] = useLazyQuery(GET_FILTER_HOUSE);

  return (
    <>
      <NavBar />
      <nav className="nav-search">
        <div className="nav-search-container">
          <input
            className="nav-search-input"
            type="text"
            placeholder="Pais"
            ref={pais}
          />
          <input
            className="nav-search-input"
            type="text"
            placeholder="Estado"
            ref={state}
          />
          <input
            className="nav-search-input"
            type="text"
            placeholder="Ciudad"
            ref={city}
          />
          <input
            className="nav-search-input"
            type="text"
            placeholder="Precio"
            ref={price}
          />
          <input
            className="nav-search-input"
            type="text"
            placeholder="Num. Cuartos"
            ref={rooms}
          />
          <button
            className="nav-search-button"
            onClick={() =>
              filter({
                variables: {
                  limit: 10,
                  skip: 0,
                  payload: {
                    country: pais.current.value
                      ? pais.current.value
                      : undefined,
                    state: state.current.value
                      ? state.current.value
                      : undefined,
                    city: city.current.value ? city.current.value : undefined,
                    price: price.current.value
                      ? parseInt(price.current.value)
                      : undefined,
                    rooms: rooms.current.value
                      ? parseInt(rooms.current.value)
                      : undefined,
                  },
                },
              })
            }
          >
            Aplicar filtro
          </button>
        </div>
      </nav>
      <div className="page">
        {data ? <Houses house={data.filterHouse} /> : ""}
      </div>
    </>
  );
}
