import { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((result) => {
        setSuccess("Login done");
        e.target.reset();
        navigate("/");
        console.log(result);
      })
      .catch((error) => {
        setError("error khyse re");
        console.log(error);
      });
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
          <Link to="/Forgot">
            <p className="text-right pr-7 text-[#648DDB]">Forgot password?</p>
          </Link>
          {error && <p className="text-red-500">{error}</p>}
          {success && <p>{success}</p>}
          <button
            type="submit"
            className="w-11/12	 mt-4 px-4 py-2 bg-black text-white font-semibold text-sm rounded-md shadow  focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
          >
            Log In
          </button>
        </form>

        <div>
          <p className="text-[#303030] text-[18px] font-normal	">
            Don’t have an account?{" "}
            <span className="text-[#2D31AB]">
              <Link to="/Signup">Sign Up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
