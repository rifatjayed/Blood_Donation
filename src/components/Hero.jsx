import bgImg from "../assets/img/bg.jpg";
import Search from "./Search";

const Hero = () => {
  return (
    <div>
      <section
        className="h-screen flex items-center justify-center text-center text-white "
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="p-8">
          <h3 className="text-2xl font-bold mb-4">Donate Blood, Save Life!</h3>
          <p className="text-xl mb-8">
            We are glad to have you here. Explore our services and get to know
            us better.
          </p>
          <a
            href="#learn-more"
            className="bg-[#c6414c] hover:bg-[#B30412] text-white font-bold py-2 px-4 rounded"
          >
            Learn More
          </a>
        </div>
      </section>
      <Search></Search>
    </div>
  );
};

export default Hero;
