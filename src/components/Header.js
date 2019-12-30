import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components
import logo from '../aloompalogo.png';

function Header() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("../assets/img/Kendrick-Lamar.png") + ")"
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
            <div className="text-center" >
            <img src={logo} className="logo App-logo" alt="logo" />
            </div>
              <h1 className="presentation-title">Hip Hop Fest 2020</h1>
              {/* <div className="fog-low">
                <img alt="..." src={require("../assets/img/fog-low.png")} />
              </div>
              <div className="fog-low right">
                <img alt="..." src={require("../assets/img/fog-low.png")} />
              </div> */}
            </div>
            <h1 className="text-center text-white"> NEW YEARS DAY</h1>
            <h1 className="presentation-subtitle text-center">
              Brought to you by Aloompa
            </h1>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("../assets/img/clouds.png") + ")"
          }}
        />
        <h6 className="category category-absolute">
          Created by Zach Matthews

        </h6>
      </div>
    </>
  );
}

export default Header;
