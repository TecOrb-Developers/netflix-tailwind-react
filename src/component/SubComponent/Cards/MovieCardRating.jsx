import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import PropTypes from "prop-types";
import Rating from "../Star";

const MovieCardRating = ({ movie }) => {
  return (
    <div className="p-2 h-48 hovered border border-border bg-dry rounded-lg  overflow-hidden">
      <img
        src={`/images/${movie?.image}`}
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="px-4 hoveres gap-6 text-center absolute bg:black bg-opacity-70 bg-main top-0 left-0 bottom-0 right-0 ">
        <button className="h-9 w-9 text-sm flex-colo transitions hover:bg-subMain  bg-opacity-30 rounded-md text-white  bg-white ">
          <FaHeart />
        </button>
        <Link className="font-medium text-l trancute line-clamp-1" to="/">
          {movie.name}
        </Link>
        <div className="flex gap-2 text-star">
          <Rating value={movie.rate} />
        </div>
      </div>
    </div>
  );
};
MovieCardRating.propTypes = {
  movie: PropTypes.any,
};
export default MovieCardRating;
