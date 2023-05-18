import styled from "styled-components";

export const Container = styled.div`
  grid-area: "content";
  
  .dish-container{
    position: relative;
    background-color: ${({ theme }) => theme.COLORS.DARK_200};
    width: 305px;
    height: 462px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 8px;
    text-align: center;
  }

  .icon{
    position: absolute;
    top: 16px;
    right: 18px;
    width: 24px;
    height: 24px;
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_300}
  }
  
  img {
    width: 176px;
    height: 176px;
    border-radius: 100%;
    margin-bottom: 15px;
  }

  h1 {
    font-size: 24px;
    line-height: 140%;
    font-weight: bold;
    font-family: Poppins;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    margin-bottom: 15px;
  }
  p {
    font-size: 14px;
    line-height: 160%;
    font-family: Roboto;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    margin-bottom: 15px;
  }

  h1,
  p {
    margin: 0 24px;
  }

  .price {
    font-size: 32px;
    line-height: 160%;
    font-family: Roboto;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    margin-bottom: 15px;
  }

  .components-container{
      display: flex;
      margin: 0 47.5px;
      margin-top: 12px;
      gap: 16px;
    }

  .button{
    width: 100%;
  }

  


  @media (max-width: 425px){

    .dish-container{
      gap: 12px;
      width: 210px;
      height: 292px;
    }

    .icon{
      top: 16px;
      right: 16px;
    }

    h1 {
      font-size: 14px;
      line-height: 24px;
      font-weight: 500;
      font-family: Poppins;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      margin-bottom: 12px;
    }

    p {
      display: none;
    }
    .price {
      font-size: 16px;
      line-height: 100%;
      font-family: Roboto;
      font-weight: regular;
      color: ${({ theme }) => theme.COLORS.CAKE_200};
    }
    img {
      width: 88px;
      height: 88px;
      border-radius: 100%;
      margin-bottom: 12px;
    }

    .components-container{
      display: flex;
      margin: 0 24px;
      margin-top: 12px;
      flex-direction: column;
      gap: 16px;
    }

    .button{
      height: 32px;
    }
  }
  


  /* .dish-container{
    background-color: ${({ theme }) => theme.COLORS.DARK_200};
    width: 305px;
    height: 462px;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 8px;
    text-align: center;
  }

  .icon-container {
    width: 100%;
    border: 1px red solid;
  }

  img {
    width: 176px;
    height: 176px;
    border-radius: 100%;
    margin-bottom: 15px;
    margin-top: 12px;
  }

  h1 {
    font-size: 24px;
    line-height: 140%;
    font-weight: bold;
    font-family: Poppins;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    margin-bottom: 15px;
  }
  p {
    font-size: 14px;
    line-height: 160%;
    font-family: Roboto;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    margin-bottom: 15px;
  }

  h1,
  p {
    margin: 0 24px;
  }

  .price {
    font-size: 32px;
    line-height: 160%;
    font-family: Roboto;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    margin-bottom: 15px;
  }

  .icon-container {
    width: 100%;
    border: 1px red solid;
    display: flex;
    justify-content: flex-end;
    padding-top: 16px;
    padding-right: 18px;
    align-items: center;
  }

  .icon {
    width: 24px;
    height: 24px;
  }

  .container {
    margin-top: -27px;
  }

  @media (max-width: 435px) {
    h1 {
      font-size: 14px;
      line-height: 24px;
      font-weight: 500;
      font-family: Poppins;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      margin-bottom: 12px;
    }

    p {
      display: none;
    }
    .price {
      font-size: 16px;
      line-height: 100%;
      font-family: Roboto;
      font-weight: regular;
      color: ${({ theme }) => theme.COLORS.CAKE_200};
      margin-bottom: 12px;
    }
    img {
      width: 88px;
      height: 88px;
      border-radius: 100%;
      margin-bottom: 12px;
    }
  } */
`;
