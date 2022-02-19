import React, { useEffect, useState } from "react";
import Filter from "./icons/Filter";
import List from "./List";
import { getRides } from "../services";
export default function Rides() {
  const [Data, setData]: any = useState([]);
  useEffect(() => {
    getRides().then((res) => {
      setData(res);
    });
  }, []);
  function handleFilter() {
    const filter: any = document.querySelector(".filter");
    if (filter.classList.contains("hidden")) {
      filter.classList.remove("hidden");
    } else {
      filter.classList.add("hidden");
    }
  }
  function handleCat() {
    console.log("catClicked");
  }
  return (
    <>
      <div className="text-white bg-inherit flex flex-row justify-between mt-10 font-inter pl-12 pr-8">
        <div className="flex flex-row gap-7 text-sm lg:text-lg">
          <p
            className="active opacity-70 cursor-pointer"
            onClick={() => {
              handleCat();
            }}
          >
            Nearest rides
          </p>
          <p
            className="opacity-70 cursor-pointer"
            onClick={() => {
              handleCat();
            }}
          >
            Upcoming rides
          </p>
          <p
            className="opacity-70 cursor-pointer"
            onClick={() => {
              handleCat();
            }}
          >
            Past rides
          </p>
        </div>
        <div
          className="flex flex-row gap-1 cursor-pointer"
          onClick={() => {
            handleFilter();
          }}
        >
          <Filter className="w-6 h-6" />
          <p>Filters</p>
        </div>
        <div className=" filter absolute float-right top-40 right-10 z-10 p-4 bg-[#131313] pb-3 rounded-lg">
          <p className="opacity-70 border-b-2 p-3">Filters</p>
          <div className=" p-4 flex flex-col gap-3 text-black">
            <select
              className="w-40 p-2 bg-[#232323] text-white  disabled:opacity-50"
              id="breed"
              value="state"
            >
              {Data.map((state: any) => (
                <option key={state.id} value={state.state}>
                  {state.state}
                </option>
              ))}
            </select>
            <select
              className="w-40 bg-[#232323] p-2 text-white  disabled:opacity-50"
              id="breed"
            >
              {Data.map((state: any) => (
                <option key={state.id} value={state.city}>
                  {state.city}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <List Data={Data} />
    </>
  );
}
