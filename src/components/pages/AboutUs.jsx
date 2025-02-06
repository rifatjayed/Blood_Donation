import axios from "axios";
import { useState } from "react";
import { api } from "../../config";

const AboutUs = () => {
  const [showModal, setShowModal] = useState(false);
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
    <div className="mx-5 md:mx-[50px] ">
      {/* <h1 className="text-6xl font-semibold text-center my-10">About Us</h1> */}

      {/* <div>
        <h1
          className="font-semibold text-2xl
"
        >
          Saving Lives, One Drop at a Time
        </h1>
        <p className="mt-3">
          Welcome to DonorHub , a life-saving initiative dedicated to bridging
          the gap between blood donors and those in urgent need. Our platform is
          built with the vision of ensuring that no one has to struggle to find
          a life-saving blood donor in times of emergency. With a seamless,
          technology-driven approach, we connect voluntary donors with patients,
          making blood donation easier, faster, and more efficient
        </p>
      </div>
      <div>
        <h1
          className="font-semibold text-2xl
"
        >
          Our Mission
        </h1>
        <p className="mt-3">
          At DonorHub, our mission is simple yet powerful: 🔴 To save lives by
          ensuring quick and easy access to blood donors. 🔴 To create a strong
          and reliable network of voluntary blood donors. 🔴 To promote
          awareness and encourage people to donate blood regularly. We believe
          that no life should be lost due to the unavailability of blood. With
          the power of technology and a community-driven approach, we are making
          blood donation more accessible than ever.
        </p>
      </div> */}

      <header class=" text-black py-6 text-center">
        <h1 class="text-4xl font-bold">About Us</h1>
        <p class="text-lg">Saving Lives, One Drop at a Time</p>
      </header>

      <section class="container mx-auto px-6 py-12 max-w-7xl">
        <div class="text-center max-w-3xl mx-auto">
          <h2 class="text-3xl font-semibold text-black">Who We Are</h2>
          <p class="mt-4 text-lg text-gray-700">
            We are a dedicated platform committed to bridging the gap between
            blood donors and those in need. Our mission is to create a seamless
            and efficient system where individuals can easily donate and request
            blood, ensuring that no life is lost due to a lack of timely
            donation.
          </p>
        </div>
      </section>

      <section class="container mx-auto px-6 py-12 bg-white rounded-lg shadow-lg max-w-7xl">
        <h2 class="text-3xl font-semibold text-center text-black">
          Our Mission
        </h2>
        <div class="grid md:grid-cols-3 gap-8 mt-8 text-center">
          <div class="p-6 border rounded-lg shadow">
            <h3 class="text-xl font-bold text-black">Save Lives</h3>
            <p class="mt-2 text-gray-700">
              Connecting donors with those in urgent need.
            </p>
          </div>
          <div class="p-6 border rounded-lg shadow">
            <h3 class="text-xl font-bold text-black">Easy & Fast</h3>
            <p class="mt-2 text-gray-700">
              A seamless process to find and donate blood quickly.
            </p>
          </div>
          <div class="p-6 border rounded-lg shadow">
            <h3 class="text-xl font-bold text-black">Community Support</h3>
            <p class="mt-2 text-gray-700">
              Building a strong network of voluntary donors.
            </p>
          </div>
        </div>
      </section>

      <section class="container mx-auto px-6 py-12 max-w-7xl">
        <h2 class="text-3xl font-semibold text-center text-black">
          Why Choose Us?
        </h2>
        <div class="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div class="p-4 bg-white rounded-lg shadow">
            <h3 class="text-lg font-bold">Fast & Reliable</h3>
            <p class="text-gray-700">Instant donor-recipient matching.</p>
          </div>
          <div class="p-4 bg-white rounded-lg shadow">
            <h3 class="text-lg font-bold">Verified Donors</h3>
            <p class="text-gray-700">Secure and authentic donor database.</p>
          </div>
          <div class="p-4 bg-white rounded-lg shadow">
            <h3 class="text-lg font-bold">Completely Free</h3>
            <p class="text-gray-700">No charges, just a life-saving mission.</p>
          </div>
          <div class="p-4 bg-white rounded-lg shadow">
            <h3 class="text-lg font-bold">Community-Driven</h3>
            <p class="text-gray-700">Join thousands of life-saving donors.</p>
          </div>
        </div>
      </section>

      <section class="container mx-auto px-6 py-12 bg-red-50 rounded-lg shadow-lg text-center max-w-7xl">
        <h2 class="text-3xl font-semibold text-black">Join Us & Be a Hero</h2>
        <p class="mt-4 text-lg text-gray-700">
          Every drop of blood can be a lifeline for someone. Register today and
          make a difference!
        </p>
        <a
          href="#"
          class="mt-6 inline-block bg-[#6A0B37] text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-red-700"
        >
          Become a Donor
        </a>
      </section>

      {/* aituku */}

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

              {showModal && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
                  <div className="bg-white p-8 rounded shadow-lg text-center">
                    <h2 className="text-2xl font-bold mb-4">Success!</h2>
                    <p className="text-gray-700 mb-6">
                      Your form has been submitted successfully.
                    </p>
                    <button
                      className="bg-[#6A0B37] text-white py-2 px-4 rounded"
                      onClick={() => {
                        setShowModal(false);
                        //function

                        setFormData({
                          name: "",
                          profession: "",
                          opinion: "",
                        });
                      }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
