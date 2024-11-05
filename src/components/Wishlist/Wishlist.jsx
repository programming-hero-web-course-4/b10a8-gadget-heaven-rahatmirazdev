import PropTypes from "prop-types";
import { useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";
import ProductCard from "../shared/ProductCard";
import NoProductsFound from "../../Error/NoProductsFound";

const Wishlist = ({ wishlist, removeFromWishlist }) => {
  const { addToCart } = useOutletContext();

  const handleAddToCart = (product) => {
    addToCart(product);
    removeFromWishlist(product.id);
    toast.success("Product added to cart!");
  };

  return (
    <div>
      {wishlist.length > 0 ? (
        <div className="wishlist-products grid gap-4">
          {wishlist.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              onRemove={removeFromWishlist}
            />
          ))}
        </div>
      ) : (
        <NoProductsFound />
      )}
    </div>
  );
};

Wishlist.propTypes = {
  wishlist: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      product_title: PropTypes.string.isRequired,
      product_image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  removeFromWishlist: PropTypes.func.isRequired,
};

export default Wishlist;