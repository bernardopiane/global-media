import React from "react";
import Advertisers from "../Components/Advertisers";
import Agencies from "../Components/Agencies";
import Definition from "../Components/Definition";
import Hero from "../Components/Hero";
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
    </div>
  );
}
