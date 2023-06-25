import React from "react";
import styled from "styled-components";

// import img1 from "../assets/Images/1.webp";
import img2 from "../assets/Images/2.webp";
// import img3 from "../assets/Images/3.webp";

const Section = styled.section`
  min-height: 100vh;
  width: 80vw;
  margin: 0 auto;

  position: relative;

  display: flex;
  @media (max-width: 48em) {
    width: 90vw;
  }

  @media (max-width: 30em) {
    width: 100vw;
  }
  /* justify-content: center;
  align-items: center; */
`;

const Left = styled.div`
  width: 50%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: relative;
  z-index: 5;
  margin-top: 20%;

  @media (max-width: 64em) {
    width: 80%;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    margin: 0 auto;

    padding: 2rem;
    font-weight: 600;

    backdrop-filter: blur(2px);
    background-color: ${(props) => `rgba(${props.theme.textRgba},0.4)`};
    border-radius: 20px;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
    padding: 2rem;
    width: 70%;
  }
`;

const Right = styled.div`
  width: 50%;
  position: relative;
  /* min-height: 100vh; */

  img {
    width: 100%;
    height: auto;
  }

  .small-img-1 {
    width: 40%;
    position: absolute;
    right: 95%;
    bottom: 10%;
  }
  .small-img-2 {
    width: 40%;
    position: absolute;
    left: 80%;
    top: 30%;
  }
  @media (max-width: 64em) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      height: 100vh;
      object-fit: cover;
    }

    .small-img-1 {
      width: 30%;
      height: auto;
      left: 5%;
      bottom: 10%;
    }
    .small-img-2 {
      width: 30%;
      height: auto;

      position: absolute;
      left: 60%;
      bottom: 20%;
    }
  }
`;

// const Title = styled.h1`
//   font-size: ${(props) => props.theme.fontBig};
//   font-family: "Sirin Stencil";
//   font-weight: 300;
//   /* text-transform: capitalize; */

//   position: absolute;
//   top: 1rem;
//   left: 5%;
//   z-index: 5;

//   span {
//     display: inline-block;
//   }

//   @media (max-width: 64em) {
//     font-size: ${(props) => `calc(${props.theme.fontBig} - 5vw)`};
//     top: 0;
//     left: 0%;
//   }
//   @media (max-width: 48em) {
//     font-size: ${(props) => props.theme.fontxxxl};
//   }
// `;

const About = () => {
  return (
    <Section id="fixed-target" className="about">
      {/* <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        About Us
      </Title> */}
      <br />
      <Left data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
      {/* Welcome to Venera Erotica Magazine! We are a web3 magazine that explores and celebrates the world of dark arts and eroticism. Our mission is to provide our readers with an unprecedented level of creativity, insight, and exploration into the depths of human experience.   */}
        {/* <br />
        <br /> */}
           <img
          width="400"
          height="600"
          className="small-img-1"
          src={img2}
          alt="About Us"
          data-scroll
          data-scroll-speed="5"
        />
      </Left>

      <Right>
        <img width="400" height="600" src={img2} alt="About Us" />
        <img
          width="400"
          height="600"
          className="small-img-1"
          src={img2}
          alt="About Us"
          data-scroll
          data-scroll-speed="5"
        />
        <img
          width="400"
          height="600"
          className="small-img-2"
          src={img2}
          alt="About Us"
          data-scroll
          data-scroll-speed="-2"
        />
      </Right>
    </Section>
  );
};

export default About;
