import React from "react";
import { HomeContainer, HomeControls, VideoScroll } from "./HomeElements";
import video from "../../videos/video.mp4";

const Home = () => {
  return (
    <HomeContainer>
      <h1>home</h1>
      <li>
        <ul>Tools</ul>
        <li>Knife</li>
        <p>How To Sharpen Your Knives</p>
        <ul>Prep</ul>
        <li>Rice</li>
        <ul>Veg Prep</ul>
        <li>Cucumber</li>
        <li>Avocado</li>
        <li>Green Onions</li>
        <li>Jalapeno</li>

        <ul>Cooked Prep</ul>
        <li>Shrimp Tempura</li>
        <li>Cook Shrimp</li>
        <li></li>
        <ul>Raw Prep</ul>
        <li>Salmon</li>
        <li>Tuna</li>
        <ul>Rolling</ul>
        <ul>Plating</ul>
      </li>
    </HomeContainer>
  );
};

export default Home;
