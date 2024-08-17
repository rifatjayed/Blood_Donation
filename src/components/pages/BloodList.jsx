import React from "react";
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

  return (
    <div className="container mx-auto mt-10">
      <Search></Search>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
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
      </div>
    </div>
  );
};

export default BloodList;
