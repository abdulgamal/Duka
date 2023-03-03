import { AppContext } from "@/context/ProductContext";
import React, { useContext } from "react";

function Card({ product }) {
  const { addProductToCart } = useContext(AppContext);
  return (
    <div className="bg-[#F7F7F7] max-w-md p-2 shadow-md hover:shadow-xl hover:shadow-[#E7F2F3] cursor-pointer">
      <div className="h-[150px]">
        <img
          src={product?.thumbnail}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <p className="my-1 text-sm font-bold text-gray-600">{product?.title}</p>
      <div className="flex items-center gap-2">
        <p className="text-xs text-gray-300">${product?.price + 100}</p>
        <p className="text-xs text-[#228488] font-semibold">
          ${product?.price}
        </p>
      </div>
      <div className="flex justify-between items-center my-1">
        <p className="text-xs text-[#0C9094]">
          <span className="text-[#FFA901]">{product?.stock}</span> in stock
        </p>
        <div className="flex items-center gap-1">
          <p className="text-xs">{product?.rating.toFixed(1)}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 text-[#FFA901]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center my-2">
        <button
          onClick={() => addProductToCart(product)}
          className="bg-[#0C9094] text-xs text-white px-5 py-1 rounded-md hover:bg-white hover:text-[#0C9094]"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default Card;
