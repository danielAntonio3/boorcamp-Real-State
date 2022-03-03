import React, { useContext } from "react";

import NavBar from "./../components/NavBar";
import Houses from "./../components/Houses";
import { dashboardContext } from "./../context/DashboardContext";

export default function Dashboard() {

  const { myHouse } = useContext(dashboardContext);

  return (
    <>
      <NavBar />
      <div className="page">
        <Houses house={myHouse}/>
      </div>
    </>
  );
}
