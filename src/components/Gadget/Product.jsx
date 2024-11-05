import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { product_title, product_image, price, category, id } = product;

  return (
    <div>
      <div className="card bg-base-100 max-w-96 shadow-xl p-5">
        <figure className="shadow-sm rounded-md mb-4">
          <img src={product_image} alt={product_title} />
        </figure>
        <div className="card-body p-0">
          <div className="flex gap-3">
            <div className="badge badge-outline">{category}</div>
          </div>
          <h2 className="card-title">{product_title}</h2>
          <div className="flex gap-2">
            Price:
            <p>${price}</p>
          </div>
          <div className="card-actions justify-end">
            <Link to={`/product/${id}`} className="btn rounded-full btn-outline border-[#9538E2] text-[#9538E2]">
              View Product
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    product_title: PropTypes.string.isRequired,
    product_image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
};

export default Product;