import React from "react";
import { motion } from "framer-motion"
import MostPopular from "../components/MostPopular";
import TrendingOffers from "../components/TrendingOffers";
import Footer from "../components/Footer"
import MainPage from "../components/MainPage";

const Home = () => {
  return (
   <div className="bg-white">
    <MainPage/>
        <MostPopular/>
        <TrendingOffers/>
        <Footer/>
      </div>
  );
};

export default Home;
