import PropTypes from "prop-types";
import ProductCard from "../shared/ProductCard";

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div>
      <div className="cart-products grid gap-4">
        {cart.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onRemove={removeFromCart}
          />
        ))}
      </div>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      product_title: PropTypes.string.isRequired,
      product_image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default Cart;