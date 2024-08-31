import axios from "axios";
import { useState } from "react";
import { api } from "../../config";

const AboutUs = () => {
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
    try {
      const response = await axios.post(`${api}/feedback`, formData);
      console.log("Form submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      <div
        className="bg-gradient-to-l"
        style={{
          background: `linear-gradient(90deg, hsla(323, 87%, 15%, 1) 0%, hsla(345, 67%, 42%, 1) 100%),
             -moz-linear-gradient(90deg, hsla(323, 87%, 15%, 1) 0%, hsla(345, 67%, 42%, 1) 100%),
             -webkit-linear-gradient(90deg, hsla(323, 87%, 15%, 1) 0%, hsla(345, 67%, 42%, 1) 100%)`,
          filter:
            'progid:DXImageTransform.Microsoft.gradient(startColorstr="#46052d", endColorstr="#b32346", GradientType=1)',
        }}
      >
        {/* <!-- Your content here --> */}
        <h2 className=" text-white	py-[60px] font-roboto	 text-4xl font-medium mb-6 text-center">
          About us
        </h2>
      </div>

      <section className="md:mx-[50px] md:my-[100px]">
        <div className="md:mx-[50px]  md:flex  md:items-center justify-between">
          <div className="w-full md:w-2/5">
            <h1 className="font-roboto font-bold	text-4xl	my-[30px]  flex justify-center items-center md:justify-start">
              Your Opinion
            </h1>
          </div>
          <div>
            {/* min-h-screen flex items-center justify-center bg-gray-100 */}
            {/*  */}
            <div className="md:flex  md:flex-row gap-8 w-full ">
              <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-lg shadow-md  max-w-md"
              >
                <h2 className="text-2xl font-bold mb-6 text-center">
                  Feedback Form
                </h2>

                {/* Name Field */}
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm  sm:text-sm"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                {/* Profession Field */}
                <div className="mb-4">
                  <label
                    htmlFor="profession"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Profession
                  </label>
                  <input
                    type="text"
                    id="profession"
                    name="profession"
                    value={formData.profession}
                    onChange={handleChange}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm sm:text-sm"
                    placeholder="Enter your profession"
                    required
                  />
                </div>

                {/* Opinion Field */}
                <div className="mb-6">
                  <label
                    htmlFor="opinion"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Opinion
                  </label>
                  <textarea
                    id="opinion"
                    name="opinion"
                    value={formData.opinion}
                    onChange={handleChange}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm sm:text-sm"
                    placeholder="Share your opinion"
                    rows="4"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#6A0B37] text-white py-2 px-4 rounded-md "
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
