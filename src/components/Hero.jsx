import Search from "./Search";

const Hero = () => {
  return (
    <div>
      <section className="h-screen  flex items-center justify-center ">
        <div className="p-8 text-right ">
          <h3 className="text-[#3C3C3C] font-roboto font-bold text-5xl mb-5">
            Save Life Donate <br /> Blood
          </h3>
          <p className="text-xl mb-16 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <a
            href="#learn-more"
            className="bg-black font-roboto  text-white font-bold text-3xl py-4 px-9 rounded-lg"
          >
            Get Blood Now
          </a>
        </div>
      </section>

      <section className="mx-[50px]">
        <div className="mx-[50px]">
          <h2 className="font-roboto font-bold	text-4xl	my-[30px]">
            Our Mission
          </h2>
          <p className="text-[#3C3C3C] font-roboto font-light">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
            veniam, nemo beatae nobis aspernatur architecto iure provident sunt
            voluptatum ipsa dolore totam possimus laudantium dolorum facere
            voluptates consequatur non, temporibus laborum blanditiis error
            inventore at doloribus laboriosam! Ad nulla porro incidunt placeat
            quod quasi, ex accusamus modi aliquam voluptatem quis. Maxime eos,
            qui tempora perspiciatis repellendus mollitia ratione doloribus
            reiciendis at voluptatum totam ex fuga, id minima ad voluptate odio!
          </p>
        </div>
      </section>
      <Search></Search>
    </div>
  );
};

export default Hero;
