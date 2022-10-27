import React from "react";
import Image from "next/image";
// External libraries
import { Box } from "@mui/material";
// Assets
import AngularIcon from "@/public/assets/images/angular-icon.png";
import ReactIcon from "@/public/assets/images/react-icon.png";
import JavascriptIcon from "@/public/assets/images/javascript-icon.png";
import HtmlIcon from "@/public/assets/images/html-icon.png";
import CssIcon from "@/public/assets/images/css-icon.png";
import styled, { css, keyframes } from "styled-components";
import { colors } from "@/styles/themes";

export const TechIcons = () => {
  return (
    <Box
      sx={{
        width: "300px",
        height: "300px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <IconsContainer>
        <SAngular>
          <Image
            layout="fill"
            src={AngularIcon}
            alt="angular"
            objectFit="contain"
          />
        </SAngular>
        <SReact>
          <Image
            layout="fill"
            src={ReactIcon}
            alt="react"
            objectFit="contain"
          />
        </SReact>
        <SHtml>
          <Image layout="fill" src={HtmlIcon} alt="html" objectFit="contain" />
        </SHtml>
        <SCss>
          <Image layout="fill" src={CssIcon} alt="css" objectFit="contain" />
        </SCss>
        <SJavascript>
          <Image
            layout="fill"
            src={JavascriptIcon}
            alt="javascript"
            objectFit="contain"
          />
        </SJavascript>
      </IconsContainer>
    </Box>
  );
};

//******** Styles ********//

const animate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg)
  }
`;

const animateIcon = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg)
  }
`;

const IconsContainer = styled.div`
  position: relative;
  animation: ${animate} 5s linear infinite;
`;

const SIcon = css`
  width: 55px;
  height: 55px;
  position: absolute;
  animation: ${animateIcon} 5s linear infinite;
  border: 1px solid ${colors.primary};
  border-radius: 50%;
  box-shadow: 0px 0px 5px 1px ${colors.primary};
`;

const SAngular = styled.div`
  ${SIcon};
  top: -130px;
  left: -25px;
`;

const SJavascript = styled.div`
  ${SIcon};
  top: 80px;
  left: -25px;
`;

const SHtml = styled.div`
  ${SIcon};
  right: 80px;
  top: -25px;
`;

const SCss = styled.div`
  ${SIcon};
  left: 80px;
  top: -25px;
`;

const SReact = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  top: -25px;
  left: -25px;
`;
