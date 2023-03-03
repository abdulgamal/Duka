import { AppContext } from "@/context/ProductContext";
import React, { useContext } from "react";

function Modal() {
  const { open, toggleModal, cart, addProductToCart, removeProductFromCart } =
    useContext(AppContext);
  const total = cart.reduce((acc, cum) => acc + cum.price * cum.qty, 0);
  return (
    <div
      id="popup-modal"
      tabIndex="-1"
      className={`fixed top-0 left-0 right-0 z-50 ${
        !open && "hidden"
      } p-4 overflow-x-hidden flex justify-center items-center flex-col bg-black/25 overflow-y-auto md:inset-0 h-full md:h-full`}
    >
      <div className="relative w-full max-w-md md:h-auto">
        <div className="relative overflow-x-auto shadow-md sm:rounded-t-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product
                </th>
                <th scope="col" className="px-6 py-3">
                  Qty
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product) => (
                <tr
                  className="bg-white border-b hover:bg-gray-50"
                  key={product?.id}
                >
                  <td className="w-32 p-4">
                    <img src={product?.thumbnail} alt={product?.title} />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <button
                        className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                        type="button"
                        onClick={() => removeProductFromCart(product)}
                      >
                        <span className="sr-only">Quantity button</span>
                        <svg
                          className="w-4 h-4"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </button>
                      <div>
                        <input
                          type="number"
                          id="first_product"
                          className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1"
                          placeholder="1"
                          value={product?.qty}
                          onChange={() => {}}
                          required
                        />
                      </div>
                      <button
                        className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                        type="button"
                        onClick={() => addProductToCart(product)}
                      >
                        <span className="sr-only">Quantity button</span>
                        <svg
                          className="w-4 h-4"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    ${product?.price * product?.qty}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {cart.length === 0 ? (
          <div className="p-6 text-center w-full bg-black">
            <svg
              aria-hidden="true"
              className="mx-auto mb-4 text-white w-14 h-14"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <h3 className="mb-5 text-lg font-normal text-white">
              No product on the cart yet!
            </h3>
          </div>
        ) : (
          <div className="flex items-center justify-around py-3 bg-white">
            <p>Total</p>
            <p>${total}</p>
          </div>
        )}
        <button
          type="button"
          onClick={toggleModal}
          className="text-white w-full bg-teal-500 hover:bg-teal-200 hover:text-gray-900 text-sm p-1.5 ml-auto inline-flex items-center justify-center"
          data-modal-hide="popup-modal"
        >
          close
          <span className="sr-only">Close modal</span>
        </button>
      </div>
    </div>
  );
}

export default Modal;
