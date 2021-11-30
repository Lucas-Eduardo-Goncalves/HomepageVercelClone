import styled from 'styled-components';

export const Container = styled.header`
  max-width: 104.8rem;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem 2.4rem;

  h1 {
    height: 2.6rem;

    img {
      height: 100%;
    }
  }

  nav ul {
    display: flex;
    align-items: center;
    list-style: none;

    li a {
      font-size: 1.4rem;
      padding: 0.8rem 1.6rem;
      color: var(--gray);
      text-decoration: none;

      & + a {
        margin-left: 1.2rem;
      }
    }
  }

  div {
    margin-left: 0.8rem;

    display: flex;
    align-items: center;

    a {
      height: 3.2rem;
      position: relative;

      span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);

        color: var(--white);
        font-size: 1.4rem;
        width: max-content;
      }
    }
    
    > img {
      margin-left: 0.8rem;
      width: 3.2rem;
      height: 3.2rem;
    }
  }
`;