const Hero = () => {
  //     <style>
  //     /* Custom styles for the background image */
  //     .hero-bg {
  //         backgroundImage: url('https://example.com/your-image.jpg');
  //         background-size: cover;
  //         background-position: center;
  //     }
  // </style>
  return (
    <div>
      <section className=" h-screen flex items-center justify-center text-center text-white bg-black bg-opacity-50">
        <div className="p-8">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
          <p className="text-xl mb-8">
            We are glad to have you here. Explore our services and get to know
            us better.
          </p>
          <a
            href="#learn-more"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Learn More
          </a>
        </div>
      </section>
    </div>
  );
};

export default Hero;
