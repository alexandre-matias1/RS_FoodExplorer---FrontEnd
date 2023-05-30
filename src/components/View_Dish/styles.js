import styled from "styled-components";

export const Container = styled.div`
  @media (max-width: 1023px) {
    width: 31.6rem;
    height: 59rem;
    .dish-container {
      width: 330px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
    }

    .ingredients-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 24px;
    }
    > a {
      width: 100%;
      padding-left: 1px;
      font-family: Poppins;
      font-size: 2.4rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }
    img {
      width: 26.4rem;
      height: 26.4rem;
      border-radius: 100%;
    }

    h1 {
      font-family: Poppins;
      font-size: 2.8rem;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      text-align: center;
    }

    .text {
      width: 250px;
      font-family: Poppins;
      font-size: 1.4rem;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      text-align: center;
      margin-bottom: 8px;
    }

    .buttons-container {
      width: 100%;
      display: flex;
      height: 50px;
      margin-top: 20px;
    }
  }
  @media (min-width: 1024px) {
    width: 100%;
    height: 100%;

    a {
      font-family: Poppins;
      font-weight: 700;
      font-size: 24px;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    img {
      width: 39rem;
      height: 39rem;
      border-radius: 100%;
    }
    h1 {
      font-family: Poppins;
      font-size: 4rem;
      font-weight: 500;
      line-height: 140%;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      text-align: start;
    }

    .text {
      width: 680px;
      font-family: Poppins;
      font-size: 2.4rem;
      line-height: 140%;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    .dish-container{
      display: flex;
      align-items: center;
      margin-top: 48px;
    }

    .items-container{
     display: flex;
     flex-direction: column;
     gap: 24px;
     margin-left: 30px;
    }

    .ingredients-container{
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      grid-gap: 24px;
    }

    .buttons-container{
      display: flex;
      width: 400px;
      margin-left: -59px;
    }
  }
`;
