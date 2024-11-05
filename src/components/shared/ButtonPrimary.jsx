import PropTypes from "prop-types";

const ButtonPrimary = ({ onClick }) => {
  return (
    <button
      className="text-xl font-bold leading-relaxed text-center text-purple-600 bg-white py-4 px-7 rounded-full"
      onClick={onClick}
    >
      Shop Now
    </button>
  );
};
ButtonPrimary.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonPrimary;
