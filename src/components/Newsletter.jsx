import React from "react";

function Newsletter() {
  return (
    <div className="bg-[#F7F7F7] p-5 mt-4">
      <section className="max-w-xl mt-12 mx-auto px-4 md:block md:px-8">
        <div className="space-y-3 text-center">
          <h3 className="md:text-3xl text-gray-600 font-semibold tracking-wider">
            Sign Up to receive news and updates along with 25% off your first
            order
          </h3>
        </div>
        <div className="mt-6">
          <form className="items-center justify-center sm:flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="text-gray-500 w-full p-3 rounded-md border outline-none focus:border-indigo-600"
            />
            <button className="w-full mt-3 px-5 py-3 rounded-md text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 duration-150 outline-none shadow-md focus:shadow-none focus:ring-2 ring-offset-2 ring-indigo-600 sm:mt-0 sm:ml-3 sm:w-auto">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Newsletter;
