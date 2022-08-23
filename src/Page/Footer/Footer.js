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
        <span class="text-xl font-bold text-secondary">About The Company</span>
        <p>
          Learn To Love Growth <br />
          And Change And You Will <br />
          Be A Success. Microsoft <br />
        </p>
        <div className="flex items-center text-lg text-blue-500 mr-3 mt-10 space-x-3">
          <FaFacebookF />
          <FaFacebookF />
          <FaFacebookF />
        </div>
      </div>
      <div>
        <span class="text-xl font-bold text-secondary">Products</span>
        <p>
          CSR Activities <br />
          Green Banking <br />
          News <br />
          Ongoing Campgain <br />
          Updates
        </p>
      </div>
      <div>
        <span class="text-xl font-bold text-secondary">Legal</span>
        <p>
          Career <br />
          Contact Us <br />
          Government Securities <br />
          Examples <br />
          NIS
        </p>
      </div>
      <div>
        <span class="text-xl font-bold text-secondary">Newsletter</span>
        <p>
          IPDC a Glance <br />
          Mission, VIson & Values <br />
          Corporate Governanace <br />
          shareholders <br />
          Investor Relatios
        </p>
      </div>
    </footer>
  );
};

export default Footer;
