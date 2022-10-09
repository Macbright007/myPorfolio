import styled from "styled-components";

// style for home
// export const Wrapper = styled.div`
//     width: 100;
//     max-width: 1500px;
//     margin: auto;
// `


// hero layout styling
export const HeroCont = styled.div`
  // border: 2px solid red;
  display: grid;
  grid-template-columns: 3fr 3fr;
  height: 100vh;
  max-height: 800px;
`;
export const HeroLeft = styled.div`
  // border: 2px solid blue;
  height: 100%;
  background: var(--clr-primary1);

  img {
    height: 35px;
    margin: 10px 30px;
  }
`;

export const HeroContent = styled.div`
  // border: 2px solid red;
  margin: 5rem auto;
  width: 100%;
  max-width: 450px;

  h6 {
    font-family: var(--font-family);
    font-style: var(--font-style);
    font-weight: var(--font-weight);
    font-size: 18px;
    line-height: 27px;
    color: rgba(0, 0, 0, 0.7);
  }

  h1 {
    font-family: var(--font-family);
    font-style: var(--font-style);
    font-weight: var(--font-weight);
    font-size: 30px;
    line-height: 48px;
    letter-spacing: 0.045em;
    color: #000;
    margin-top: 5px;
  }
  u{
    text-decoration-color: #DC9402;
    font-size: 3rem;
  }
  span {
    color: var(--clr-primary2);
    font-weight: var(--font-weight2);
  }

  p {
    font-family: var(--font-family);
    font-style: var(--font-style);
    font-weight: var(--font-weight);
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0.215em;
    color: #000;
    margin-top: 20px;
  }

  button{
    font-family: var(--font-family);
    font-style: var(--font-style);
    background: #481F04;
    border-radius: 5px;
    border: none;
    font-weight: 500;
    font-size: 18px;
    line-height: 33px;
    color: #fff;
    width: 30%;
    padding: 5px;
    margin-top: 4rem;
  }
`;

export const Button = styled.div`
  font-family: var(--font-family);
  font-style: var(--font-style);
  background: #481F04;
  border-radius: 5px;
  border: none;
  font-weight: 500;
  font-size: 18px;
  line-height: 33px;
  color: #fff;
  width: 50%;
  padding: 5px 0px;
  margin-top: 4rem;
`
export const InnerContent = styled.div`
  p {
    font-family: var(--font-family);
    font-style: var(--font-style);
    font-weight: var(--font-weight2);
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.03em;
    color: #000;
    max-width: 400px;
    margin-top: 50px;
  }
`;

export const Navigate = styled.div`
  margin-top: 20px;

  a {
    font-family: var(--font-family);
    font-style: var(--font-style);
    font-weight: var(--font-weight);
    font-size: 14px;
    line-height: 24px;
    margin-left: 40px;
    color: #fff;
    text-transform: uppercase;
    cursor: pointer;
  }
`;
export const HeroRight = styled.div`
  height: 100%;
  position: relative;
  background: var(--clr-primary2);

  .circle {
    border: none;
    background: #481f04;
    width: 400px;
    height: 400px;
    border-radius: 100%;
    position: absolute;
    left: -12%;
    top: 150px;
  }
`;

// skills styling
export const SKillContainer = styled.div`
  // width: 100%;
  height: 40vh;
  // border: 2px solid black;
`
export const SkillWrapper = styled.div`
  // border: 2px solid red;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  // padding: 7px;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 50px auto;
`

export const LeftWrapper = styled.div`
  // border: 2px solid blue;
  width: 80%;

  h2{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 150%;
    letter-spacing: 0.06em;
    color: #481F04;
  }
  u{
    text-decoration-color: rgba(127, 99, 111, 0.68);
  }

  p{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    margin-top: 5rem;
    line-height: 150%;
    letter-spacing: 0.06em;
    color: #000;
  }
`

export const ImgCont = styled.div`
    border: 5px solid #481f04;
    border-radius: 10px;
    border-left: 0px;
    border-right: 0px;
    height: 60vh;
    max-height: 414px;
    width: 87%;

    img{
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 10px;
    }
`

// skill card
export const SkillCardWapper = styled.div`
  // border: 2px solid red;
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
`
export const RightSKillCard = styled.div`
  h2{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 150%;
    letter-spacing: 0.06em;
    color: #481F04;
  }

  p{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    margin-top: 1rem;
    line-height: 150%;
    letter-spacing: 0.06em;
    color: #000;
      }
`
export const InnerCard = styled.div`
  text-align: center;
  border: 2px solid #481f04;
  // background: #481f04;
  // color: #fff;
  border-bottom: 0px;
  border-left: 0px;
  padding: 10px;
  border-radius: 10px;

  img{
    width: 40px;
    height: 40px;
  }
`