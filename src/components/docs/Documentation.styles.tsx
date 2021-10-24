import styled from 'styled-components';

export const Background = styled.div`
    background: palevioletred;
    color: white;

    & *::selection {
        background-color: white;
        color: palevioletred;
    }
`;

export const Container = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 10px;

    @media screen and (min-width: 768px) {
        padding: 40px;
    }
`;

export const Section = styled.div`
    margin-bottom: 40px;
`;

export const Heading = styled.h2`
    text-transform: uppercase;
    font-family: 'Cousine', monospace;
`;
