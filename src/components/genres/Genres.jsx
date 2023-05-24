import PropTypes from "prop-types";
import "./style.scss";
import { useSelector } from "react-redux";

const Genres = ({ data }) => {
  const { genres } = useSelector((state) => state.home);
  console.log(data);
  return (
    <div className="genres">
      {data?.map((item) => {
        if (!genres[item]?.name) return;
        return (
          <div key={item} className="genre">
            {genres[item]?.name}
          </div>
        );
      })}
    </div>
  );
};

Genres.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  ),
};

export default Genres;
