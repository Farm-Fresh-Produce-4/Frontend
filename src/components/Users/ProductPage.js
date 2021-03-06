import React from "react";
import NavBar from "./NavBar";
import ProductData from "./ProductData";
import "../../css/ProductPage.css";

export const ProductPage = () => {
  return (
    <div>
      <NavBar />
      <img class="Header" src={"../img/Header_image2.png"} alt="" />
      <img class="drklayer" src={"../img/dark_shade_layer.png"} alt="" />
      <h1>J Marchini Farms</h1>
      <p class="headertext">
        The story of J. Marchini Farms is about family, close friends, and
        success. Without these, J. Marchini Farms may have never been, and
        radicchio would never have made it to America’s salad bowl.
      </p>
      <ProductData />
    </div>
  );
};
