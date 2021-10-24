import styled from 'styled-components';

export const StyleProvider = styled.div`
    /* Layout */
    & .flex {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    line-height: 1.4;

    /* Typography */
    & .h1 {
        font-size: 28px;
        font-weight: 700;
    }

    & .h2 {
        font-size: 24px;
        font-weight: 700;
    }

    & .h3 {
        font-size: 24px;
        font-weight: 400;
    }

    & .h4 {
        font-size: 20px;
        font-weight: 700;
        text-transform: uppercase;
        color: #545454;
    }

    & .h5 {
        font-size: 20px;
        font-weight: 400;
        color: #545454;
    }

    & .h6 {
        font-size: 16px;
        font-weight: 700;
        text-transform: uppercase;
        color: #545454;
    }

    & .bold {
        font-weight: 700;
    }

    & .italic {
        font-style: italic;
    }

    & .underline {
        text-decoration: underline;
    }

    & .uppercase {
        text-transform: uppercase;
    }
`;
