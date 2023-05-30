import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  button {
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  @media (min-width: 1024px) {
    .count {
      font-family: Roboto;
      font-weight: 700;
      font-size: 2rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }

  @media (max-width: 1023px) {
    font-family: Poppins;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;
