import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  border-radius: 5px;
  font-family: Poppins;

  font-size: 14px;
  line-height: 24px;

  .qtd-cart {
    display: none;
  }


  @media (max-width: 1023px) {
    display: flex;
    align-items: center;
    justify-content: center;
    .name {
      display: none;
    }

    .empty {
      display: none;
    }

    .stats {
      position: relative;
      margin-top: 0.8rem;
    }
    .qtd-cart {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      width: 20px;
      height: 20px;
      left: 17px;
      bottom: 10px;
      font-family: Poppins;
      font-size: 14px;
      background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
      border-radius: 50%;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    .name {
      display: none;
    }
  }

  @media (max-width: 2000px) {
    .stats {
      display: flex;
    }
  }
`;
