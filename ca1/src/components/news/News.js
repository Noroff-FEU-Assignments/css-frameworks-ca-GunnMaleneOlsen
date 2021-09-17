import React from "react";
import Cards from "./Cards";
import Paginations from "./Paginations";

function News() {
  return (
    <div className="page page--news">
      <h1 className="page__heading--news">News</h1>
      <Paginations />
      <Cards />
      <Paginations />
    </div>
  );
}

export default News;
