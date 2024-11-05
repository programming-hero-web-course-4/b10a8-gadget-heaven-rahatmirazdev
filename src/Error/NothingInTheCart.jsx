import PropTypes from "prop-types";

const NothingInTheCart = ({ scrollToGadgets }) => {
  return (
    <div>
      <div className="flex items-center justify-center w-full my-10">
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="text-4xl font-bold text-red-500">No Product Here</p>
          <p className="text-xl font-semibold text-gray-500">
            <button onClick={scrollToGadgets}>
              Go back to Home
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

NothingInTheCart.propTypes = {
  scrollToGadgets: PropTypes.func.isRequired,
};

export default NothingInTheCart;