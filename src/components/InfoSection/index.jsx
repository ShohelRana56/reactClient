import {
  InfoContainer,
  InfoRow,
  InfoWrapper,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  Column2,
  Column1,
  ImgWrap,
  Img,
  BtnWrap,
} from "./InfoElements";
import { Button } from "../ButtonElement";

function InfoSection({
  lightBg,
  imgStart,
  id,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLable,
  alt,
  img,
  primary,
  dark,
  dark2,
}) {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText ? 1 : 0}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                    to="home"
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLable}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
}

export default InfoSection;
