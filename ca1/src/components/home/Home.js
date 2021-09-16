import React from "react";
import Accordions from "./Accordions";
import Hero from "./Hero";
import PageText from "./PageText";
import TabsComponent from "./TabsComponent";

function Home() {
  return (
    <div className="page page--home">
      <Hero />
      <PageText />
      <Accordions />
      <TabsComponent />
    </div>
  );
}

export default Home;
