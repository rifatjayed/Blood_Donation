import React from "react";
import { Link } from "react-router-dom";

const NewPassPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md  md:w-full bg-white m-4 md:m-0 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-3 text-center">
          Set New Password
        </h2>
        <p className="mb-5 text-[#313131] text-center">
          Your previous password has been reseted. Please set a new password for
          your account.
        </p>
        <form>
          <div>
            <label className="block" htmlFor="">
              Set New Password
            </label>
            <input
              className="my-2.5	 w-11/12 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              type="password"
              name="password"
              id="password"
            />
          </div>

          <div>
            <label className="block" htmlFor="">
              Confirm Password
            </label>
            <input
              className="my-2.5	 w-11/12		 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              type="password"
              name="Confirm_password"
              id="Confirm_password"
            />
          </div>

          <button
            type="submit"
            className="w-11/12	 mt-4 px-4 py-2 bg-black text-white font-semibold text-sm rounded-md shadow  focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewPassPage;
