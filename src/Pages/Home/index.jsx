import React from "react";
import { useEffect } from "react";
import Banner from "../../Component/Home/Banner";
import PopularMovies from "../../Component/Home/PopularMovies";
import Promos from "../../Component/Home/Promo";
import TopRated from "../../Component/Home/TopRated";
import TvShows from "../../Component/Home/TvShows";
import Layout from "../../Layout";
import axios from "axios";
import { useState } from "react";

const HomeScreen = () => {
  const [moviesData, setMoviesData] = useState([]);
  useEffect(() => {
    getPostsData();
  }, []);
  const getPostsData = () => {
    axios
      .get("./home.json")
      .then((data) => setMoviesData(data.data.movies))
      .catch((error) => console.log(error));
  };
  const moviesProps = {
    moviesData,
  };
  return (
    <Layout>
      <div className="container mx-auto min-h-screen px-2 mb-6">
        <Banner {...moviesProps} />
        <PopularMovies {...moviesProps} />
        <TvShows {...moviesProps} />
        <Promos />
        <TopRated {...moviesProps} />
      </div>
    </Layout>
  );
};
export default HomeScreen;
