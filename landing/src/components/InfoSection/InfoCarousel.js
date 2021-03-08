import React, { useState, useRef, useEffect } from "react";
import { Button } from "../ButtonElement";

import { sushi } from "./Data";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

import {
  InfoCarouselContainer,
  InfoWrapperCarousel,
  InfoRowCarousel,
  ColumnCarousel1,
  TextWrapper,
  TopLine,
  ImgWrap,
  Img,
  CarouselHeading,
  CarouselSubtitle,
  BtnWrap,
  ColumnCarousel2,
  ImgWrapCarousel,
  ImgCarousel,
  InfoBtnLink,
  IconWrapperLeft,
  IconWrapperRight,
  ImageSliderCarousel,
  PreviewCarousel,
} from "./InfoElements";

const InfoCarousel = ({
  lightBg,
  id,
  page,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  images,
  alt,
  primary,
  dark,
  dark2,
}) => {
  const [cur, setCur] = useState(0);
  const [slidePlay, setSlidePlay] = useState(true);

  const autoPlayRef = useRef();
  const length = sushi.length;
  let interval;

  useEffect(() => {
    autoPlayRef.current = nextSlide;
    console.log("useEffect = run nextslide" + cur);
  });

  useEffect(() => {
    console.log("PLAYYYY");
    const play = () => {
      autoPlayRef.current();
    };
    if (slidePlay === true) {
      console.log(slidePlay);
      interval = setInterval(play, 3000);

      return () => clearInterval(interval);
    } else if (slidePlay === false) {
      clearInterval(interval);
      console.log(slidePlay);
    }

    console.log(interval);
  }, [slidePlay]);

  let counter = 0;
  const prevSlide = () => {
    if (cur === 0) {
      setCur(length - 1);
    } else setCur(cur - 1);
    console.log("prev slide" + cur);
  };

  const nextSlide = () => {
    if (cur === length - 1) {
      setCur(0);
    } else setCur(cur + 1);

    setSlidePlay(true);
    console.log("next slide" + cur, slidePlay);
  };

  const handlePause = () => {
    console.log("pause button");

    if (slidePlay === false) {
      setSlidePlay(true);
    } else setSlidePlay(false);
    console.log("set false", cur, slidePlay);
  };
  // Autoplay 4s with animation
  // Button to pause
  // Preview images bar, onClick, show data
  const handlePreview = (val) => {
    if (!val) {
      cur = 0;
    }
    console.log("clicked = " + val);
    setCur(val - 1);
  };

  // setInterval(nextSlide, 5000);
  // setTimeout(nextSlide, 3000);
  // console.log(cur);
  // console.log(sushi[cur].name);
  return (
    <>
      <InfoCarouselContainer
        onClick={() => handlePause()}
        lightBg={lightBg}
        id={id}
      >
        <IconWrapperLeft onClick={prevSlide}>
          <FaArrowAltCircleLeft style={{ marginTop: "50vh" }} />
        </IconWrapperLeft>
        <IconWrapperRight onClick={() => nextSlide()}>
          <FaArrowAltCircleRight style={{ marginTop: "50vh" }} />
        </IconWrapperRight>

        <InfoWrapperCarousel>
          <InfoRowCarousel imgStart={false}>
            <ColumnCarousel1>
              <TextWrapper>
                {/* <TopLine>{topLine}</TopLine> */}
                <CarouselHeading lightText={lightText}>
                  {sushi[cur].name}
                </CarouselHeading>
                <CarouselSubtitle darkText={darkText}>
                  {sushi[cur].desc}
                </CarouselSubtitle>
                {/* <BtnWrap>
                  <InfoBtnLink
                    to={page}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </InfoBtnLink>
                </BtnWrap> */}
              </TextWrapper>
            </ColumnCarousel1>

            <ColumnCarousel2>
              <ImgWrapCarousel>
                <ImgCarousel src={sushi[cur].images} />
                {/* {sushi.map((image, index) => (
                  <div>
                    <img
                      key={index}
                      style={{
                        width: "320px",
                        height: "150px",
                        objectFit: "cover",
                      }}
                      src={image.images}
                      alt="sushi"
                    ></img>
                  </div>
                ))} */}
              </ImgWrapCarousel>
            </ColumnCarousel2>
          </InfoRowCarousel>
          <ImageSliderCarousel>
            {sushi.map((e, i) => {
              return (
                <PreviewCarousel onClick={() => handlePreview(e.id)}>
                  <img
                    style={{
                      borderRadius: "5px",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src={e.images}
                  />
                </PreviewCarousel>
              );
            })}
            <PreviewCarousel></PreviewCarousel>
          </ImageSliderCarousel>
        </InfoWrapperCarousel>
      </InfoCarouselContainer>
    </>
  );
};

export default InfoCarousel;
