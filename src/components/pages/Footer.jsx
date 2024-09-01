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
          <div>
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

        <div className="text-white px-12 my-10 flex justify-between font-poppins">
          <div className="">
            <h2 className="text-xl	">Subscribe to our newsletter</h2>
          </div>
          <div className="">
            <ul className="text-base	">
              <li>Services</li>
              <li>Email Marketing</li>
              <li>Campaigns</li>
              <li>Branding</li>
              <li>Offline</li>
            </ul>
          </div>
          <div>
            <ul className="text-base	">
              <li>About</li>
              <li>Our Story</li>
              <li>Benefits</li>
              <li>Team</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <ul className="text-base	">
              <li>Help</li>
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
          <div className="flex ">
            <img className="	w-7	mr-5" src={facebook} alt="" />
            <img className="	w-7	" src={facebook} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
