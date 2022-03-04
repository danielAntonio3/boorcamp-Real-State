import React, { useState, createContext, useEffect} from "react";
import { useQuery, gql} from "@apollo/client";

export const houseContext = createContext();

const GET_HOUSE = gql`
    query House($limit: Int!, $skip: Int!) {
      getFullHouse(limit: $limit, skip: $skip) {
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


export default function HouseContext({ children }) {
  const [house, setHouse] = useState(null);

  const { loading, data, error } = useQuery(GET_HOUSE, {
    variables: { limit: 10, skip: 0 },
  });

  useEffect(() => {
    if (data) {
      setHouse(data.getFullHouse);
    }
  }, [data]);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;


  return (
    <houseContext.Provider value={{ house, setHouse}}>
      {children}
    </houseContext.Provider>
  );
}
