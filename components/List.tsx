/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";

export default function List() {
  const [Data, setData]: any = useState([]);
  useEffect(() => {
    getRides();
  }, []);

  async function getRides() {
    const response = await fetch("./api/rides");
    const data = await response.json();
    setData(data.Ride);
  }
  return (
    <div>
      {Data.map((ride: any) => (
        <div
          key={ride.id}
          className="flex flex-row justify-between flex-wrap pr-7 bg-[#171717] p-9 m-10 rounded-2xl"
        >
          <div className=" flex flex-row gap-10 flex-wrap">
            <img src="./images/gps.png" alt="gps" />
            <ul>
              <li>Ride id : {ride.id}</li>
              <li>Origin station : {ride.origin_station_code}</li>
              <li>Ride path : {ride.station_path}</li>
              <li>Date : {ride.date}</li>
              <li>Distance : 20</li>
            </ul>
          </div>
          <div className="flex flex-row gap-5">
            <p>
              <span className="bg-[#0000008F] p-1 rounded-xl opacity-70">
                {ride.city}
              </span>
            </p>
            <p>
              <span className="bg-[#0000008F] p-1 rounded-xl opacity-70">
                {ride.state}
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
