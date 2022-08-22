import React from "react";
import { FaFacebookF } from "react-icons/fa";
// import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{ marginTop: "5%" }}
      class="footer p-10 bg-white-500 text-base-content"
    >
      <div>
        <span class="text-xl font-bold text-secondary">Services</span>
        <p>
          Learn To Love Growth And Change And You Will Be A Success. Microsoft
        </p>
        <div className="flex items-center text-blue-500 mr-3 mt-10 space-x-3">
          <FaFacebookF />
          <FaFacebookF />
          <FaFacebookF />
        </div>
      </div>
      <div>
        <span class="text-xl font-bold text-secondary">Company</span>
        <p>
          Learn To Love Growth And Change And You Will Be A Success. Microsoft
        </p>
      </div>
      <div>
        <span class="text-xl font-bold text-secondary">Legal</span>
        <p>
          Learn To Love Growth And Change And You Will Be A Success. Microsoft
        </p>
      </div>
      <div>
        <span class="text-xl font-bold text-secondary">Newsletter</span>
        <p>
          Learn To Love Growth And Change And You Will Be A Success. Microsoft
        </p>
      </div>
    </footer>
  );
};

export default Footer;
