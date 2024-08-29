import React, { useEffect } from "react";
import Search from "../Search";

const BloodList = () => {
  const data = [
    {
      id: 1,
      name: "John Doe",
      address: "Bogura, Sherpur",
      contactNo: "01639811851",
      gender: "Male",
      bloodGroup: "A+",
      lastDonationDate: "10-12-24",
    },
  ];
  useEffect(() => {}, []);
  return (
    <div className="container mx-auto mt-10">
      <Search></Search>
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
            {data.map((item) => (
              <tr key={item.id} className="border-b border-gray-200">
                <td className="py-2 px-4">{item.id}</td>
                <td className="py-2 px-4">{item.name}</td>
                <td className="py-2 px-4">{item.address}</td>
                <td className="py-2 px-4">{item.contactNo}</td>
                <td className="py-2 px-4">{item.gender}</td>
                <td className="py-2 px-4">{item.bloodGroup}</td>
                <td className="py-2 px-4">{item.lastDonationDate}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Mobile view */}
        <div className="sm:hidden p-2 ">
          {data.map((item) => (
            <div key={item.id} className="border p-4 m-8 rounded-lg shadow-md">
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
                <span>{item.lastDonationDate}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BloodList;
