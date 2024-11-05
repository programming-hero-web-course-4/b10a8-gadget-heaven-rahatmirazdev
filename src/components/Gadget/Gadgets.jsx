import { useEffect, useState } from "react";
import Product from "./Product";
import NoProductsFound from "../../Error/NoProductsFound";

const Gadgets = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  const categories = [
    "All",
    "Accessories",
    "Laptops",
    "Smartphones",
    "Tablets",
    "Routers",
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="max-w-[1280px] m-auto pb-24">
      <p className="text-4xl font-bold text-center text-black max-w-[635px] mx-auto mb-12">Explore Cutting-Edge Gadgets</p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-7 mx-2">
        <div className="col-span-1">
          <div className="md:max-w-60 p-5 shadow-lg rounded-md md:block grid grid-cols-2 gap-3 ">
            {categories.map((category) => (
              <button
                key={category}
                className={`block w-full py-2 px-4 mb-2 text-center ${
                  selectedCategory === category
                    ? "btn rounded-full btn-outline border-[#9538E2] text-[#9538E2]"
                    : "btn rounded-full bg-[#9538E2] border-[#9538E2] text-white"
                } rounded`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="col-span-3">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 justify-center">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Product key={product.id} product={product} />
              ))
            ) : (
              <NoProductsFound />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gadgets;