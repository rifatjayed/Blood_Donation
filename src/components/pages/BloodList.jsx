import { useEffect, useState } from "react";
import Search from "../Search";
import axios from "axios";
import { api } from "../../config";

import dateFormat from "dateformat";
import { useLocation } from "react-router-dom";

const BloodList = () => {
  const location = useLocation();
  const [userData, setUserData] = useState([]);
  const [searchData, setSearchData] = useState({
    bloodGroup: "",
    division: "",
    district: "",
    upazilla: "",
  });

  const handleSubmit = async (formData) => {
    setSearchData(formData);
  };

  const getData = async () => {
    const url = `${api}/all`;
    try {
      const response = await axios.get(url, { params: searchData });
      setUserData(response.data.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  useEffect(() => {
    location.state && setSearchData(location.state);
  }, []);

  useEffect(() => {
    getData();
  }, [searchData]);
  return (
    <div className="container mx-auto mt-10">
      <Search onHandleSubmit={handleSubmit} searchData={location.state} />
      <div className="overflow-x-auto mt-5">
        <h2 className="font-roboto font-bold flex justify-center items-center  text-4xl	my-[30px]">
          Donnar List
        </h2>

        {/* Check if there is any data */}
        {userData.length === 0 ? (
          <div className="flex justify-center items-center h-32">
            <p className="text-black text-xl">No blood donor found</p>
          </div>
        ) : (
          <table className="min-w-full bg-white border border-gray-200 mb-10 hidden sm:table">
            <thead>
              <tr>
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
                  <td className="py-2 px-4">{`${item.firstName} ${item.lastName}`}</td>
                  <td className="py-2 px-4">{`${item.upazilla}, ${item.district}, ${item.division}`}</td>
                  <td className="py-2 px-4">{item.mobileNumber}</td>
                  <td className="py-2 px-4">{item.gender}</td>
                  <td className="py-2 px-4">{item.bloodGroup}</td>
                  <td className="py-2 px-4">
                    {dateFormat(item.lastDonate, "longDate")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* Mobile view */}
        <div className="sm:hidden p-2 ">
          {userData.map((item) => (
            <div key={item._id} className="border p-4 m-8 rounded-lg shadow-md">
              <div className="flex flex-col">
                <span className="font-bold">Name:</span>{" "}
                <span>{`${item.firstName} ${item.lastName}`}</span>
                <span className="font-bold">Address:</span>{" "}
                <span>{`${item.upazilla}, ${item.district}, ${item.division}`}</span>
                <span className="font-bold">Contact No:</span>{" "}
                <span>{item.mobileNumber}</span>
                <span className="font-bold">Gender:</span>{" "}
                <span>{item.gender}</span>
                <span className="font-bold">Blood Group:</span>{" "}
                <span>{item.bloodGroup}</span>
                <span className="font-bold">Last Donation Date:</span>{" "}
                <span>{dateFormat(item.lastDonate, "fullDate")}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BloodList;
