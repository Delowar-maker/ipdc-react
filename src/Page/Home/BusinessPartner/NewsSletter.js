import React from "react";

const NewsSletter = () => {
  return (
    <div style={{ marginTop: "10%" }}>
      <div className="text-center">
        <p className="text-3xl font-bold text-secondary">NewSletter</p>
        <p className="text-sm text-slate-300 text-center mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          <br />
          bibendum eget morbi dignissim eu pharetra consequat montes, sagittis.
        </p>
        <input
          type="text"
          placeholder="Type here"
          class="input input-bordered input-dark w-full max-w-xs mt-5 mr-10"
        />
        <button class="btn btn-outline btn-primary">Button</button>
      </div>
    </div>
  );
};

export default NewsSletter;
