import { useParams, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart, addToWishlist } = useOutletContext();

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => {
        const foundProduct = data.products.find((product) => product.id === id);
        setProduct(foundProduct);
      });
  }, [id]);

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success("Product added to cart!");
  };

  const handleAddToWishlist = (product) => {
    addToWishlist(product);
    toast.success("Product added to wishlist!");
  };

  if (!product) {
    return null;
  }

  return (
    <div className="w-full bg-[#9538E2] h-[463px] mt-9 border mb-[745px] sm:mb-[900px] md:mb-[208px]">
      <div className="max-w-[1280px] m-auto p-4">
        <div className="mt-11">
          <h3 className="text-3xl font-bold text-center text-white">
            Product Details
          </h3>
          <p className="text-base leading-relaxed text-center text-white max-w-[796px] m-auto mt-3 mb-8">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <div className="card card-side bg-base-100 shadow-xl flex-col md:flex-row">
            <figure>
              <img
                className="rounded-xl"
                src={product?.product_image}
                alt={product?.product_title}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-3xl font-semibold text-black">
                {product?.product_title}
              </h2>
              <div className="text-xl font-semibold leading-loose text-black text-opacity-80">
                <span className="text-lg font-bold leading-loose text-black mr-2">
                  Price:
                </span>
                ${product?.price}
              </div>
              <div className="px-3.5 py-1.5 bg-green-800 bg-opacity-10 border rounded-full border-green-800 text-center max-w-[170px]">
                {product?.availability ? "In stock" : "Not Available"}
              </div>
              <div className="text-lg leading-loose text-black text-opacity-60">
                {product?.description}
              </div>
              <div>
                <span className="text-lg font-bold leading-loose text-black">
                  Specifications
                </span>
                <ul className="list-decimal pl-5">
                  {product?.specification?.map((specification, index) => (
                    <li key={index}>{specification}</li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="text-lg font-bold leading-loose text-black">
                  Ratings
                </span>
                <div className="flex gap-3">
                  <ReactStars
                    count={5}
                    value={product?.rating}
                    size={24}
                    activeColor="#ffd700"
                    edit={false}
                  />
                  <span className="px-3.5 py-1.5 bg-black bg-opacity-5 rounded-full text-sm font-medium text-black text-opacity-80">
                    {product?.rating}
                  </span>
                </div>
              </div>
              <div className="card-actions">
                <button
                  className={`flex items-center gap-3 px-5 py-2.5 shadow-inner rounded-full text-lg font-bold leading-relaxed text-center text-white ${
                    product?.availability ? "bg-purple-600" : "bg-slate-400"
                  }`}
                  onClick={() => handleAddToCart(product)}
                  disabled={!product?.availability}
                >
                  Add To Cart
                  <AiOutlineShoppingCart />
                </button>
                <button
                  className="ml-2 px-3 py-3 shadow-inner border rounded-full border-black border-opacity-5"
                  onClick={() => handleAddToWishlist(product)}
                >
                  <CiHeart className="w-6 h-6 " />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;