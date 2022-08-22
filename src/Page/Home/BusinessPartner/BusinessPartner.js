import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import partnerImg from "../../../assets/Frame16.png";

const BusinessPartner = () => {
  return (
    <div className="bg-[#FCE0EF] mt-5">
      <p className="text-center text-3xl text-secondary">BUSINESS PARTNERS</p>
      <Carousel className="">
        <div className=" px-2 md:px-12">
          <img src={partnerImg} />
        </div>
        <div>
          <img src={partnerImg} />
        </div>
        <div>
          <img src={partnerImg} className="pb-16 " />
        </div>
      </Carousel>
    </div>
  );
};

export default BusinessPartner;
