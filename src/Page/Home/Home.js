import React from "react";
import Banner from "./Banner";
import BusinessPartner from "./BusinessPartner/BusinessPartner";
import CustomerExperience from "./CustomerExperience";
import OurServices from "./OurServices";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CustomerExperience></CustomerExperience>
      <BusinessPartner></BusinessPartner>
      <OurServices></OurServices>
    </div>
  );
};

export default Home;
