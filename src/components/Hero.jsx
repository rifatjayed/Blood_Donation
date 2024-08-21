import Search from "./Search";

import BackgroundImg from "../assets/img/bggg.png";

const Hero = () => {
  return (
    <div>
      <section className=" md:h-screen  ">
        {/* grid grid-cols-3 */}
        <div className=" flex ">
          <div className="hidden md:block">
            <img className="w-4/5" src={BackgroundImg} alt="" />
          </div>
          <div className="p-8 text-left md:text-right w-full md:w-[45%]  mr-4">
            <h3 className="text-[#3C3C3C] font-roboto font-bold text-5xl mb-5">
              Save Life Donate <br /> Blood
            </h3>
            <p className="text-xl mb-16 ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <a
              href="#learn-more"
              className="bg-black font-roboto  text-white font-bold text-3xl py-1 px-4 md:py-4 md:px-9 rounded-lg"
            >
              Get Blood Now
            </a>
          </div>
        </div>
      </section>

      <section className="mx-5 md:mx-[50px]  my-24 ">
        <div className="mx-2 md:mx-[50px] md:pb-20 md:pt-10">
          <h2 className="font-roboto font-bold	text-4xl	my-[30px] ">
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
          <Search></Search>
        </div>
      </section>

      <section className="md:mx-[50px] md:my-[100px]">
        <div className="md:mx-[50px] md:flex md:justify-center md:items-center overflow-hidden ">
          <div className="w-full md:w-2/5 ">
            <h2 className="font-roboto font-bold	text-4xl	my-[30px]  flex justify-center items-center md:justify-start">
              Testimonials
            </h2>
          </div>
          <div className="flex flex-col md:flex-row gap-8 md:w-3/5 justify-center items-center">
            <div className="w-80 h-60 p-10 bg-white rounded-lg shadow-md ">
              <h2>Name</h2>
              <h5>Designation</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ratione minus hic minima itaque unde cupiditate?
              </p>
            </div>

            <div className="w-80 h-60 p-10 bg-white rounded-lg shadow-md ">
              <h2>Name</h2>
              <h5>Designation</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ratione minus hic minima itaque unde cupiditate?
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="md:ms-[50px] md:my-16">
        <div className="mx-[50px]">
          <h2 className="font-roboto font-bold	text-4xl	my-[30px] sm:flex sm:justify-center sm:items-center md:justify-start">
            Blog
          </h2>

          <div className="grid md:grid-cols-3 md:gap-4 ">
            <div className="md:w-80 h-96 mb-4 bg-white rounded-lg shadow-md p-4">
              This is blog 1
            </div>
            <div className="md:w-80 h-96 mb-4 bg-white rounded-lg shadow-md p-4">
              This is blog 2
            </div>
            <div className="md:w-80 h-96 mb-4 bg-white rounded-lg shadow-md p-4">
              This is blog 3
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
