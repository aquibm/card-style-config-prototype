import { FC } from "react";
import styled from "styled-components";

const Heading = styled.h1`
  font-size: 32px;
  font-weight: 400;
`;

const Header: FC = () => <Heading>Config based card layout</Heading>;

export default Header;
