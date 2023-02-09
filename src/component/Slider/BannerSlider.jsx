import { Autoplay } from "swiper";
import { Swiper } from "swiper/react";
import PropTypes from "prop-types";

const BannerSwiperSlide = ({ children }) => {
  return (
    <Swiper
      direction="vertical"
      loop={true}
      autoplay={{ dalay: 4000, disableOnInteraction: false }}
      speed={1000}
      modules={[Autoplay]}
      className="w-full xl:h-96 bg:dry h-48"
    >
      {children}
    </Swiper>
  );
};
BannerSwiperSlide.propTypes = {
  children: PropTypes.any,
};
export default BannerSwiperSlide;
