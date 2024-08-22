import { useEffect, useState } from "react";
import buttonImg from "../../assets/img/correct.png";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import divisionData from "../../assets/division";
import axios from "axios";

const RegisterPage = () => {
  // console.log(divisionData[0].district[0].district);
  const [showModal, setShowModal] = useState(false);
  const [divisionIdx, setDivisionIdx] = useState(-1);
  const [districtIdx, setDistrictIdx] = useState(-1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    gender: "",
    bloodGroup: "",
    lastDonate: Date.now(),
    birth: Date.now(),
    division: "",
    district: "",
    upazilla: "",
    password: "",
    confirmPass: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    setShowModal(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/auth/register",
        formData
      );
      console.log("Form submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className=" 	">
      {/* flex items-center justify-center min-h-screen bg-gray-100 */}
      <div className=" bg-white rounded-lg  ">
        {/* max-w-md w-full */}
        <div
          className="bg-gradient-to-l"
          style={{
            background:
              "linear-gradient(90deg, hsla(323, 87%, 15%, 1) 0%, hsla(345, 67%, 42%, 1) 100%)",
            background:
              "-moz-linear-gradient(90deg, hsla(323, 87%, 15%, 1) 0%, hsla(345, 67%, 42%, 1) 100%)",
            background:
              "-webkit-linear-gradient(90deg, hsla(323, 87%, 15%, 1) 0%, hsla(345, 67%, 42%, 1) 100%)",
            filter:
              'progid:DXImageTransform.Microsoft.gradient(startColorstr="#46052d", endColorstr="#b32346", GradientType=1)',
          }}
        >
          {/* <!-- Your content here --> */}
          <h2 className=" text-white	py-[60px] font-roboto	 text-4xl font-medium mb-6 text-center">
            Register As Donor
          </h2>
        </div>

        <div className="md:mx-10 p-6 shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="grid  md:grid-cols-2 md:gap-24">
              <div>
                <label
                  className="text-sm font-medium font-roboto text-[#4D4D4D] mb-2 text-left"
                  htmlFor=""
                >
                  Fast Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="firstName"
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none  "
                  required
                />
              </div>

              <div>
                <label
                  className="text-sm font-medium font-roboto text-[#4D4D4D] mb-2 text-left"
                  htmlFor=""
                >
                  Last Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="lastName"
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none  "
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 md:gap-24">
              <div>
                <label
                  className=" text-sm font-medium font-roboto text-[#4D4D4D] mb-2 text-left"
                  htmlFor=""
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none  "
                  required
                />
              </div>

              <div>
                <label
                  className="text-sm font-medium font-roboto text-[#4D4D4D] mb-2 text-left"
                  htmlFor=""
                >
                  Mobile Number:
                </label>
                <input
                  type="text"
                  id="number"
                  name="mobileNumber"
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300  rounded-md focus:outline-none  "
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 md:gap-24">
              <div className="mb-4">
                <label className=" text-sm font-medium font-roboto text-[#4D4D4D] text-left">
                  Blood Group:
                </label>
                <select
                  id="blood-group"
                  name="bloodGroup"
                  onChange={handleChange}
                  required
                  className="mt-1  w-full py-2 px-3 border bg-white border-gray-300  rounded-md shadow-sm focus:outline-none  sm:text-sm"
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

              <div></div>
            </div>

            <div className="mb-4">
              <label className=" text-sm font-medium font-roboto text-[#4D4D4D] text-left">
                Gender:
              </label>
              <div className="mt-2 flex items-center">
                <label className="inline-flex items-center mr-4">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    onChange={handleChange}
                    className="form-radio h-4 w-4  border-gray-300 "
                    required
                  />
                  <span className="ml-2 text-gray-700">Male</span>
                </label>
                <label className="inline-flex items-center mr-4">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    onChange={handleChange}
                    className="form-radio h-4 w-4  border-gray-300 "
                  />
                  <span className="ml-2 text-gray-700">Female</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Other"
                    onChange={handleChange}
                    className="form-radio h-4 w-4 border-gray-300 "
                  />
                  <span className="ml-2 text-gray-700">Other</span>
                </label>
              </div>
            </div>
            <div className="">
              <label
                className=" text-sm font-medium font-roboto text-[#4D4D4D] mb-2 text-left"
                htmlFor=""
              >
                Date Of Birth:
              </label>
              <DatePicker
                required
                className="w-full px-3 py-2 mb-4 ms-4 border border-gray-300 rounded-md focus:outline-none  "
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
                className=" text-sm font-medium font-roboto text-[#4D4D4D] mb-2 text-left"
                htmlFor=""
              >
                Last Donate:
              </label>
              <DatePicker
                className="w-full md:px-3 py-2 mb-4 ms-4 border border-gray-300 rounded-md focus:outline-none  focus:border-red-500"
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

            <div className="grid md:grid-cols-2 md:gap-24">
              <div className="mb-4">
                <label className=" text-sm font-medium font-roboto text-[#4D4D4D] text-left">
                  Division:
                </label>
                <select
                  id="division"
                  name="division"
                  value={formData.division}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      division: e.target.value,
                      district: "",
                      upazilla: "",
                    });
                    setDistrictIdx(-1);
                    setDivisionIdx(e.target.selectedIndex - 1);
                  }}
                  className="mt-1  w-full py-2 px-3 border bg-white border-gray-300  rounded-md shadow-sm focus:outline-none  sm:text-sm"
                >
                  <option value={""}>Please select a division</option>
                  {divisionData.map((division, index) => (
                    <option value={division.division} key={index}>
                      {division.division}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label className="text-sm font-medium font-roboto text-[#4D4D4D] text-left">
                  District:
                </label>
                <select
                  id="district"
                  name="district"
                  value={formData.district}
                  onChange={(e) => {
                    // handleChange(e);
                    setFormData({
                      ...formData,
                      district: e.target.value,
                      upazilla: "",
                    });
                    setDistrictIdx(e.target.selectedIndex - 1);
                  }}
                  className="mt-1 bg-white  w-full py-2 px-3 border border-gray-300  rounded-md shadow-sm focus:outline-none  sm:text-sm"
                >
                  {divisionIdx == -1 ? (
                    <option value={""}>Please select a division first</option>
                  ) : (
                    <option value={""}>Please select a district</option>
                  )}

                  {divisionIdx !== -1 &&
                    divisionData[divisionIdx].district.map(
                      (district, index) => (
                        <option value={district.district} key={index}>
                          {district.district}
                        </option>
                      )
                    )}
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 md:gap-24">
              <div className="mb-4">
                <label className="text-sm font-medium font-roboto text-[#4D4D4D] text-left">
                  Upazilla:
                </label>
                <select
                  id="upazilla"
                  name="upazilla"
                  value={formData.upazilla}
                  onChange={handleChange}
                  className="mt-1  bg-white w-full py-2 px-3 border border-gray-300  rounded-md shadow-sm focus:outline-none  sm:text-sm"
                >
                  {districtIdx !== -1 ? (
                    <option value={""}>Please select an upazilla</option>
                  ) : (
                    <option value={""}>Please select a District first</option>
                  )}
                  {districtIdx !== -1 &&
                    divisionData[divisionIdx].district[
                      districtIdx
                    ].upazilla.map((upazilla, index) => (
                      // eslint-disable-next-line react/jsx-key
                      <option value={upazilla} key={index} ind={index}>
                        {upazilla}
                      </option>
                    ))}
                </select>
              </div>

              <div></div>
            </div>

            <div className="grid  md:grid-cols-2 md:gap-24">
              <div>
                <label
                  className="text-sm font-medium font-roboto text-[#4D4D4D] mb-2 text-left"
                  htmlFor=""
                >
                  Password:
                </label>
                <input
                  type="password"
                  id="name"
                  name="password"
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none  "
                  required
                />
              </div>

              <div>
                <label
                  className="text-sm font-medium font-roboto text-[#4D4D4D] mb-2 text-left"
                  htmlFor=""
                >
                  Confirm Password:
                </label>
                <input
                  type="password"
                  id="name"
                  name="confirmPass"
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none  "
                  required
                />
              </div>
            </div>

            <div className="mt-6 flex md:justify-end justify-center ">
              <button
                type="submit"
                className="flex  border drop-shadow-lg px-12 py-3 font-roboto  text-black font-bold text-sm rounded-lg"
              >
                Submit
                <span>
                  <img className="w-5 ms-2" src={buttonImg} alt="" />
                </span>
              </button>
            </div>
          </form>

          {/* {isSubmitted && (
            <div className="mt-4 p-4 bg-green-100 text-green-800 rounded">
              Form submitted successfully!
            </div>
          )} */}

          {showModal && (
            <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-8 rounded shadow-lg text-center">
                <h2 className="text-2xl font-bold mb-4">Success!</h2>
                <p className="text-gray-700 mb-6">
                  Your form has been submitted successfully.
                </p>
                <button
                  className="bg-[#6A0B37] text-white py-2 px-4 rounded"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
