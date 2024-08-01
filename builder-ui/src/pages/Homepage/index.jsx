import React from "react";
import Banner from "../../components/HomePage/Banner";
import PlatformFeaturesSection from "../../components/HomePage/Feature";
import ExploreTemplatesSection from "../../components/HomePage/Explore";
import Separator from "../../components/Separator";

function Homepage() {
  return (
    <>
      <Banner />
      <PlatformFeaturesSection />
      <Separator />
      <ExploreTemplatesSection />
    </>
  );
}

export default Homepage;
