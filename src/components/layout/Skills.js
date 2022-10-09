import React from "react";
import {
  Button,
  ImgCont,
  LeftWrapper,
  RightSKillCard,
  SKillContainer,
  SkillWrapper,
} from "./LayoutStyles";
import myself from "../../assets/myself.jpg"
import SkillsCard from "./SkillsCard";
import {BiDownload} from "react-icons/bi"

const Skills = () => {
  return (
    <SKillContainer>
      <SkillWrapper>
        <LeftWrapper>
          <h2>
            Why You Should Hire Me <u>For</u> Your Next Project.
          </h2>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content.
          </p>

          <Button>
            <BiDownload style={{fontSize: 20, marginTop: 11, marginRight: 5}}/> 
            Download CV
          </Button>
        </LeftWrapper>

        <ImgCont>
          <img src={myself} alt="self" />
        </ImgCont>

        <RightSKillCard>
          <h2>Skills</h2>
          <p>lorem ipsum loret d lor text commonlyused to demostrate.</p>

          <SkillsCard />
        </RightSKillCard>
      </SkillWrapper>
    </SKillContainer>
  );
};

export default Skills;
