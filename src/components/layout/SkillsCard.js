import React from 'react'
// import {ImHtmlFive} from "react-icons/im"
// import {SiCss3, SiTailwindcss} from "react-icons/si"
import html5 from "../../assets/html5.png"
import css3 from "../../assets/css.png"
import js from "../../assets/js.svg"
import reactIcon from "../../assets/react.svg"
import styled from "../../assets/styled.png"
import git from "../../assets/Gitsvg.png"
import { InnerCard, SkillCardWapper } from './LayoutStyles'

const SkillsCard = () => {
  return (
    <SkillCardWapper>
        <InnerCard>
            {/* <ImHtmlFive /> */} 
            <img src={html5} alt="html" />
            <h4>Html5</h4>
        </InnerCard>
        <InnerCard>
            {/* <SiCss3 /> */}
            <img src={css3} alt="css" />
            <h4>Css3</h4>
        </InnerCard>
        {/* <div> */}
            {/* <SiTailwindcss /> */}
            {/* <img src={tailwind} alt="tailwind" />
            <h4>Tailwind</h4>
        </div> */}
         <InnerCard>
            {/* <ImHtmlFive /> */}
            <img src={js} alt="js" />
            <h4>Javascript</h4>
        </InnerCard>
        <InnerCard>
            {/* <ImHtmlFive /> */}
            <img src={reactIcon} alt="reactIcon" />
            <h4>React</h4>
        </InnerCard>
        <InnerCard>
            {/* <ImHtmlFive /> */}
            <img src={styled} alt="styled" />
            <h4>Styled</h4>
        </InnerCard>
        <InnerCard>
            {/* <ImHtmlFive /> */}
            <img src={git} alt="git" />
            <h4>Git and Github</h4>
        </InnerCard>
    </SkillCardWapper>
  )
}

export default SkillsCard