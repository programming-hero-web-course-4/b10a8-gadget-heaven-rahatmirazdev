import ButtonPrimary from "../shared/ButtonPrimary";
import BannerImage from "../../assets/banner.jpg";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/dashboard");
  };

  return (
    <div className="bg-[#9538E2] pt-16 mx-2 rounded-md mt-2 h-[834px] md:h-[794px] mb-[442px]">
      <div className="mx-2 sm:mx-3 md:mx-4 lg:mx-32 m-auto p-4">
        <div className="mt-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold leading-[72px] text-center text-white">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="text-base leading-relaxed text-center text-white max-w-[796px] mx-auto mt-4">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <div className="mt-4 relative">
            <ButtonPrimary onClick={handleButtonClick} />
            <div className="flex justify-center items-center max-w-screen-lg p-4 rounded-xl border m-auto mt-12">
              <img className="rounded-xl" src={BannerImage} alt="Banner" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Banner;