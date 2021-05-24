import React from "react";
import Advertisers from "../Components/Advertisers";
import Agencies from "../Components/Agencies";
import Definition from "../Components/Definition";
import Facts from "../Components/Facts";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Map from "../Components/Map";
import Publishers from "../Components/Publishers";
import Working from "../Components/Working";

export default function Homepage() {
  return (
    <div>
      <Hero />
      <Definition />
      <Working />
      <Advertisers />
      <Agencies />
      <Publishers />
      <Facts />
      <Map />
      <Footer />
    </div>
  );
}
