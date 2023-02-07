import React from "react";
import Banner from "../../Component/Home/Banner";
import PopularMovies from "../../Component/Home/PopularMovies";
import Promos from "../../Component/Home/Promo";
import TopRated from "../../Component/Home/TopRated";
import TvShows from "../../Component/Home/TvShows";
import Layout from "../../Loyout";
const HomeScreen = () => {
  return (
    <Layout>
      <div className="conatiner mx-auto min-h-screen px-2 mb-6">
        <Banner />
        <PopularMovies />
        <TvShows />
        <Promos />
        <TopRated />
      </div>
    </Layout>
  );
};
export default HomeScreen;
