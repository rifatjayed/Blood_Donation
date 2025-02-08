import axios from "axios";
import { useContext, useState } from "react";
import { api } from "../../config";
import { ToastContainer, toast } from "react-toastify"; // Import the toast components
import { AuthContext } from "../../context/AuthProvider";

const AboutUs = () => {
  const { user } = useContext(AuthContext); // Get the logged-in user

  const [formData, setFormData] = useState({
    name: "",
    profession: "",
    opinion: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here

    if (!user) {
      toast.error("You must be logged in to submit feedback!", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    try {
      const response = await axios.post(`${api}/feedback`, formData);
      setFormData({ name: "", profession: "", opinion: "" });
      // Show success toast message
      toast.success("Form submitted successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log("Form submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
      // Optionally, show error toast message
      toast.error("Error submitting form. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="min-h-screen  flex items-center justify-center p-6">
      <div className="max-w-4xl bg-white p-8 rounded-2xl  text-center">
        <h1 className="text-4xl font-bold text-[#6A0B37] mb-10">About Us</h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          Welcome to{" "}
          <span className="text-[#6A0B37] font-semibold">DonorHub</span>, a
          platform dedicated to connecting blood donors with those in urgent
          need. Our mission is to make blood donation more accessible and
          efficient by leveraging technology to bridge the gap between donors
          and recipients.
        </p>
        <div className="mt-6 text-left">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Our Mission
          </h2>
          <p className="text-gray-700">
            We aim to create a seamless and reliable system where users can
            search for blood donors based on their location and blood type. By
            ensuring a user-friendly experience, we hope to save countless lives
            through quick and efficient donor-recipient connections.
          </p>
        </div>
        <div className="mt-6 text-left">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            How It Works
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              Users can search for donors based on location and blood type.
            </li>
            <li>
              Registered donors can submit their availability to help those in
              need.
            </li>
            <li>
              Direct contact options allow quick communication between donors
              and recipients.
            </li>
            <li>
              Emergency request feature to notify nearby donors instantly.
            </li>
          </ul>
        </div>
        <div className="mt-6 text-left">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Why Choose Us?
          </h2>
          <p className="text-gray-700">
            Our platform is built with efficiency and security in mind. We
            prioritize data privacy while ensuring that users can easily find
            and connect with blood donors in their vicinity. By fostering a
            community of willing donors, we are creating a life-saving network
            accessible to everyone.
          </p>
        </div>
        <div className="mt-6 text-left">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Join Us</h2>
          <p className="text-gray-700">
            Be a hero today! Sign up as a donor and help save lives. If you're
            in need of blood, our platform ensures you find a match as quickly
            as possible. Together, we can make a difference and ensure that no
            one has to struggle to find life-saving blood when they need it the
            most.
          </p>
        </div>

        <div className="mt-10 text-left">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2 text-center ">
            Share your feedback about our platform
          </h2>
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto"
          >
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6A0B37]"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="profession"
              >
                Profession
              </label>
              <input
                type="text"
                id="profession"
                name="profession"
                value={formData.profession}
                onChange={handleChange}
                className="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6A0B37]"
                placeholder="Enter your profession"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="opinion"
              >
                Opinion
              </label>
              <textarea
                id="opinion"
                name="opinion"
                value={formData.opinion}
                onChange={handleChange}
                className="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6A0B37]"
                placeholder="Share your opinion"
                rows="4"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#6A0B37] text-white py-3 px-4 rounded-lg text-lg font-semibold shadow-md hover:bg-[#55092b] transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Add ToastContainer here */}
      <ToastContainer />
    </div>
  );
};

export default AboutUs;
