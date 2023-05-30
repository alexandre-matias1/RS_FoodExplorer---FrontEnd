import styled from "styled-components";

export const Container = styled.div``;

export const Card = styled.div`
  > button {
    border: none;
    background: transparent;
  }
  @media (max-width: 1023px) {
    width: 21rem;
    height: 29.2rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_200};
    border-radius: 1rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;

    > img {
      width: 8.8rem;
      width: 8.8rem;
      border-radius: 100%;
    }

    > h1 {
      font-family: Poppins;
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 140%;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    > p {
      display: none;
    }

    > span{
      font-family: Roboto;
      font-size: 2rem;
      font-weight: 400;
      line-height: 160%;
      color: ${({ theme }) => theme.COLORS.CAKE_200};
    }

    .icon {
      position: absolute;
      top: 17px;
      right: 17px;
      width: 25px;
      height: 25px;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
    
    .icon:hover{
      background-color: white;
    }

    .buy-container{
      width: 16.2rem;
    }

    .button-container{
      margin-top: 12px;
      height:32px;
    }

  
  }

  @media (min-width: 1024px) {
    width: 30.4rem;
    height: 46.2rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_200};
    border-radius: 1rem;
    position: relative;

    display: flex;
    gap: 1.5rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > img {
      width: 17.6rem;
      height: 17.6rem;
      border-radius: 50%;
    }
    > h1 {
      font-family: Poppins;
      font-size: 2.4rem;
      line-height: 140%;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }
    > p {
      font-family: Roboto;
      font-size: 14px;
      line-height: 160%;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      text-align: center;
      margin: 0 24px;
    }
    span {
      font-family: Roboto;
      font-size: 32px;
      font-weight: 400;
      line-height: 160%;
      color: ${({ theme }) => theme.COLORS.CAKE_200};
    }

    .icon {
      position: absolute;
      top: 17px;
      right: 17px;
      width: 25px;
      height: 25px;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    .buy-container {
      width: 100%;
      display: flex;
      padding: 0 48px;
      gap: 16px;
    }

    .button-container{
      width: 100%;
    }
  }
`;
