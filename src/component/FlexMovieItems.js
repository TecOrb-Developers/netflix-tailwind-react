import { FaRegCalendarAlt } from "react-icons/fa";
import { BiTime } from "react-icons/bi";
import PropTypes from "prop-types";

const FlexMovieItems = ({ movie }) => {
  return (
    <>
      <div className="flex item-center gap-2">
        <span className="text-sm font-medium">{movie.category}</span>
      </div>
      <div className="flex item-center gap-2">
        <FaRegCalendarAlt className="text-subMain w-3 h3" />
        <span className="text-sm font-medium">{movie.year}</span>
      </div>
      <div className="flex item-center gap-2">
        <BiTime className="text-subMain w-3 h3" />
        <span className="text-sm font-time">{movie.category}</span>
      </div>
    </>
  );
};
FlexMovieItems.propTypes = {
  movie: PropTypes.any,
};
export default FlexMovieItems;
