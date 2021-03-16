import React, { lazy, Suspense } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
} from "./HeroElements";
import { ButtonHero } from "../ButtonElement";
import Video from "../../videos/video.mp4";
// const Video = lazy(() => import("../../videos/video.mp4"));

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg type="video/mp4" autoPlay loop muted src={Video}></VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroH1> WE BE BETTER </HeroH1>
        <HeroH1></HeroH1>
        <HeroP></HeroP>
        <HeroBtnWrapper>
          <ButtonHero
            to="home-makase"
            smooth={true}
            duration={800}
            spy={true}
            exact="true"
            offset={0}
          >
            Get Started
          </ButtonHero>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
