import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    height: 48px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: Poppins;
    font-weight: 500;
    font-size: 14px;

    border: none;
    border-radius: 5px;
    


    &:hover{
        background-color: ${({ theme}) => theme.COLORS.TOMATO_200};
    }
    &:disabled{
        background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
    }

    @media (max-width: 435px){
        height: 100%;
    }

`