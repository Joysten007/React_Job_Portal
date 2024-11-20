import React from "react";
import banner from "../Assets/banner.jpeg";

function Banner() {
  return (
    <>
      <div className="px-4 py-4">
        <h1>Find your dream job now</h1>
        <p> 5 Lakh+ jobs for you to explore</p>
        {/* <div className="search-contianer"></div> */}
        <div className="banner-container">
          <img src={banner} alt="" style={{ maxWidth: "100%" }} />
        </div>
      </div>
    </>
  );
}

export default Banner;
