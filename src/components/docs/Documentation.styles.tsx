import styled from 'styled-components';

export const Background = styled.div`
    border-top: 12px dashed palevioletred;
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
    margin-bottom: 80px;

    &:last-child {
        margin-bottom: 20px;
    }
`;

export const Heading = styled.h2`
    text-transform: uppercase;
    font-family: 'Cousine', monospace;
`;

export const ExampleContainer = styled.div`
    padding-bottom: 15px;
    margin-bottom: 15px;

    &:last-child {
        border-bottom: none;
        margin-bottom: 0px;
    }

    @media screen and (min-width: 768px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export const ExampleName = styled.h3`
    font-weight: 400;

    @media screen and (min-width: 768px) {
        flex: 0 0 80px;
    }
`;

export const ExampleDescription = styled.p`
    @media screen and (min-width: 768px) {
        flex: 0 0 320px;
        margin-left: 40px;
    }
`;

export const ExamplePreview = styled.div`
    @media screen and (min-width: 768px) {
        flex: 1;
        margin-left: 40px;
    }
`;
