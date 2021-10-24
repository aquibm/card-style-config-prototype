import styled from 'styled-components';

export const Background = styled.footer`
    padding: 12px 0;
    background: palevioletred;
    color: white;

    & *::selection {
        background: white;
        color: palevioletred;
    }
`;

export const Text = styled.h3`
    margin: 0;
    text-align: center;

    a {
        text-decoration: underline;
    }
`;
