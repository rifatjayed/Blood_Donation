import { useEffect, useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import divisionData from "../../assets/division";

const RegisterPage = () => {
  console.log(divisionData[0].district[0].district);

  const [division, setDivision] = useState();
  const [district, setDistrict] = useState();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    bloodGroup: "",
    lastDonate: Date.now(),
    birth: Date.now(),
    division: "Dhaka",
    district: "",
    upzilla: "",
  });

  useEffect(() => {
    const result = divisionData.find(
      (item) => item[division] === formData.division
    );
    setDivision(result);
    console.log("----------------------------------------------------");
    console.log(division);
  }, [formData.division]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        <form onSubmit={handleSubmit}>
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-2 text-left"
              htmlFor=""
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none  focus:border-red-500"
              required
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-2 text-left"
              htmlFor=""
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none  focus:border-red-500"
              required
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-2 text-left"
              htmlFor=""
            >
              Mobile Number
            </label>
            <input
              type="text"
              id="number"
              name="number"
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300  rounded-md focus:outline-none  focus:border-red-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 text-left">
              Blood Group:
            </label>
            <select
              id="blood-group"
              name="bloodGroup"
              onChange={handleChange}
              className="mt-1  w-full py-2 px-3 border border-gray-300  rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
            >
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 text-left">
              Gender:
            </label>
            <div className="mt-2 flex items-center">
              <label className="inline-flex items-center mr-4">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={handleChange}
                  className="form-radio h-4 w-4 text-red-600 border-gray-300 focus:ring-red-500"
                />
                <span className="ml-2 text-gray-700">Male</span>
              </label>
              <label className="inline-flex items-center mr-4">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={handleChange}
                  className="form-radio h-4 w-4 text-red-600 border-gray-300 focus:ring-red-500"
                />
                <span className="ml-2 text-gray-700">Female</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Other"
                  onChange={handleChange}
                  className="form-radio h-4 w-4 text-red-600 border-gray-300 focus:ring-red-500"
                />
                <span className="ml-2 text-gray-700">Other</span>
              </label>
            </div>
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-2 text-left"
              htmlFor=""
            >
              Date Of Birth:
            </label>
            <DatePicker
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none  focus:border-red-500"
              selected={formData.birth}
              //   onSelect={handleDateSelect}
              onChange={(date) => {
                setFormData({
                  ...formData,
                  birth: date,
                });
              }}
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-2 text-left"
              htmlFor=""
            >
              Last Donate
            </label>
            <DatePicker
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none  focus:border-red-500"
              selected={formData.lastDonate}
              //   onSelect={handleDateSelect}
              onChange={(date) => {
                setFormData({
                  ...formData,
                  lastDonate: date,
                });
              }}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 text-left">
              Division
            </label>
            <select
              id="blood-group"
              name="bloodGroup"
              onChange={handleChange}
              className="mt-1  w-full py-2 px-3 border border-gray-300  rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
            >
              {divisionData.map((division) => (
                // eslint-disable-next-line react/jsx-key
                <option value={division.division}>{division.division}</option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 text-left">
              District
            </label>
            <select
              id="blood-group"
              name="bloodGroup"
              onChange={handleChange}
              className="mt-1  w-full py-2 px-3 border border-gray-300  rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
            >
              {/* <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option> */}
              {/* {console.log(division)} */}
              {/* {division.district.map((district) => (
                // eslint-disable-next-line react/jsx-key
                <option value={district.district}>{district.district}</option>
              ))} */}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 text-left">
              Upazilla
            </label>
            <select
              id="blood-group"
              name="bloodGroup"
              onChange={handleChange}
              className="mt-1  w-full py-2 px-3 border border-gray-300  rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
            >
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 bg-[#e42313] text-white font-semibold text-sm rounded-md shadow hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
