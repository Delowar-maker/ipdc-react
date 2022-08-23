import React from "react";

const OurYear = () => {
  return (
    <div style={{ marginTop: "10%" }}>
      {/* heading */}
      <div className="text-center">
        <p className="text-6xl font-bold text-secondary">
          Our best results for the Year
        </p>
        <p className="text-sm text-slate-300 text-center mt-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          <br />
          bibendum eget morbi dignissim eu pharetra consequat montes, sagittis.
        </p>
      </div>
      {/* start */}
      <div className="grid gird-cols-1 md:grid-cols-4 gap-10 justify-start mt-10">
        <div className="p-4">
          <p className="text-2xl font-bold text-secondary">57.6 bn</p>
          <p className="text-sm text-slate-300">LOAN PORTFOLIO</p>
        </div>
        <div className="p-4">
          <p className="text-2xl font-bold text-secondary">0.95%</p>
          <p className="text-sm text-slate-300">CLASSIFIED LOAN PORTFOLIO</p>
        </div>
        <div className="p-4">
          <p className="text-2xl font-bold text-secondary">388.5%</p>
          <p className="text-sm text-slate-300">CLASSIFIED LOAN Coverage</p>
        </div>
        <div className="p-4">
          <p className="text-2xl font-bold text-secondary">50.4 bn</p>
          <p className="text-sm text-slate-300">Deposit</p>
        </div>
        <div className="p-4">
          <p className="text-2xl font-bold text-secondary">6.1 bn</p>
          <p className="text-sm text-slate-300">Shareholders equity</p>
        </div>
        <div className="p-4">
          <p className="text-2xl font-bold text-secondary">18.51%</p>
          <p className="text-sm text-slate-300">Capital Adequacy Ratio</p>
        </div>
        <div className="p-4">
          <p className="text-2xl font-bold text-secondary">8.5 bn</p>
          <p className="text-sm text-slate-300">Market Capitalization</p>
        </div>
        <div className="p-4">
          <p className="text-2xl font-bold text-secondary">AAA</p>
          <p className="text-sm text-slate-300">Credit Rating</p>
        </div>
      </div>
    </div>
  );
};

export default OurYear;
