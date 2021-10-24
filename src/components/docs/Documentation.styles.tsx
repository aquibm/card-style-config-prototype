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
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-bottom: 30px;
    margin-bottom: 30px;

    &:last-child {
        border-bottom: none;
        margin-bottom: 0px;
    }
`;

export const ExampleName = styled.h3`
    flex: 0 0 80px;
    font-weight: 400;
`;

export const ExampleDescription = styled.p`
    flex: 0 0 400px;
    margin-left: 40px;
`;

export const ExamplePreview = styled.div`
    flex: 1 0;
    margin-left: 40px;
`;
