import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  HomeContainer,
  HomeControls,
  VideoScroll,
  HomeDisplay,
  HomeMedia,
  HomeFilter,
} from "./HomeElements";
import video from "../../videos/video.mp4";
import tools1 from "../../images/tools1.jpg";
import data3 from "../../data2/data3";

const Home = () => {
  const [sushi, setSushi] = useState("");

  // useEffect(() => {
  //   axios
  //     .get("https://us-central1-webesushi-a3bf0.cloudfunctions.net/api/sushis")
  //     .then((res) => {
  //       setSushi(res);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <HomeContainer>
      <h1>Home</h1>
      <h2>Follow the steps:</h2>
      <HomeDisplay>
        <HomeMedia>
          {data3.map((e, i) => (
            <>
              {/* {e.images.map((e) => (
                <img
                  style={{
                    width: "150px",
                    objectFit: "cover",
                  }}
                  src={e}
                ></img>
              ))} */}
              {e.steps.map((e) => (
                <p>{e}</p>
              ))}
            </>
          ))}

          <img></img>
          <p></p>

          <img></img>
          <p></p>
        </HomeMedia>
        {/* <img
          style={{ width: "150px", height: "150px" }}
          src={sushi.data[0].image}
        ></img> */}
        <p>here</p>
      </HomeDisplay>
      <HomeFilter>
        {" "}
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
      </HomeFilter>
    </HomeContainer>
  );
};

export default Home;