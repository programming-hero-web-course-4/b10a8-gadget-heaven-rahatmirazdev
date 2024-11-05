import PropTypes from "prop-types";
import check from "../../assets/success.svg";

const Modal = ({ totalCost, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="inline-flex flex-col space-y-6 items-center justify-start p-8 bg-white rounded-2xl" style={{ width: 400, height: 332 }}>
        <div className="inline-flex items-center justify-center w-16 h-16 px-0.5 py-0.5">
          <img className="flex-1 h-full rounded-lg" src={check} alt="Success" />
        </div>
        <div className="flex flex-col space-y-4 items-start justify-start w-full">
          <div className="flex flex-col space-y-3 items-center justify-center w-full">
            <p className="text-2xl font-bold text-black">Payment Successfully</p>
            <div className="w-full h-0.5 border-black border-opacity-10" />
            <p className="text-base font-medium leading-loose text-center text-black text-opacity-60">
              Thanks for purchasing.
              <br />
              Total: ${totalCost}
            </p>
          </div>
          <div className="inline-flex items-center justify-center w-full px-5 py-2 bg-black bg-opacity-5 shadow-inner rounded-full cursor-pointer" onClick={onClose}>
            <p className="text-base font-semibold text-center text-black">Close</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  totalCost: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;