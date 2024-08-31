import React, { useEffect, useState } from "react";
import Search from "../Search";
import axios from "axios";

import dateFormat, { masks } from "dateformat";

const BloodList = () => {
  const [userData, setUserData] = useState([]);
  const [searchData, setSearchData] = useState({
    bloodGroup: "",
    division: "",
    district: "",
    upazilla: "",
  });

  const handleSearchData = (formData) => {
    setSearchData(formData);
  };

  const handleSubmit = async (formData) => {
    console.log(formData);
    console.log("i am here");
    try {
      const response = await axios.get("http://localhost:5000/api/v1/all");
      //Push data to my local state
      // , {
      //   params: formData,
      // }
      // console.log(response.data.data);
      setUserData(response.data.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  // const allData = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:5000/api/v1/all");
  //     //push data to my local state
  //     // console.log(response);
  //     response.data.data;
  //     // console.log("Form submitted successfully:", response.data);
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //   }
  // };

  useEffect(() => {
    // allData();
  }, []);
  return (
    <div className="container mx-auto mt-10">
      <Search
        onSearchDataChange={handleSearchData}
        onHandleSubmit={handleSubmit}
      ></Search>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 hidden sm:table">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-gray-200 text-left text-gray-600">
                SI
              </th>
              <th className="py-2 px-4 bg-gray-200 text-left text-gray-600">
                Name
              </th>
              <th className="py-2 px-4 bg-gray-200 text-left text-gray-600">
                Address
              </th>
              <th className="py-2 px-4 bg-gray-200 text-left text-gray-600">
                Contact No
              </th>
              <th className="py-2 px-4 bg-gray-200 text-left text-gray-600">
                Gender
              </th>
              <th className="py-2 px-4 bg-gray-200 text-left text-gray-600">
                Blood Group
              </th>
              <th className="py-2 px-4 bg-gray-200 text-left text-gray-600">
                Last Donation Date
              </th>
            </tr>
          </thead>
          <tbody>
            {userData.map((item) => (
              <tr key={item._id} className="border-b border-gray-200">
                <td className="py-2 px-4">{item.id}</td>
                <td className="py-2 px-4">{item.firstName}</td>
                <td className="py-2 px-4">{`${item.upazilla}, ${item.district}, ${item.division}`}</td>
                <td className="py-2 px-4">{item.mobileNumber}</td>
                <td className="py-2 px-4">{item.gender}</td>
                <td className="py-2 px-4">{item.bloodGroup}</td>
                <td className="py-2 px-4">
                  {dateFormat(item.lastDonationDate, "longDate")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Mobile view */}
        <div className="sm:hidden p-2 ">
          {userData.map((item) => (
            <div key={item._id} className="border p-4 m-8 rounded-lg shadow-md">
              <div className="flex flex-col">
                <span className="font-bold">SI:</span> <span>{item.id}</span>
                <span className="font-bold">Name:</span>{" "}
                <span>{item.name}</span>
                <span className="font-bold">Address:</span>{" "}
                <span>{item.address}</span>
                <span className="font-bold">Contact No:</span>{" "}
                <span>{item.contactNo}</span>
                <span className="font-bold">Gender:</span>{" "}
                <span>{item.gender}</span>
                <span className="font-bold">Blood Group:</span>{" "}
                <span>{item.bloodGroup}</span>
                <span className="font-bold">Last Donation Date:</span>{" "}
                <span>{dateFormat(item.lastDonationDate, "fullDate")}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BloodList;
