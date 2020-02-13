import React from 'react';
import './Banner.css';

function Banner() {
  var bannerRenderer = {
    backgroundColor: "rgb(33, 33, 33)",
    display: "flex",
    justifyContent: "flex-end",
    fontSize: "12px"
  }
  var banner = {
    margin: "auto",
    color: "#c1c1c1",
    position: "relative",
    display: "flex",
    alignItems: "center"
  }
  var currentCountryDisplay = {
    display: "flex",
    color: "#fff"
  }

  var flag = {
    paddingRight: "10px",
  }
  return (
    <div style={bannerRenderer}>
      <div style={banner}>
        <p>Free U.S. shipping on your first order.</p>
      </div>
      <div style={currentCountryDisplay}>
        <img style={flag} src="flag_US.svg" alt="US flag"/>
        <p style={flag}>USD</p>
      </div>
    </div>
  );
}

export default Banner;
