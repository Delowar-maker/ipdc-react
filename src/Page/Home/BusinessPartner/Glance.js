import React from "react";
import Picture from "../../../assets/Picture.png";

const Glance = () => {
  return (
    <div class="hero min-h-screen ">
      <div class="hero-content flex">
        <img src={Picture} className="max-w-sm  shadow-2xl" />
        <div className="ml-10">
          <h1 class="text-xl font-bold">IPDC AT A GLANCE</h1>
          <p class="py-6 text-sm">
            IPDC Finance Limited (previously known as "Industrial Promotion and
            Development Company of Bangladesh Limited") is the first private
            sector financial institution of the country established in 1981 by a
            distinguished group of shareholders namely International Finance
            Corporation (IFC), USA, German Investment and Development Company
            (DEG), Germany, The Aga Khan Fund for Economic Development (AKFED),
            Switzerland, Commonwealth Development Corporation (CDC), UK and the
            Government of Bangladesh
          </p>
          <p className="text-primary">Read More</p>
        </div>
      </div>
    </div>
  );
};

export default Glance;
