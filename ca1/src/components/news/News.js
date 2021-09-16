import React from "react";
import Cards from "./Cards";
import Paginations from "./Paginations";

function News() {
  return (
    <div className="page page--news">
      <h1>News</h1>
      <Paginations />
      <Cards />
      <Paginations />
    </div>
  );
}

export default News;
