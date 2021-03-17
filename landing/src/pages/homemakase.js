import React, { useState } from "react";
import Shop from "../components/Recipes/Shop";
import Home from "../components/Recipes/Home";
import webewhite from "../images/webe.png";
import { FaChevronLeft, FaHome, FaStore, FaTape } from "react-icons/fa";
import {
  HomemakaseContainer,
  AppNav,
  AppNavLogo,
  AppLogo,
  AppMain,
  AppHeading,
  AppDesc,
  AppFooter,
  AppIconsWrapper,
  AppIcons,
  AppIconsTitle,
} from "../components/Recipes/HomemakaseElements";

import {
  Nav,
  NavbarContainer,
  NavLogo,
} from "../components/Navbar/NavbarElements";

const HomeMakase = () => {
  const [active, setActive] = useState("about");

  const handleClick = (page) => {
    setActive(page);
    console.log(page);
  };

  return (
    <>
      <HomemakaseContainer>
        <AppNav>
          <AppNavLogo to="/">
            <FaChevronLeft />
            {/* <AppLogo /> */}
          </AppNavLogo>
          <AppHeading>HOME-MAKASE</AppHeading>
        </AppNav>

        <AppMain>
          {active == "about" ? (
            <>
              <h1>Homemakase</h1>
              <p>
                We will first take a look what kind of ingredients and tools are
                needed before we start our prepping process.
              </p>

              <h2>Omakase</h2>
              <p>We eat good usually here in omakase</p>

              <h2>To Get Started</h2>
              <p>
                Let's get all the ingredients and tools needed to start making
                sushi at home. Go to "At Market" tab to see more.
              </p>
              <h2>Let's get rollin!~</h2>
              <p>
                Go to "Get Rollin" tab to access in depth step-by-step
                instruction for prepping your ingredients. I also included
                recipes for the sushi I have made in the past. Don't forget to
                try out the sauces recipes as well!{" "}
              </p>
            </>
          ) : active == "home" ? (
            <Home />
          ) : active == "market" ? (
            <Shop />
          ) : null}
        </AppMain>

        <AppFooter>
          <AppIconsWrapper onClick={() => handleClick("about")}>
            <AppIcons>
              <FaHome />
            </AppIcons>
            <AppIconsTitle>HomeMakase</AppIconsTitle>
          </AppIconsWrapper>

          <AppIconsWrapper onClick={() => handleClick("market")}>
            <AppIcons>
              <FaStore />
            </AppIcons>
            <AppIconsTitle>At Market</AppIconsTitle>
          </AppIconsWrapper>

          <AppIconsWrapper onClick={() => handleClick("home")}>
            <AppIcons>
              <FaTape />
            </AppIcons>
            <AppIconsTitle>Get Rollin</AppIconsTitle>
          </AppIconsWrapper>
        </AppFooter>
      </HomemakaseContainer>
    </>
  );
};

export default HomeMakase;
