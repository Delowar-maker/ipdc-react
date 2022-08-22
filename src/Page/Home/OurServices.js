import React from "react";
import { FaArrowRight } from "react-icons/fa";
import service1 from "../../assets/service1.png";

const OurServices = () => {
  return (
    <div>
      {/* header start */}
      {/* code.............. */}
      {/* header end */}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div>
          <div>
            <img src={service1} alt="" className="rounded-sm" />
          </div>
          <div className="flex items-center">
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
            <span className="mr-3 text-xl text-secondary font-bold">
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
