import styled from 'styled-components';

export const Container = styled.div`
    @media screen and (min-width: 768px) {
        display: flex;
    }
`;

export const EditorContainer = styled.div`
    flex: 0 0 50%;
    padding: 15px;
`;

export const CardContainer = styled.div`
    flex: 0 0 50%;
    padding: 15px;
`;

export const Heading = styled.h4`
    color: #333;
    text-transform: uppercase;
    font-weight: 400;
`;

export const ErrorContainer = styled.div`
    background-color: #fff5f5;
    border: 1px solid #fc8181;
    color: #c53030;

    padding: 20px;
    border-radius: 8px;
`;

export const ErrorHeading = styled.h5`
    font-size: 18px;
    margin: 0;
`;

export const ErrorMessage = styled.p`
    margin: 18px 0 0;
`;
