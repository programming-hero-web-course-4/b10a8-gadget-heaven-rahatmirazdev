import PropTypes from "prop-types";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiCircleRemove } from "react-icons/ci";

const ProductCard = ({ product, onAddToCart, onRemove }) => {
  return (
    <div className="my-5 product p-8 flex items-center justify-between bg-white rounded-xl">
      <div className="flex gap-8">
        <div className="w-48 h-24 border rounded-xl flex justify-center">
          <img className="rounded-xl" src={product.product_image} alt={product.product_title} />
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-black">
            {product.product_title}
          </h3>
          <p className="text-lg leading-loose text-black text-opacity-60">
            {product.description}
          </p>
          <p>
            <span>Price: $</span>{product.price}
          </p>
          {onAddToCart && (
            <button
              className={`flex items-center gap-3 px-5 py-2.5 shadow-inner rounded-full text-lg font-bold leading-relaxed text-center text-white ${
                product?.availability ? "bg-purple-600" : "bg-slate-400"
              }`}
              onClick={() => onAddToCart(product)}
              disabled={!product?.availability}
            >
              Add To Cart
              <AiOutlineShoppingCart />
            </button>
          )}
        </div>
      </div>
      <div>
        <button
          className="text-red-500 text-3xl"
          onClick={() => onRemove(product.id)}
        >
          <CiCircleRemove />
        </button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    product_title: PropTypes.string.isRequired,
    product_image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    availability: PropTypes.bool,
  }).isRequired,
  onAddToCart: PropTypes.func,
  onRemove: PropTypes.func.isRequired,
};

export default ProductCard;