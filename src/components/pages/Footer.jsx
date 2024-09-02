import React from "react";
import FooterIcon from "../../assets/img/Vector.png";
import facebook from "../../assets/img/facebook.png";

import instagram from "../../assets/img/instagram.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="bg-[#1E2833]">
      <div className="py-16	">
        <div className="flex justify-between px-12">
          <div className="hidden md:block">
            <img src={FooterIcon} alt="" />
          </div>
          <div className="flex items-center	">
            <p className="text-white"> Ready to get started?</p>
            <Link to="/Register">
              <button className="bg-white font-roboto ms-10	  text-black font-bold text-2xl  px-4  rounded-lg">
                <p className="p-2">Donate</p>
              </button>
            </Link>
          </div>
        </div>
        <hr className="mx-12 mt-10 " />

        <div className="text-white px-12 my-10 flex flex-col md:flex-row md:justify-between font-poppins">
          <div className="">
            <h2 className="text-xl	">Subscribe to our newsletter</h2>
          </div>
          <div className="py-9	md:py-0">
            <ul className="text-base	">
              <li className="font-bold	text-lg	mb-2">Services</li>
              <li>Email Marketing</li>
              <li>Campaigns</li>
              <li>Branding</li>
              <li>Offline</li>
            </ul>
          </div>
          <div>
            <ul className="text-base	py-9	md:py-0">
              <li className="font-bold	text-lg	mb-2">About</li>
              <li>Our Story</li>
              <li>Benefits</li>
              <li>Team</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <ul className="text-base	">
              <li className="font-bold	text-lg	mb-2">Help</li>
              <li>FAQs</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between px-12 text-white">
          <div className="flex">
            <p className="mr-10">Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
          <div className="flex">
            <img className="hidden md:block	w-7	mr-5" src={facebook} alt="" />
            <img className="hidden md:block	w-7	" src={instagram} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
