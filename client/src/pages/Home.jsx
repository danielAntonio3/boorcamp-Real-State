import React, { useContext } from "react";

import Houses from "../components/Houses";
import { houseContext } from "./../context/HouseContext";
import NavBar from "../components/NavBar";

export default function Home() {
  const { house } = useContext(houseContext);
  return (
    <>
    <NavBar />
      <div className="page">
        <Houses house={house} />
      </div>
    </>
  );
}
