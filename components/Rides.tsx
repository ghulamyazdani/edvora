import React from "react";
import Filter from "./icons/filter";
import List from "./List";
export default function Rides() {
  function handleFilter() {
    const filter: any = document.querySelector(".filter");
    if (filter.classList.contains("hidden")) {
      filter.classList.remove("hidden");
    } else {
      filter.classList.add("hidden");
    }
  }
  return (
    <>
      <div className="text-white bg-inherit flex flex-row justify-between pt-5 font-inter pl-12 pr-8">
        <div className="flex flex-row gap-7 opacity-70">
          <p className="underline active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300cursor-pointer">
            Nearest rides
          </p>
          <p>Upcoming rides (4)</p>
          <p>Past rides (2)</p>
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
        <div className=" filter absolute float-right top-36 right-10 z-10 bg-[#131313] pb-3 rounded-lg">
          <p className="opacity-70 border-b-2 p-3">filters</p>
          <div className="bg-[#232323] p-4 flex flex-col gap-3 text-black">
            <select
              className="w-60 disabled:opacity-50"
              id="breed"
              value="state"
            >
              <option />
              <option />
              {/* {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))} */}
            </select>
            <select className="w-60 disabled:opacity-50" id="breed">
              <option />
              <option />
              {/* {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))} */}
            </select>
          </div>
        </div>
      </div>
      <List />
    </>
  );
}
