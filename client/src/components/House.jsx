import React from "react";
import { FaCity, FaMoneyBill } from "react-icons/fa";

export default function House({ house }) {
  // console.log(house);
  return (
    <article className="house" key={house._id}>
      <div className="house-img">
        <img src={`${house.img}`} alt="house" />
      </div>
      <div className="house-info">
        <p>
          <FaCity /> {house.country} - {house.city}
        </p>
        <p>
          <FaMoneyBill /> {house.price} / noche
        </p>
        {/* <p>
          {house.bathrooms} - habitación - {house.rooms} - baño
        </p> */}
      </div>
    </article>
  );
}
