import { useOutletContext, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import PageTitle from "../components/shared/PageTitle";
import Cart from "../components/Cart/Cart";
import Wishlist from "../components/Wishlist/Wishlist";
import Modal from "../components/Modal/Modal";
import NothingInTheCart from "../Error/NothingInTheCart";
import { toast } from "react-toastify";

const Dashboard = () => {
  const { cart, removeFromCart, wishlist, removeFromWishlist, setCart } = useOutletContext();
  const location = useLocation();
  const [activeComponent, setActiveComponent] = useState(location.state?.activeComponent || "cart");
  const [sortedCart, setSortedCart] = useState(cart);
  const [showModal, setShowModal] = useState(false);
  const [totalCost, setTotalCost] = useState(0);
  const navigate = useNavigate();
  const gadgetsRef = useRef(null);

  useEffect(() => {
    setSortedCart(cart);
    setTotalCost(cart.reduce((total, product) => total + product.price, 0).toFixed(2));
  }, [cart]);

  const sortCartByPrice = () => {
    const sorted = [...sortedCart].sort((a, b) => b.price - a.price);
    setSortedCart(sorted);
  };

  const handlePurchase = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCart([]);
    toast.success("Purchase successful!");
  };

  const scrollToGadgets = () => {
    navigate("/");
    setTimeout(() => {
      if (gadgetsRef.current) {
        gadgetsRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="bg-[#F7F7F7]">
      <PageTitle title="Dashboard" />
      <div className="pt-[72px] bg-[#9538E2]">
        <h1 className="text-3xl font-bold text-center text-white pt-8">
          Dashboard
        </h1>
        <p className="text-base leading-relaxed text-center text-white max-w-[796px] m-auto mt-4 pb-8">
          Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="flex justify-center gap-4 pb-8">
          <button
            className={`btn w-40 rounded-full text-lg font-extrabold leading-relaxed text-center ${activeComponent === "cart" ? "text-purple-600" : "text-white bg-transparent border border-white"}`}
            onClick={() => setActiveComponent("cart")}
          >
            Cart
          </button>
          <button
            className={`btn w-40 rounded-full text-lg font-medium leading-relaxed text-center ${activeComponent === "wishlist" ? "text-purple-600" : "text-white bg-transparent border border-white"}`}
            onClick={() => setActiveComponent("wishlist")}
          >
            Wishlist
          </button>
        </div>
      </div>
      <div>
        <div className="max-w-[1280px] m-auto mt-11">
          <div className="flex justify-between items-center">
            <p className="text-2xl font-bold text-center text-black">
              {activeComponent === "cart" ? "Cart" : "Wishlist"}
            </p>
            {activeComponent === "cart" && sortedCart.length > 0 && (
              <div className="flex items-center gap-3">
                <div className="text-2xl font-bold text-center text-black">
                  Total Cost:
                  <span>
                    ${totalCost}
                  </span>
                </div>
                <button
                  className="btn rounded-full btn-outline outline-[purple-600] flex items-center text-lg font-semibold leading-relaxed text-center text-purple-600"
                  onClick={sortCartByPrice}
                >
                  <span>Sort by price</span>
                </button>
                <button
                  className="btn rounded-full bg-purple-600 text-lg font-medium leading-relaxed text-center text-white"
                  onClick={handlePurchase}
                  disabled={sortedCart.length === 0}
                >
                  Purchase
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="max-w-[1280px] m-auto pb-8">
          {activeComponent === "cart" ? (
            sortedCart.length > 0 ? (
              <Cart cart={sortedCart} removeFromCart={removeFromCart} />
            ) : (
              <NothingInTheCart scrollToGadgets={scrollToGadgets} />
            )
          ) : (
            <Wishlist wishlist={wishlist} removeFromWishlist={removeFromWishlist} />
          )}
        </div>
      </div>
      {showModal && <Modal totalCost={totalCost} onClose={handleCloseModal} />}
    </div>
  );
};

export default Dashboard;