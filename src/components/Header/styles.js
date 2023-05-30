import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  width: 100%;
  height: 10.5rem;


  button{
    background: transparent;
    border: none;
  }
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  .admin {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-family: Roboto;
  }

  .logo-name {
    font-family: Roboto;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-weight: bold;
    font-size: 1.5rem;
  }
  .input-container {
  }

  @media (max-width: 1023px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;

    .input-container {
      display: none;
    }

    .logo-container {
      display: flex;
      align-items: center;
      gap: 0.8rem;
    }

    .logo-name {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      width: 100%;
      font-size: 20px;
    }

    .logo-container {
      display: flex;
    }

    .exit{
      display: none;
    }
  }
  @media (max-width: 350px) {
    .logo-name {
      font-size: 1.8rem;
    }
  }

  @media (min-width: 1024px){
    display: flex;
    align-items: center;
    justify-content: center;
    gap:3.2rem;

    .menu-container{
      display: none;
    }

    .input-container{
      width: 58.1rem;
    }
    
    .logo-container{
      display: flex;
      align-items: center;
      gap: 0.8rem
    }

    .name-container{
      display: flex;
      position: relative;
    }

    .admin{
      position: absolute;
      right: 0;
      bottom: -30%;
    }
    .logo-name{
      font-size: 2.0rem;
      display: flex;
      flex-direction: column;
      text-align: end;
    }

    .button-container{
      display: flex;
      
      align-items: center;
      justify-content: center;
      background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
      height: 4.8rem;
      width: 21.6rem;
      border-radius: 5px;
    }
  }


  /* padding: 0 28px;

    .input-container {
      display: none;
    }
    .exit {
      display: none;
    }

    .menu-container {
      display: flex;
    }

    .button-container {
      width: 25px;
    }

    .name-container {
      display: flex;
    }

    .logo {
      width: 25px;
      height: 25px;
    }



    .logo-container {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      width: 100%;
    }

    .button-menu {
      background: none;
      border: none;
    } */


`;
