import React from "react";
import { motion } from "framer-motion"
import MostPopular from "../components/MostPopular";
import TrendingOffers from "../components/TrendingOffers";
import Footer from "../components/Footer"
import MainPage from "../components/MainPage";
import ExpertFreelancer from "../components/ExpertFreelancer"

const Home = () => {
  return (
   <div className="bg-white">
    <MainPage/>
        <MostPopular/>
        <ExpertFreelancer/>
        <TrendingOffers/>
        <Footer/>
      </div>
  );
};

export default Home;
