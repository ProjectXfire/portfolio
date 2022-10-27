import styled, { keyframes, css } from "styled-components";
import { colors } from "@/styles/themes";

interface Props {
  title: string;
  size?: "small" | "normal" | "big";
}

const animate = keyframes`
  0% {
    opacity: 0;
  }
  50%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
`;

export const STitleEffect = styled.div<Props>`
  position: relative;
  color: white;
  font-size: ${(props) => {
    if (props.size === "small") return "4rem";
    if (props.size === "big") return "10rem";
    return "7rem";
  }};
  &::before {
    position: absolute;
    content: "${(props) => props.title}";
    background: linear-gradient(90deg, ${colors.primary}, ${colors.secondary});
    font-size: ${(props) => {
      if (props.size === "small") return "4rem";
      if (props.size === "big") return "10rem";
      return "7rem";
    }};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: ${animate} 2s infinite;
  }
`;
