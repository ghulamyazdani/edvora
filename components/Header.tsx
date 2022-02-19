/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
export default function header() {
  return (
    <div className="flex flex-row justify-between p-5 pl-8 pr-8 bg-[#101010] text-white">
      <h1 className="text-4xl font-sf font-bold">Edvora</h1>
      <div className="flex flex-row text-center items-center gap-3">
        <p className="font-inter font-bold">Dhruv Singh</p>
        <img src="./images/Rectangle.png" alt="" />
      </div>
    </div>
  );
}
