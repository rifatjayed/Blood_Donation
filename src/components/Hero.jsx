import Search from "./Search";
import userImg from "../assets/img/user.png";
import { api } from "../config";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import BackgroundImg from "../assets/img/bggg.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Hero = () => {
  const [feedback, setFeedback] = useState([]);
  const navigate = useNavigate();
  const searchSubmit = (formData) => {
    navigate("/bloodList", { state: formData });
  };

  const getData = async () => {
    const url = `${api}/feedback`;
    try {
      const response = await axios.get(url);

      setFeedback(response.data.data);
      // console.log(response.data.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  // const hanldeData = async ()=>{

  //   const res = await fetch(url)
  //   const data = await res.json()
  //   consol.log(data)
  //   }
  //   handleData()

  useEffect(() => {
    getData();
    // console.log(feedback);
  }, []);

  return (
    <div>
      <section className=" flex flex-col-reverse md:flex-row items-center justify-center">
        {/* Left Side - Image */}
        <div className="hidden md:flex w-full md:w-[55%] ">
          <img className="w-full " src={BackgroundImg} alt="Blood Donation" />
        </div>

        {/* Right Side - Text Content */}
        <div className="p-6 text-center md:text-right w-full md:w-[45%]">
          <h3 className="text-[#3C3C3C] font-roboto font-bold text-4xl md:text-5xl mb-5">
            Save Life Donate <br /> Blood
          </h3>
          <p className="text-lg md:text-xl mb-10 md:mb-16">
            Donate blood, save lives! Our platform connects blood donors with
            those in urgent need, making the process seamless and efficient.
            Register as a donor, request blood when needed, and be a lifesaver
            in critical moments. Join us in making a difference—because every
            drop counts!
          </p>
          <a
            href="#learn-more"
            className="bg-black font-roboto text-white font-bold text-xl md:text-3xl py-2 px-6 md:py-4 md:px-9 rounded-lg inline-block"
          >
            Get Blood Now
          </a>
        </div>
      </section>

      <section className="mx-5 md:mx-[50px]  my-24 ">
        <div className="mx-2 md:mx-[50px] md:pb-20 md:pt-10">
          <h2 className="text-center md:text-left	 font-roboto font-bold	text-4xl	my-[30px] ">
            Our Mission
          </h2>
          <p className="text-[#3C3C3C] font-roboto font-light ">
            "Our mission is to create a seamless platform where those in need of
            blood can quickly and easily connect with life-saving donors. We are
            committed to making the process of finding and donating blood
            stress-free, ensuring that no one faces a life-threatening situation
            due to a lack of availability. By empowering users to register as
            donors and collect vital data, we strive to build a supportive
            network that fosters a spirit of solidarity and care. Our vision is
            to create a community where every individual has the opportunity to
            contribute to the cause of blood donation, making help accessible
            when it’s needed the most."
            <br />
            <br />
            Blood Donation is not for any single organization, but for the
            benefit of all individuals, organizations. Its aim is to facilitate
            blood donation by bringing blood donors and various organizations
            related to blood donation on one platform. If you are also a blood
            donor, register on the website.
          </p>
        </div>
      </section>

      <section className="md:mx-[50px]">
        <div className="mx-[50px]">
          <h2 className="font-roboto font-bold flex justify-center items-center md:justify-start text-4xl	my-[30px]">
            Find Blood
          </h2>
          <Search onHandleSubmit={searchSubmit} />
        </div>
      </section>

      <section className="md:mx-[50px] md:my-[100px] ">
        <div className="md:mx-[50px] md:flex md:justify-center md:items-center overflow-hidden">
          <div className="w-full md:w-2/5 ">
            <h2 className="font-roboto font-bold text-4xl my-[30px] flex justify-center items-center md:justify-start">
              Testimonials
            </h2>
          </div>

          <div className="md:flex md:flex-row gap-8 md:w-3/5 justify-center items-center  ">
            <Swiper
              spaceBetween={0}
              breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {/* Loop through the feedback data */}
              {feedback.map((item, index) => (
                <SwiperSlide key={index} className="box-border p-[15px]">
                  <div className=" bg-white shadow-lg rounded-lg p-6 flex flex-col  overflow-hidden h-[250px]">
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={userImg}
                        alt="User"
                        className="w-14 h-14 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-semibold text-lg">{item.name}</h3>
                        <p className="text-sm text-gray-500">
                          {item.profession}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed overflow-hidden text-ellipsis max-h-24">
                      {item.opinion}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* blog section */}

      {/* <section className="md:ms-[50px] my-16">
        <div className="mx-[50px]">
          <h2 className="font-roboto font-bold	text-4xl	my-[30px] text-center md:text-left ">
            Blog
          </h2>

          <div className=" ">
            <Swiper
              spaceBetween={50}
              // slidesPerView={2}
              breakpoints={{
                // When the window width is >= 640px (small devices)
                640: {
                  slidesPerView: 1,
                },
                // When the window width is >= 768px (medium devices)
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              // onSlideChange={() => console.log("slide change")}
              // onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide className="">
                <div className="md:w-80 h-96 mb-4 bg-white rounded-lg shadow-md p-4">
                  This is blog 1
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="md:w-80 h-96 mb-4 bg-white rounded-lg shadow-md p-4">
                  This is blog 2
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="md:w-80 h-96 mb-4 bg-white rounded-lg shadow-md p-4">
                  This is blog 3
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="md:w-80 h-96 mb-4 bg-white rounded-lg shadow-md p-4">
                  This is blog 4
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="md:w-80 h-96 mb-4 bg-white rounded-lg shadow-md p-4">
                  This is blog 5
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="md:w-80 h-96 mb-4 bg-white rounded-lg shadow-md p-4">
                  This is blog 6
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Hero;
