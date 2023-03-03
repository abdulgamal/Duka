import { AppContext } from "@/context/ProductContext";
import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";

function Container() {
  const [categories, setCategories] = useState([]);
  const { products, fetchByCategory, getProducts } = useContext(AppContext);
  const [initial, setInitial] = useState(10);
  const [all, setAll] = useState(false);
  const [category, setCategory] = useState("All");

  const handleClick = () => {
    setInitial(20);
    setAll(true);
  };

  const toggleLess = () => {
    setInitial(10);
    setAll(false);
  };

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((response) => response.json())
      .then((responseData) => {
        const data = responseData.slice(0, 20);
        setCategories(["All", ...data]);
      });
  }, []);

  useEffect(() => {
    if (category !== "All") {
      fetchByCategory(category);
    } else {
      getProducts();
    }
  }, [category]);
  return (
    <div className="my-7" id="products">
      <h2 className="font-bold text-gray-600 text-xl text-center">
        Featured Products
      </h2>
      <div className="flex my-5 justify-center items-center px-3 md:px-7">
        <ul className="flex gap-4 overflow-x-auto py-4 scrollbar-hide">
          {categories.map((cat, index) => (
            <li
              className={`text-xs ${
                cat === category ? "text-red-300" : "text-gray-400"
              } cursor-pointer font-bold`}
              key={index}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-[80%] mx-auto my-2 grid md:grid-cols-4 gap-4">
        {products?.slice(0, initial).map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </div>
      {products.length > 10 && (
        <div className="flex justify-center items-center my-8">
          {all ? (
            <button
              className="bg-[#047A7E] text-gray-300 uppercase text-xs py-3 px-6"
              onClick={toggleLess}
            >
              See Less
            </button>
          ) : (
            <button
              className="bg-[#047A7E] text-gray-300 uppercase text-xs py-3 px-6"
              onClick={handleClick}
            >
              See More
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default Container;
