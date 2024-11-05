import { useRef } from "react";
import PageTitle from "../components/shared/PageTitle";
import Banner from "../components/Banner/Banner";
import Gadgets from "../components/Gadget/Gadgets";
import ProductDetails from "../components/ProductDetails/ProductDetails";

const Home = () => {
  const gadgetsRef = useRef(null);

  const scrollToGadgets = () => {
    if (gadgetsRef.current) {
      gadgetsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#F7F7F7] mx-2">
      <PageTitle title="Home" />
      <Banner scrollToGadgets={scrollToGadgets} />
      <div ref={gadgetsRef}>
        <Gadgets />
      </div>
      <ProductDetails />
    </div>
  );
};

export default Home;