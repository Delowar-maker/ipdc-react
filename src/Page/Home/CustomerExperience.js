import React from "react";
import iconCercle from "../../assets/CircleLayer.png";
import Scenery from "../../assets/Scenery.png";
import Ungroup from "../../assets/Ungroup.png";
import Arrows from "../../assets/Arrows.png";
import Vector from "../../assets/Vector.png";
import Bag from "../../assets/Bag.png";
import Cube from "../../assets/Cube.png";

const CustomerExperience = () => {
  return (
    <div className="" style={{ marginTop: "45%" }}>
      {/* heading */}
      <div className="text-center">
        <p className="text-6xl font-bold text-secondary">
          Creating Extraordinary Customer Experience
        </p>
        <p className="text-sm text-slate-300 text-center mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          <br />
          bibendum eget morbi dignissim eu pharetra consequat montes, sagittis.
        </p>
      </div>

      <div className="grid gird-cols-1 md:grid-cols-4 gap-10 justify-start mt-10">
        <div className="p-4">
          <img src={iconCercle} alt="" className="w-12 h-12" />
          <p className="text-lg text-secondary font-bold my-3">Integrity</p>
          <p className="text-sm text-slate-300">
            Displaying the highest level of Integrity in the way we conduct our
            business
          </p>
        </div>
        <div className="p-4">
          <img src={Scenery} alt="" className="w-12 h-12" />
          <p className="text-lg text-secondary font-bold">Demonstrate</p>
          <p className="text-sm text-slate-300">
            Demonstrating a strong will to win in the market place
          </p>
        </div>
        <div className="p-4">
          <img src={Ungroup} alt="" className="w-12 h-12" />
          <p className="text-lg text-secondary font-bold">Diversity</p>
          <p className="text-sm text-slate-300">
            Promoting Diversity in the work place and community
          </p>
        </div>
        <div className="p-4">
          <img src={Arrows} alt="" className="w-12 h-12" />
          <p className="text-lg text-secondary font-bold">Teamwork</p>
          <p className="text-sm text-slate-300">
            Lorem ipsum dolor sit amet, consecterur adipiscing elit. A semper
            aenean id pen
          </p>
        </div>
        <div className="p-4">
          <img src={iconCercle} alt="" className="w-12 h-12" />
          <p className="text-lg text-secondary font-bold">Collaboration</p>
          <p className="text-sm text-slate-300">
            Displaying the highest level of Integrity in the way we conduct our
            business
          </p>
        </div>
        <div className="p-4">
          <img src={Vector} alt="" className="w-12 h-12" />
          <p className="text-lg text-secondary font-bold">Technology</p>
          <p className="text-sm text-slate-300">
            Harnessing the power of Techonlogy to deliver better customer
            experience
          </p>
        </div>
        <div className="p-4">
          <img src={Bag} alt="" className="w-12 h-12" />
          <p className="text-lg text-secondary font-bold">Corporate</p>
          <p className="text-sm text-slate-300">
            Setting the standard for the best Corporate Citizenship in the
            communities we work
          </p>
        </div>
        <div className="p-4">
          <img src={Cube} alt="" className="w-12 h-12" />
          <p className="text-lg text-secondary font-bold">Digital</p>
          <p className="text-sm text-slate-300">
            Setting the standard for the best Corporate Citizenship in the
            communities we work
          </p>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default CustomerExperience;
