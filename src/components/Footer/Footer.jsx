import FooterSection from "../shared/FooterSection";

const Footer = () => {
  const serviceItems = ["Product Support", "Order Tracking", "Shipping & Delivery", "Returns"];

  return (
    <div className="w-full mb-24">
      <div className="max-w-[1600px] m-auto">
        <div className="max-w-[490px] m-auto">
          <h4 className="text-3xl font-bold text-center text-black pt-24">
            Gadget Heaven
          </h4>
          <p className="text-base font-medium text-center text-black text-opacity-60 mt-3 pb-8">
            Leading the way in cutting-edge technology and innovation.
          </p>
        </div>
        <div className="pt-8 border-t-2">
          <ul className="flex gap-6 md:gap-40 flex-wrap justify-center">
            <FooterSection title="Service" items={serviceItems} />
            <FooterSection title="Service" items={serviceItems} />
            <FooterSection title="Service" items={serviceItems} />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;