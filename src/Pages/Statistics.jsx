import { useEffect, useState } from "react";
import PageTitle from "../components/shared/PageTitle";
import ProductChart from "../components/Chart/ProductChart";

const Statistics = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  return (
    <div className="">
      <PageTitle title="Statistics" />
      <div className="pt-[72px] bg-[#9538E2] ">
        <h4 className="text-3xl font-bold text-center text-white pt-8">
          Dashboard
        </h4>
        <p className="text-base leading-relaxed text-center text-white max-w-[796px] m-auto mt-4 pb-8">
          Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="mt-[72px] mx-2 sm:mx-3 md:mx-4 lg:mx-32 ">
        <h4 className="text-2xl font-bold text-left text-black">Statistics</h4>
        {products.length > 0 ? (
          <ProductChart products={products} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Statistics;