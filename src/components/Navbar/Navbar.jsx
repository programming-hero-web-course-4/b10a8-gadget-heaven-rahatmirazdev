import CartIcon from "../../assets/cart.svg";
import HeartIcon from "../../assets/wish.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { AppContext } from "../../routes/Root";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cart, wishlist } = useContext(AppContext);
  const isHomePage = location.pathname === "/";
  const bgColorClass = isHomePage && !isScrolled ? "bg-transparent" : "bg-white";
  const textColorClass = isHomePage && !isScrolled ? "text-white" : "text-black";

  const getLinkClass = (path) => {
    return location.pathname === path ? "underline" : "";
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigateToCart = () => {
    navigate("/dashboard", { state: { activeComponent: "cart" } });
  };

  const handleNavigateToWishlist = () => {
    navigate("/dashboard", { state: { activeComponent: "wishlist" } });
  };

  return (
    <nav className={`fixed w-full z-20 top-0 start-0 ${bgColorClass} ${isScrolled ? "bg-blur" : ""}`}>
      <div className="mx-2 sm:mx-3 md:mx-4 lg:mx-32 flex flex-wrap items-center justify-between p-4">
        <h1 className={`text-xl font-bold text-center ${textColorClass}`}>
          <Link to={"/"}>Gadget Heaven</Link>
        </h1>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className="flex gap-4">
            <div className="flex relative" onClick={handleNavigateToCart}>
              <span className="absolute right-[-8px] top-[-5px] bg-purple-900 text-white rounded-full w-[20px] h-[20px] flex justify-center items-center">
                {cart.length}
              </span>
              <img src={CartIcon} alt="Cart" />
            </div>
            <div className="flex relative" onClick={handleNavigateToWishlist}>
              <span className="absolute right-[-8px] top-[-5px] bg-purple-900 text-white rounded-full w-[20px] h-[20px] flex justify-center items-center">
                {wishlist.length}
              </span>
              <img src={HeartIcon} alt="Wishlist" />
            </div>
          </div>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMobileMenuOpen}
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`rounded-md mt-3 md:mt-0 bg-white md:bg-transparent items-center justify-between ${isMobileMenuOpen ? "block" : "hidden"} w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 pt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
            <li>
              <Link
                to="/"
                className={`text-base font-medium text-center ${isMobileMenuOpen ? "text-black" : textColorClass} ${getLinkClass('/')}`}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/statistics"
                className={`text-base font-medium text-center ${isMobileMenuOpen ? "text-black" : textColorClass} ${getLinkClass('/statistics')}`}
              >
                Statistics
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className={`text-base font-medium text-center ${isMobileMenuOpen ? "text-black" : textColorClass} ${getLinkClass('/dashboard')}`}
              >
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;