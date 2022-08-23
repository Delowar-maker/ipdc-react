import React from "react";
import { FaArrowRight } from "react-icons/fa";
import service1 from "../../assets/service1.png";
import Image from "../../assets/Image.png";
// import Image from "../../assets/Image.png"
// import Image from "../../assets/Image.png"
// import Image from "../../assets/Image.png"

const OurServices = () => {
  return (
    <div style={{ marginTop: "10%" }}>
      {/* header start */}
      <div className="text-center">
        <p className="text-6xl font-bold text-secondary">Our Services</p>
        <p className="text-lg text-slate-300 text-center mt-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          <br />
          bibendum eget morbi dignissim eu pharetra consequat montes, sagittis.
        </p>
      </div>
      {/* header end */}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-8">
        <div>
          <div>
            <img src={service1} alt="" className="rounded-sm" />
          </div>
          <div className="flex items-center mt-5">
            <span className="mr-3 text-xl text-secondary font-bold">
              IPDC SAVING SCHEMES
            </span>
            <span>
              <FaArrowRight />
            </span>
          </div>
        </div>
        <div>
          <div>
            <img src={Image} alt="" className="rounded-sm" />
          </div>
          <div className="flex items-center mt-5">
            <span className="mr-3 text-xl text-secondary font-bold">
              IPDC SAVING SCHEMES
            </span>
            <span>
              <FaArrowRight />
            </span>
          </div>
        </div>
        <div>
          <div>
            <img src={service1} alt="" className="rounded-sm" />
          </div>
          <div className="flex items-center">
            <span className="mr-3 text-xl text-secondary font-bold mt-5">
              IPDC SAVING SCHEMES
            </span>
            <span>
              <FaArrowRight />
            </span>
          </div>
        </div>
        <div>
          <div>
            <img src={service1} alt="" className="rounded-sm" />
          </div>
          <div className="flex items-center">
            <span className="mr-3 text-xl text-secondary font-bold mt-5">
              IPDC SAVING SCHEMES
            </span>
            <span>
              <FaArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
