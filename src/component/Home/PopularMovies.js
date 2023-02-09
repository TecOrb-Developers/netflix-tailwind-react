import Titles from "../SubComponent/Titles";
import { BsCollectionFill } from "react-icons/bs";
import { SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";
import CommonSwiperSlide from "../Slider";
import MovieCard from "../SubComponent/Cards/MovieCard";

const PopularMovies = ({ moviesData }) => {
  return (
    <div className="my-16">
      <Titles title="Popular Movie" Icon={BsCollectionFill} />
      <div className="w-full mt-6 ">
        <CommonSwiperSlide navigation={false} direction="horizontal">
          {moviesData.slice(0, 8).map((movie, index) => {
            return (
              <SwiperSlide
                key={index}
                className="relative rounded overflow-hidden"
              >
                <MovieCard key={index} movie={movie} />
              </SwiperSlide>
            );
          })}
        </CommonSwiperSlide>
      </div>
    </div>
  );
};
PopularMovies.propTypes = {
  moviesData: PropTypes.array,
};
export default PopularMovies;
