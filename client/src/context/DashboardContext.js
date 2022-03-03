import React, { useState, createContext, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";

export const dashboardContext = createContext();

export default function DashboardContext({ children }) {
  const [myHouse, setMyHouse] = useState(null);

  const GET_MY_HOUSE = gql`
    query GetHouseUser($limit: Int!, $skip: Int!) {
      getHouseUser(limit: $limit, skip: $skip) {
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

  const { loading, data, error } = useQuery(GET_MY_HOUSE, {
    variables: { limit: 5, skip: 0 },
  });

  useEffect(() => {
    if (data) {
      setMyHouse(data.getHouseUser);
    }
  }, [data]);

  if(loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <dashboardContext.Provider value={{ myHouse, setMyHouse }}>
      {children}
    </dashboardContext.Provider>
  );
}
