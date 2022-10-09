import React from "react";
import {
  HeroCont,
  HeroContent,
  HeroLeft,
  HeroRight,
  Navigate,
  InnerContent,
} from "./LayoutStyles";
import logo from "../../assets/logo.svg";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <HeroCont>
      <HeroLeft>
      <Link to="/"><img src={logo} alt="logo" /></Link>
        <HeroContent>
          <h6>Hi There!</h6>
          <h1>
            I'm <span><u>B</u>right MC. <u>N</u>wachukwu</span>
          </h1>
          <p>
            <Typewriter
              options={{
                strings: ["a Software Engineer: Heavy- Front End", "a Web Tech Tutor", "and a Fictional Story Writer."],
                autoStart: true,
                loop: true,
              }}
            />
          </p>

          <InnerContent>
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the
            </p>
          </InnerContent>

          <button> Hire Me</button>
        </HeroContent>
      </HeroLeft>

      <HeroRight>
        <Navigate>
          <Link to="/">Home</Link>
          <a>About Me</a>
          <a>Services</a>
          <a>Resume</a>
          <a>Contact</a>
        </Navigate>
        <div className="circle"></div>
      </HeroRight>
    </HeroCont>
  );
};

export default Hero;
