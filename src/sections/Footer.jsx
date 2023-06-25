import { motion } from "framer-motion";
import React from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import styled from "styled-components";

// import Logo from "../assets/Svgs/11.svg";

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  /* margin: 5rem auto; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;


  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  position: relative;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 10vw;
    height: auto;
  }

  h3 {
    font-family: "Sirin Stencil";
    font-size: ${(props) => props.theme.fontxxl};

    @media (max-width: 48em) {
      font-size: ${(props) => props.theme.fontxl};
    }
  }
`;

const FooterComponent = styled(motion.footer)`
  width: 80vw;

  @media (max-width: 48em) {
    width: 90vw;
  }
  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem;
    margin-top: 4rem;
    padding: 0 1rem;
    border-top: 1px solid ${(props) => props.theme.text};
    border-bottom: 1px solid ${(props) => props.theme.text};

    @media (max-width: 48em) {
      justify-content: center;
    }
  }

  li {
    padding: 2rem;
    font-size: ${(props) => props.theme.fontlg};
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      transform: scale(1.1);
    }

    @media (max-width: 48em) {
      padding: 1rem;
      font-size: ${(props) => props.theme.fontmd};
    }
  }
`;

const Bottom = styled.div`
  padding: 0.5rem 0;
  margin: 0 4rem;
  font-size: ${(props) => props.theme.fontlg};

  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: underline;
  }

  @media (max-width: 64em) {
    flex-direction: column;
    justify-content: center;
    span {
      transform: none !important;
    }
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;

const Footer = () => {
  const { scroll } = useLocomotiveScroll();

  const handleScroll = (id) => {
    let elem = document.querySelector(id);
    // console.log(elem);
    scroll.scrollTo(elem, {
      offset: "-100",
      duration: "2000",
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };

  return (
    <Section>
      <LogoContainer>
        {/* <img
          width="300"
          height="300"
          src={Logo}
          alt="$VeN"
          data-scroll
          data-scroll-speed="2"
        /> */}
        <h3 data-scroll data-scroll-speed="-1">
          Venera Erotica Magazine
        </h3>
      </LogoContainer>
      <FooterComponent
        initial={{ y: "-400px" }}
        whileInView={{ y: 0 }}
        viewport={{ once: false }}
        transition={{
          duration: 1.5,
        }}
      >
        <ul>
          <li aria-hidden="true" onClick={() => handleScroll("#home")}>
            home
          </li>
          <li aria-hidden="true" onClick={() => handleScroll(".about")}>
            about
          </li>
          <li aria-hidden="true" onClick={() => handleScroll("#shop")}>
            shop
          </li>
          <li aria-hidden="true" onClick={() => handleScroll(".new-arrival")}>
            Artist Spotlight
          </li>
          {/* <li>
            <a href="https://google.com" target={"_blank"} rel="noreferrer">
              look book
            </a>
          </li>
          <li>
            <a href="https://google.com" target={"_blank"} rel="noreferrer">
              reviews
            </a>
          </li> */}
          </ul>
                  We are dedicated to bringing our readers stories, art, film, and other mediums from a variety of dark arts and erotic genres. Our content is designed to entertain and educate, while also helping to redefine the boundaries of sexual expression. At Venera Erotica Magazine, we strive to provide a safe space for all of our readers to explore their sexuality and artistry.
        <br />
        <br />
        Our editorial team is committed to providing quality content that is engaging, thought-provoking, and entertaining. We invite you to join us in our exploration and celebration of the dark arts and eroticism. Thank you for your interest in Venera Erotica Magazine.
          <br />
          <br />
        {/* </ul> */}
        <Bottom>

          <span
            data-scroll
            data-scroll-speed="2"
            data-scroll-direction="horizontal"
          >
            &copy; 2023. All Rights Reserved.
          </span>
          <span
            data-scroll
            data-scroll-speed="-2"
            data-scroll-direction="horizontal"
          >
            Optimized with &hearts; by{" "}
            <a
              href="https://twitter.com/VeneraSolutions"
              target={"_blank"}
              rel="dofollow noreferrer"
            >
              Venera Solutions
            </a>
          </span>
        </Bottom>
      </FooterComponent>
    </Section>
  );
};

export default Footer;
