import { useState } from "react";
import { api } from "../../config";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    const url = `${api}/auth/login`;
    try {
      const response = await axios.post(url, formData);
      console.log("Form submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error.response.data);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md  md:w-full bg-white m-4 md:m-0 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Log In</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="block" htmlFor="">
              Email
            </label>
            <input
              className="my-2.5	 w-11/12		 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
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
              onChange={handleChange}
            />
          </div>
          <Link to="/Forgot">
            <p className="text-right pr-7 text-[#648DDB]">Forgot password?</p>
          </Link>

          <button
            type="submit"
            className="w-11/12	 mt-4 px-4 py-2 bg-black text-white font-semibold text-sm rounded-md shadow  focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
