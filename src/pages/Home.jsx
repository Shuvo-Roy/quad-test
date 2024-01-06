import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Popular from "./Popular";
import Recommendation from "./Recommendation";
import Footer from "../components/Footer";
import { useData } from "../context/DataContext";

export default function Home() {
  const data = useData();
  //console.log(data)
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <Popular data={data} />
      <Recommendation data={data} />
      <Footer />
    </React.Fragment>
  );
}
