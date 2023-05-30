import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  >h2{
    margin-bottom: 2.4rem;
  }
  @media (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    > h2 {
      font-family: Poppins;
      font-weight: 400;
      font-size: 2.4rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    .arrow {
      display: none;
    }
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    > h2 {
      font-family: Poppins;
      font-weight: 500;
      font-size: 3.2rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    .slider-container {
      width: 1124px;
      display: flex;
      position: relative;
      > button {
        border: none;
        background: transparent;
        z-index: 1;
      }
      .left{
        position: absolute;
        transform: rotate(180deg);
      }
      .right{
        position: absolute;
        right: 0%;
      }

      .arrow{
        width: 100px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        background-image: ${({ theme }) => theme.COLORS.GRADIENTS_100};
        
      }
    }
  }
`;

export const Carrossel = styled.div`
  position: relative;

  @media (max-width: 1023px) {
    width: 400px;
    display: flex;
    gap: 1.6rem;
    overflow-x: auto;
  }

  @media (min-width: 1024px) {
    width: 1124px;
    display: flex;
    gap: 1.6rem;
    overflow-x: auto;

    &::-webkit-scrollbar{
      display: none;
    }

    .arrow {
      position: absolute;
    }
  }
`;
