import styled from "styled-components";

export const Container = styled.footer`
    background-color: ${({ theme }) => theme.COLORS.DARK_600};
    width: 100%;
    height: 77px;

    .container-logo{
        display: flex;
        gap: 7px;
    }

    .container-logo > span{
        display: flex;
        align-items: center;
        font-family: Roboto;
        font-weight: bold;
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.LIGHT_700};
    }
    .copyright{
        font-family: Poppins;
        font-weight: 300;
        font-size: 16px;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }  

    padding: 24px 124px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px; 

    
    @media (max-width: 435px){
        padding: 29px 28px;

        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;

        .container-logo > span{
        display: flex;
        align-items: center;
        font-size: 16px;
    }

        svg{
            width: 22px;
            height: 22px;
        }


       .copyright{
        font-family: Poppins;
        font-weight: 300;
        font-size: 12px;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }
    }
`