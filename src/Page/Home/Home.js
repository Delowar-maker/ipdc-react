import React from "react";
import Banner from "./Banner";
import BusinessPartner from "./BusinessPartner/BusinessPartner";
import NewsSletter from "./BusinessPartner/NewsSletter";
import OurYear from "./BusinessPartner/OurYear";
import CustomerExperience from "./CustomerExperience";
import OurServices from "./OurServices";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CustomerExperience></CustomerExperience>
      <BusinessPartner></BusinessPartner>
      <OurServices></OurServices>
      <OurYear></OurYear>
      <NewsSletter></NewsSletter>
    </div>
  );
};

export default Home;
