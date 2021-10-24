import { FC } from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
    font-size: 38px;
    font-weight: 700;
    text-transform: uppercase;
    font-family: 'Cousine', monospace;
`;

const Header: FC = () => <Heading>Card Config</Heading>;

export default Header;
