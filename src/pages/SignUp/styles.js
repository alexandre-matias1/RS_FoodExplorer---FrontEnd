import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  .name {
    font-family: Roboto;
    font-weight: bold;
    font-size: 42px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  span {
    font-family: Roboto;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-size: 16px;
    line-height: 100%;
  }
  .input {
    text-align: left;
    padding: 20px;
  }

  a {
    font-family: Poppins;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 14px;
    line-height: 24px;
  }

  @media (max-width: 425px) {
    width: 316px;
    margin-top: 158px;
    margin-left: 65px;
    margin-right: 47px;
    display: flex;
    flex-direction: column;

    .create-account{
      display: none;
    }

    .container {
      display: flex;
      flex-direction: column;
    }
    .logo {
      display: flex;
      align-items: center;
      gap: 11px;
      margin-bottom: 78px;
    }

    .login-box {
      display: flex;
      flex-direction: column;
      gap: 32px;
    }

    .button {
      height: 48px;
    }

    .data-name {
      display: flex;
      margin-bottom: 8px;
    }

    .container-create {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .create {
      display: flex;
      justify-content: center;
      width: 117px;
    }
  }
  @media (min-width: 430px) {
    display: flex;
    width: 100%;

    .left-container{
      display: flex;
      justify-content: center;
      width: 50%;
    }

    .right-container{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;

    }


    .name {
      display: flex;
      align-items: center;
      justify-content: center;
      align-items: center;
      margin-top: 342px;
      margin-left: 154px;
      gap: 19px;
    }
    .login-box{
      background-color: ${({ theme }) => theme.COLORS.DARK_700};
      display: flex;
      flex-direction: column;
      width: 476px;
      height: 621px;
      border-radius: 16px;
      padding: 0 64px;
    }

    .create-account{
      font-family: Poppins;
      font-size: 32px;
      line-height: 140%;
      text-align: center;
      margin-top: 64px;
      margin-bottom: 32px;
    }
    .data-name {
      display: flex;
      margin-bottom: 8px;
    }
    .input{
      margin-bottom: 32px;
    }
    .container-create {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 32px;
    }
  }
`;
