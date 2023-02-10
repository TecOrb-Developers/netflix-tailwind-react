import { useState } from "react";
import Titles from "../SubComponent/Titles";
import PropTypes from "prop-types";

import {
  BsCaretLeftFill,
  BsCaretRightFill,
  BsCollectionFill,
} from "react-icons/bs";
import { SwiperSlide } from "swiper/react";
import CommonSwiperSlide from "../Slider";
import MovieCardRating from "../SubComponent/Cards/MovieCardRating";
const TopRated = ({ moviesData }) => {
  const [nextEl, setNextEl] = useState(null);
  const [prevEl, setPrevEl] = useState(null);
  const classNames =
    "hover:bg-dry transition text-sm rounded w-8 h-8 flex-colo bg-subMain text-white";
  return (
    <div className="my-16 topRated">
      <Titles title="Popular Movie" Icon={BsCollectionFill} />
      <div className=" mt-10">
        <CommonSwiperSlide
          navigation={{ nextEl, prevEl }}
          direction="horizontal"
        >
          {moviesData.slice(0, 6).map((movie, index) => {
            return (
              <SwiperSlide key={index}>
                <MovieCardRating movie={movie} />
              </SwiperSlide>
            );
          })}
        </CommonSwiperSlide>
        <div className="w-full px-1 flex-rows pt-12 gap-6">
          <button className={classNames} ref={(node) => setPrevEl(node)}>
            <BsCaretLeftFill />
          </button>
          <button className={classNames} ref={(node) => setNextEl(node)}>
            <BsCaretRightFill />
          </button>
        </div>
      </div>
    </div>
  );
};
TopRated.propTypes = {
  moviesData: PropTypes.array,
};
export default TopRated;
