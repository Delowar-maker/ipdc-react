import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { FaCar } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import "./Banner.css";
import banner from "../../assets/banner.png";

// import required modules
import { Pagination } from "swiper";

const Banner = () => {
  return (
    <>
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="grid md:grid-cols-2 grid-cols-1 h-full items-center">
            <div className=" ">
              <div>
                <p
                  className=""
                  style={{
                    fontSize: "63px",
                    fontWeight: "900",
                    lineHeight: "67px",
                  }}
                >
                  Chase Your <br /> Dream with us
                </p>
                <p className="text-xl text-slate-500 my-5">
                  The harder you work for something, the greater <br /> you’ll
                  feel when you achieve it.
                </p>
              </div>
              <div>
                <div className="btn btn-primary mr-3 text-white uppercase">
                  apply online
                </div>
                <div className="btn btn-primary btn-outline text-white uppercase">
                  Loan Calculator
                </div>
              </div>
              {/* slider bottom  */}
              <div className="flex items-center bottom-info-action">
                <span className="flex items-center">
                  <FaPhoneAlt className="text-primary mr-3" />
                  16519
                </span>
                <FaFacebookF />
                <FaFacebookF />
                <FaFacebookF />
              </div>
            </div>
            <div className="bg-[#FFEAF5] h-full ">
              <img src={banner} className="mt-50" />
            </div>
            <button className="bg-white border-0 text-secondary btn rounded-lg text-xl shadow-md button-position">
              <FaCar className="text-primary mr-3" />
              Car Loans
            </button>
            <button className="bg-white border-0 text-secondary btn rounded-lg text-xl shadow-md button-position-second">
              <FaCar className="text-primary mr-3" />
              Car Loans
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid md:grid-cols-2 grid-cols-1 h-full items-center">
            <div className=" ">
              <div>
                <p
                  className=""
                  style={{
                    fontSize: "63px",
                    fontWeight: "900",
                    lineHeight: "67px",
                  }}
                >
                  Chase Your <br /> Dream with us
                </p>
                <p className="text-xl text-slate-500 my-5">
                  The harder you work for something, the greater <br /> you’ll
                  feel when you achieve it.
                </p>
              </div>
              <div>
                <div className="btn btn-primary mr-3 text-white uppercase">
                  apply online
                </div>
                <div className="btn btn-primary btn-outline text-white uppercase">
                  Loan Calculator
                </div>
              </div>
              {/* slider bottom  */}
              <div className="flex items-center bottom-info-action">
                <span className="flex items-center">
                  <FaPhoneAlt className="text-primary mr-3" />
                  16519
                </span>
                <FaFacebookF />
                <FaFacebookF />
                <FaFacebookF />
              </div>
            </div>
            <div className="bg-[#FFEAF5] h-full ">
              <img src={banner} className="mt-50" />
            </div>
            <button className="bg-white border-0 text-secondary btn rounded-lg text-xl shadow-md button-position">
              <FaCar className="text-primary mr-3" />
              Car Loans
            </button>
            <button className="bg-white border-0 text-secondary btn rounded-lg text-xl shadow-md button-position-second">
              <FaCar className="text-primary mr-3" />
              Car Loans
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid md:grid-cols-2 grid-cols-1 h-full items-center">
            <div className=" ">
              <div>
                <p
                  className=""
                  style={{
                    fontSize: "63px",
                    fontWeight: "900",
                    lineHeight: "67px",
                  }}
                >
                  Chase Your <br /> Dream with us
                </p>
                <p className="text-xl text-slate-500 my-5">
                  The harder you work for something, the greater <br /> you’ll
                  feel when you achieve it.
                </p>
              </div>
              <div>
                <div className="btn btn-primary mr-3 text-white uppercase">
                  apply online
                </div>
                <div className="btn btn-primary btn-outline text-white uppercase">
                  Loan Calculator
                </div>
              </div>
              {/* slider bottom  */}
              <div className="flex items-center bottom-info-action">
                <span className="flex items-center">
                  <FaPhoneAlt className="text-primary mr-3" />
                  16519
                </span>
                <FaFacebookF />
                <FaFacebookF />
                <FaFacebookF />
              </div>
            </div>
            <div className="bg-[#FFEAF5] h-full ">
              <img src={banner} className="mt-50" />
            </div>
            <button className="bg-white border-0 text-secondary btn rounded-lg text-xl shadow-md button-position">
              <FaCar className="text-primary mr-3" />
              Car Loans
            </button>
            <button className="bg-white border-0 text-secondary btn rounded-lg text-xl shadow-md button-position-second">
              <FaCar className="text-primary mr-3" />
              Car Loans
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
