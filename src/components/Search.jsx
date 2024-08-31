import { useEffect, useState } from "react";
import divisiondistrict from "../assets/division";
import { Link } from "react-router-dom";

const Search = ({ onHandleSubmit, searchData }) => {
  const [divisionIdx, setDivisionIdx] = useState(-1);
  const [districtIdx, setDistrictIdx] = useState(-1);
  const [formData, setFormData] = useState({
    bloodGroup: "",
    division: "",
    district: "",
    upazilla: "",
  });

  const handleChange = (e) => {
    // console.log(e.target);
    const updatedData = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    setFormData(updatedData);
  };
  useEffect(() => {
    searchData && setFormData(searchData);
    // console.log(searchData);
  }, []);

  return (
    <div className="flex items-center justify-center  ">
      <div className=" md:w-5/6		 bg-white p-4 md:p-8 rounded-lg shadow-md">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onHandleSubmit(formData);
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 "
        >
          <div className="mb-4">
            <label className="block font-roboto text-sm font-medium  text-[#4D4D4D] text-left">
              Blood Group:
            </label>
            <select
              id="blood-group"
              name="bloodGroup"
              value={formData.bloodGroup}
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
            <label className="block text-sm font-medium font-roboto text-[#4D4D4D] text-left">
              Division
            </label>
            <select
              id="division"
              name="division"
              value={formData.division}
              onChange={(e) => {
                // handleChange(e);
                const updatedData = {
                  ...formData,
                  division: e.target.value,
                  district: "",
                  upazilla: "",
                };
                setFormData(updatedData);

                setDistrictIdx(-1);
                setDivisionIdx(e.target.selectedIndex - 1);
              }}
              className="mt-1 w-full py-2 px-3 border border-gray-300  rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
            >
              <option value={""}>Please select a division</option>
              {divisiondistrict.map((division, index) => (
                // eslint-disable-next-line react/jsx-key
                <option value={division.division} key={index} ind={index}>
                  {division.division}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium font-roboto text-[#4D4D4D] text-left">
              Zila
            </label>
            <select
              id="blood-group"
              name="district"
              value={formData.district}
              onChange={(e) => {
                // handleChange(e);
                const updatedData = {
                  ...formData,
                  district: e.target.value,
                  upazilla: "",
                };
                setFormData(updatedData);

                setDistrictIdx(e.target.selectedIndex - 1);
              }}
              className="mt-1  w-full py-2 px-3 border border-gray-300  rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
            >
              {divisionIdx + 1 ? (
                <option value={""}>Please select a district</option>
              ) : (
                <option value={""}>Please select a division first</option>
              )}

              {divisionIdx + 1 &&
                divisiondistrict[divisionIdx].district.map(
                  (district, index) => (
                    // eslint-disable-next-line react/jsx-key
                    <option value={district.district} key={index} ind={index}>
                      {district.district}
                    </option>
                  )
                )}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium font-roboto text-[#4D4D4D] text-left">
              Upzilla
            </label>
            <select
              id="blood-group"
              name="upazilla"
              value={formData.upazilla}
              onChange={(e) => {
                handleChange(e);
              }}
              className="mt-1  w-full py-2 px-3 border border-gray-300  rounded-md shadow-sm focus:outline-none  sm:text-sm"
            >
              {districtIdx + 1 ? (
                <option value={""}>Please select an upazilla</option>
              ) : (
                <option value={""}>Please select a zill first</option>
              )}
              {districtIdx + 1 &&
                divisiondistrict[divisionIdx].district[
                  districtIdx
                ].upazilla.map((upazilla, index) => (
                  // eslint-disable-next-line react/jsx-key
                  <option value={upazilla} key={index} ind={index}>
                    {upazilla}
                  </option>
                ))}
            </select>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 bg-black font-roboto text-sm font-medium text-white rounded-lg"
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
