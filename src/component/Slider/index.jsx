import { Autoplay, Navigation, Scrollbar } from "swiper";
import { Swiper } from "swiper/react";
import PropTypes from "prop-types";

const CommonSwiperSlide = ({ children, direction, navigation }) => {
  return (
    <Swiper
      direction={direction}
      loop={true}
      autoplay={{ dalay: 4000, disableOnInteraction: false }}
      speed={1000}
      modules={[Autoplay, Navigation, Scrollbar]}
      navigation={navigation}
      className="w-full xl:h-48 bg:dry h-35"
      slidesPerView={6}
      spaceBetween={20}
      scrollbar={{ draggable: true }}
      breakpoints={{
        2100: {
          width: 2100,
          slidesPerView: 4,
        },
        1366: {
          width: 1366,
          slidesPerView: 4,
        },
        768: {
          width: 768,
          slidesPerView: 3,
        },
        640: {
          width: 640,
          slidesPerView: 3,
        },
        480: {
          width: 480,
          slidesPerView: 2,
        },
        375: {
          width: 375,
          slidesPerView: 1,
        },
      }}
    >
      {children}
    </Swiper>
  );
};
CommonSwiperSlide.propTypes = {
  children: PropTypes.any,
  direction: PropTypes.any,
  navigation: PropTypes.any,
};
export default CommonSwiperSlide;
