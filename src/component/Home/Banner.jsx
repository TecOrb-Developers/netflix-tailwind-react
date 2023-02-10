import { SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";
import BannerSwiperSlide from "../Slider/BannerSlider";
import BannerCard from "../SubComponent/Cards/BannerCard";

const Banner = ({ moviesData }) => {
  return (
    <div data-cy="Banner" className=" sss relative w-full">
      <BannerSwiperSlide>
        {moviesData.slice(0, 6).map((movie, index) => {
          return (
            <SwiperSlide
              key={index}
              className="relative rounded overflow-hidden"
            >
              <BannerCard movie={movie} />
            </SwiperSlide>
          );
        })}
      </BannerSwiperSlide>
    </div>
  );
};
Banner.propTypes = {
  moviesData: PropTypes.array,
};
export default Banner;
