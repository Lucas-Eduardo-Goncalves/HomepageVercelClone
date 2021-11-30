import styled, { keyframes } from 'styled-components';

const ColorCycle = keyframes`
  0%, 55% {
    filter: brightness(0) invert(1);
  }

  11%, 33% {
    filter: none;
  }
`;

export const Container = styled.main`
  max-width: 104rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;

  padding: 5.6rem 2.4rem;

  > h1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    font-size: 10.8rem;
    line-height: 100%; // imita o valor do font-size
    letter-spacing: -1.2rem; // diminui o espaço entre as letras em 12px
    color: var(--white);

    span {
      padding: 0 0.67rem;
      filter: brightness(0) invert(1);

      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      animation: ${ColorCycle} 10s ease-in-out infinite;
    }

    span:nth-child(1) {
      background-image: linear-gradient(90deg, #007cf0, #00dfd8);
    }

    span:nth-child(2) {
      background-image: linear-gradient(90deg, rgb(121, 40, 202), rgb(255, 0, 128));
      animation-delay: 3.33s;
    }

    span:nth-child(3) {
      background-image: linear-gradient(90deg, rgb(255, 77, 77), rgb(249, 203, 40));
      animation-delay: 6.66s;
    }
  }

  > div {
    margin-top: 6.4rem;

    > button {
      background: var(--white);
      color: var(--black);
      border-radius: 4px;

      margin: 1.2rem;
      padding: 1.5rem 4.5rem;

      border: 0.1rem solid var(--white);
      
      font-size: 1.6rem;
      font-weight: 500;
      cursor: pointer;
      transition: .2s ease-in;

      &:hover {
        background: transparent;
        color: var(--white);
      }

      &.outline {
        background: transparent;

        color: var(--gray);
        border-color: var(--gray);

        &:hover {
          color: var(--white);
          border-color: var(--white);
        }
      }
    }
  }

  > h2 {
    margin: 6.4rem 0;
    font-size: 2rem;
    color: var(--white);
    font-weight: 400;
    letter-spacing: -0.04rem;
  }
`;