/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { getUser } from "../services";
export default function List({ Data }: any) {
  const [user, setUser] = useState([]);
  useEffect(() => {
    getUser().then((res) => {
      setUser(res);
    });
  }, []);
  console.log(user);
  function getDate(param: any) {
    const date = new Date(param);
    return date.toLocaleString("en-US", {
      weekday: "short",
      day: "numeric",
      year: "numeric",
      month: "long",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
  }
  return (
    <div>
      {Data.map((ride: any) => (
        <div
          key={ride.id}
          className="flex flex-row justify-between flex-wrap pr-7 bg-[#171717] p-9 mx-10 my-6 rounded-2xl"
        >
          <div className=" flex flex-row gap-10 flex-wrap">
            <img src="./images/gps.png" alt="gps" />
            <ul className="opacity-100 ">
              <li>
                <span className="opacity-70">Ride id :</span> {ride.id}
              </li>
              <li>
                <span className="opacity-70">Origin station :</span>{" "}
                {ride.origin_station_code}
              </li>
              <li>
                <span className="opacity-70"> Ride path :</span>{" "}
                {ride.station_path}
              </li>
              <li>
                <span className="opacity-70">Date :</span> {getDate(ride.date)}
              </li>
              <li>
                <span className="opacity-70">Distance :</span> 20{" "}
              </li>
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
