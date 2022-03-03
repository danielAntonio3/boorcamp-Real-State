import React from "react";

import House from './../components/House.jsx';

export default function Houses({ house }) {
  if (house === null) return <p>Loading...</p>;
  return (
    <section className="houses">
      {house.map((house) => (
        <House key={house._id} house={house} />
      ))}
    </section>
  );
}
