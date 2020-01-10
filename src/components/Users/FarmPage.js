import React from "react";
import NavBar from "./NavBar";
import { FarmList } from "./FarmList";
import "../../css/FarmPage.css";

export const FarmPage = () => {
  return (
    <div>
      <div>
        <NavBar />
        <img class="Header" src={"src/img/Header_image.png"} alt="" />
        <h1>Fresh Produce Around The World!</h1>
        <p class="headertext">
          Choose any farms that fits your busy lifestyle. For your convenience,
          our farms offer many features that makes eating healthy much easier
        </p>
      </div>
      <FarmList />
    </div>
  );
};
