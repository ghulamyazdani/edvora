import React, { useEffect, useState } from "react";
import Filter from "./icons/Filter";
import List from "./List";
import { getRides } from "../services";
export default function Rides() {
  const [Up, setUp]: any = useState(false);
  const [Near, setNear]: any = useState(true);
  const [Past, setPast]: any = useState(false);
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
  function handleCat(param: any) {
    const Nearest: any = document.getElementById("Nearest");
    const Upcoming: any = document.getElementById("Upcoming");
    const Past: any = document.getElementById("Past");
    if (param === "Nearest") {
      Nearest.classList.add("active");
      Upcoming.classList.remove("active");
      Past.classList.remove("active");
      setUp(false);
      setPast(false);
      setNear(true);
    } else if (param === "Upcoming") {
      Nearest.classList.remove("active");
      Upcoming.classList.add("active");
      Past.classList.remove("active");
      setUp(true);
      setPast(false);
      setNear(false);
    } else if (param === "Past") {
      Nearest.classList.remove("active");
      Upcoming.classList.remove("active");
      Past.classList.add("active");
      setUp(false);
      setPast(true);
      setNear(false);
    }
  }
  return (
    <>
      <div className="text-white bg-inherit flex flex-row justify-between mt-10 font-inter pl-12 pr-8">
        <div className="cat flex flex-row gap-7 text-sm lg:text-lg">
          <p
            className="active  opacity-70 cursor-pointer"
            id="Nearest"
            onClick={() => {
              handleCat("Nearest");
            }}
          >
            Nearest rides
          </p>
          <p
            className="Upcoming opacity-70 cursor-pointer"
            id="Upcoming"
            onClick={() => {
              handleCat("Upcoming");
            }}
          >
            Upcoming rides
          </p>
          <p
            className="opacity-70 cursor-pointer"
            id="Past"
            onClick={() => {
              handleCat("Past");
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
      <List Data={Data} Up={Up} Past={Past} />
    </>
  );
}
