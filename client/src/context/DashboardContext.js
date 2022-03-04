import React, { useState, createContext, useEffect } from "react";
import { useQuery, gql, useMutation } from "@apollo/client";

export const dashboardContext = createContext();

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

export default function DashboardContext({ children }) {
  const [myHouse, setMyHouse] = useState(null);

  const { loading, data, error } = useQuery(GET_MY_HOUSE, {
    variables: { limit: 10, skip: 0 },
  });

  useEffect(() => {
    if (data) {
      setMyHouse(data.getHouseUser);
    }
  }, [data]);

  const [
    mutate,
    { loading: mutationLoading, data: mutationData, error: mutationError },
  ] = useMutation(ADD_HOUSE);

  const addHouse = (house) => {
    mutate({
      variables: {
        house,
      },
    });

    if (mutationLoading) return "Submitting...";
    if (mutationError) return `Submission error! ${error.message}`;
    console.log(mutationData);
    // dispatch({
    //   type: 'addHouse',
    //   payload: newHouse,
    // });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <dashboardContext.Provider value={{ myHouse, setMyHouse, addHouse }}>
      {children}
    </dashboardContext.Provider>
  );
}
