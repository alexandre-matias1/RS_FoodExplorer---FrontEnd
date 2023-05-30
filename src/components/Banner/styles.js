import styled from "styled-components";

export const Container = styled.div`
 background: ${({ theme }) => theme.COLORS.GRADIENTS_200};
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  display: flex;
  align-items: end;
  position: relative;
  margin-bottom: 62px;;

  // Mobile
  @media (max-width: 1023px) {
    width: 37.6rem;
    height: 12rem;
    margin-top: 4.4rem;
    display: flex;
    position: relative;
    border-radius: 4px;

    img{
      width: 180px;
      height: 250px;
    }

    .container {
      position: absolute;
      width: 100%;
      right: 10px;
      height: 153px;
      overflow: hidden;
    }

    .text-container {
      position: absolute;
      bottom: 0px;
      right: 0px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.8rem;
      margin-right: 10px;
      margin-bottom: 25px;
    }

    h1 {
      font-family: Poppins;
      font-weight: 500;
      font-size: 2rem;
    }
    p {
      width: 200px;
      font-family: Poppins;
      font-size: 1.2rem;
      line-height: 100%;
    }
  }

  //Desktop
  @media (min-width: 1024px) {
    width: 112rem;
    height: 26rem;
    margin-top: 16.4rem;
    display: flex;
    border-radius: 8px;

    h1 {
      font-family: Poppins;
      font-weight: 500;
      font-size: 4rem;
    }
    p {
      font-family: Poppins;
      font-size: 1.4rem;
      text-align: center;
      line-height: 100%;
    }

    .container {
      position: absolute;
      width: 100%;
      height: 419px;
      left: -3.8%;
      overflow: hidden;
    }

    .text-container {
      position: absolute;
      bottom: 92px;
      right: 100px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.8rem;
    }
  }
`;
