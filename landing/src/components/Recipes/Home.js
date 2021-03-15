import React from "react";
import { HomeContainer, HomeControls, VideoScroll } from "./HomeElements";
import video from "../../videos/video.mp4";
import { setActiveLink } from "react-scroll/modules/mixins/scroller";

const Home = () => {
  // var frameNumber = 0, // start video at frame 0
  //   // lower numbers = faster playback
  //   playbackConst = 500,
  //   // get page height from video duration
  //   setHeight = document.getElementById("set-height"),
  //   // select video element
  //   vid = document.getElementById("v0");
  // // var vid = $('#v0')[0]; // jquery option

  // // dynamically set the page height according to video length
  // vid.addEventListener("loadedmetadata", function () {
  //   setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
  // });

  // // Use requestAnimationFrame for smooth playback
  // function scrollPlay() {
  //   var frameNumber = window.pageYOffset / playbackConst;
  //   vid.currentTime = frameNumber;
  //   window.requestAnimationFrame(scrollPlay);
  // }

  // window.requestAnimationFrame(scrollPlay);

  return (
    <>
      <HomeContainer>
        <h1>hi</h1>
        <HomeControls>At Home</HomeControls>
      </HomeContainer>
    </>
  );
};

export default Home;
