import styled, { css } from 'styled-components';

// Media query mixins
const tablet = (...args) => css`
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    ${css(...args)}
  }
`;

const phone = (...args) => css`
  @media only screen and (max-width: 767px) {
    ${css(...args)}
  }
`;

// Styled components
export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 410px;

  ${tablet`
    width: 100%;
  `}
  
  ${phone`
    width: 100%;
  `}

  h2 {
    margin-top: 10px 0;
  }

`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;

    ${phone`
        flex-wrap: wrap;

        button {
            width: 100% !important;
        }
    `}
`;
