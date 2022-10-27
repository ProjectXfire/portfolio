import React, { FC } from "react";
// External libraries
import styled, { keyframes } from "styled-components";
import { Html } from "@mui/icons-material";

interface Props {
  title: string;
  delay?: number;
  size?: number;
}

export const TextNeon: FC<Props> = ({ title, delay, size = 1 }) => {
  //******** Renders ********//

  return (
    <STextNeon delay={delay} size={size}>
      {title}
    </STextNeon>
  );
};

//******** Styles ********//

const animate = keyframes`
  0%{
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
`;

interface SProps {
  delay?: number;
  size?: number;
}

const STextNeon = styled.span<SProps>`
  font-size: ${(props) => `${props.size}rem`};
  padding: 20px 40px;
  background-color: #18191f;
  color: white;
  border-radius: 30px;
  box-shadow: 2px 2px 2px #00000080, 10px 10px 12px #00000080,
    inset 2px 2px 10px #00000080, inset 2px 2px 10px #00000080;
  text-shadow: 0px 0px 50px #0072ff, 0px 0px 100px #0072ff,
    0px 0px 150px #0072ff, 0px 0px 200px #0072ff;
  animation: ${animate} 3s linear infinite;
  animation-delay: ${(props) => `${props.delay}s`};
`;
