import React from "react";

const SignUpPage = () => {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="max-w-md  md:w-full bg-white m-4 md:m-0 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
          <form>
            <div>
              <label className="block" htmlFor="">
                Name
              </label>
              <input
                className="my-2.5	 w-11/12		 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div>
              <label className="block" htmlFor="">
                Email
              </label>
              <input
                className="my-2.5	 w-11/12		 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                type="email"
                name="email"
                id="email"
              />
            </div>

            <div>
              <label className="block" htmlFor="">
                Password
              </label>
              <input
                className="my-2.5	 w-11/12		 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                type="password"
                name="password"
                id="password"
              />
            </div>

            <button
              type="submit"
              className="w-11/12	 mt-4 px-4 py-2 bg-black text-white font-semibold text-sm rounded-md shadow  focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
            >
              Sign Up{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
