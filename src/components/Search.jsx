import { useEffect, useState } from "react";
import divisiondistrict from "../assets/division";

const Search = () => {
  const [division, setDivision] = useState();
  const [district, setDistrict] = useState();
  const [formData, setFormData] = useState({
    bloodGroup: "",
    division: "Barishal",
    district: "",
    upazilla: "",
  });

  const handleChange = (e) => {
    console.log(e.target);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex items-center justify-center  ">
      <div className=" w-3/4	 bg-white p-8 rounded-lg shadow-md">
        <form action="" className="grid grid-cols-5 ">
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
              Division
            </label>
            <select
              id="division"
              name="division"
              onChange={(e) => {
                handleChange(e);
                setDivision(e.target.ind);
                // console.log(e.target.ind);
                // console.log("division: ", division);
              }}
              className="mt-1  w-full py-2 px-3 border border-gray-300  rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
            >
              {divisiondistrict.map((division, index) => (
                // eslint-disable-next-line react/jsx-key
                <option value={division.division} key={index} ind={index}>
                  {division.division}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 text-left">
              Zila
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
              Upzilla
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
              className="w-full px-4 py-2 bg-[#c6414c] hover:bg-[#B30412] text-white font-semibold text-sm rounded-md shadow  focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
