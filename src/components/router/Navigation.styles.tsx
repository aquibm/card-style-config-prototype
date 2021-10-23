import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
`;

type LinkProps = {
  selected?: boolean;
};

export const Link = styled(RouterLink)<LinkProps>`
  padding: 12px 32px;
  margin-right: 15px;
  border-radius: 8px;

  color: ${(props) => (props.selected ? "white" : "#333")};
  background-color: ${(props) => (props.selected ? "palevioletred" : "white")};
  border: 1px solid transparent;
  box-shadow: 0px 3px 8px #e9e9e9;

  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;

  &:hover {
    border-color: #eee;
    box-shadow: 0px 5px 12px #e9e9e9;
  }

  &:last-child {
    margin-right: 0;
  }
`;
