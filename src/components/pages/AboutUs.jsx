const AboutUs = () => {
  return (
    <div>
      <div
        className="bg-gradient-to-l"
        style={{
          background:
            "linear-gradient(90deg, hsla(323, 87%, 15%, 1) 0%, hsla(345, 67%, 42%, 1) 100%)",
          background:
            "-moz-linear-gradient(90deg, hsla(323, 87%, 15%, 1) 0%, hsla(345, 67%, 42%, 1) 100%)",
          background:
            "-webkit-linear-gradient(90deg, hsla(323, 87%, 15%, 1) 0%, hsla(345, 67%, 42%, 1) 100%)",
          filter:
            'progid:DXImageTransform.Microsoft.gradient(startColorstr="#46052d", endColorstr="#b32346", GradientType=1)',
        }}
      >
        {/* <!-- Your content here --> */}
        <h2 className=" text-white	py-[60px] font-roboto	 text-4xl font-medium mb-6 text-center">
          About us
        </h2>
      </div>
    </div>
  );
};

export default AboutUs;
