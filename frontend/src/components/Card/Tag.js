import React from "react";
import { Flex } from "grid-styled";

const Container = Flex.extend`
  background-color: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.white};
  font-size: 0.8rem;
  padding: 0.15em 0.7em 0.15em 0.4em;
  position: relative;
  margin: 0 0.6em 0 0.9em;
  align-items: center;
  line-height: 1.5em;
  z-index: 0;
  -webkit-backface-visibility: hidden;

  &:before {
    content: "";
    position: absolute;
    width: 1em;
    left: -0.4em;
    height: 100%;
    display: flex;
    background-color: ${props => props.theme.colors.blue};
    z-index: -1;
    transform: skewX(-20deg);
  }

  &:after {
    content: "";
    position: absolute;
    width: 0.15em;
    height: 100%;
    display: flex;
    background-color: ${props => props.theme.colors.blue};
    z-index: -1;
    transform: skewX(-20deg);
    left: -0.7em;
  }
`;

export default ({ children }) => (
  <Container>
    {children}
  </Container>
);
