const SwiperSlide = ({ childeren }) => {
  return (
    <Swiper
      direction="vertical"
      loop={true}
      autoplay={{ dalay: 4000, disableOnInteraction: false }}
      speed={1000}
      modules={[Autoplay]}
      className="w-full xl:h-96 bg:dry h-48"
    >
      {childeren}
    </Swiper>
  );
};
