import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.TOMATO_100};
    color: ${({theme}) => theme.COLORS.LIGHT_100};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;


    height: 56px;
    border: 0;
    padding: 0 24px;
    border-radius: 5px;
    font-family: Poppins;

    
    font-size: 14px;
    line-height: 24px;



    svg{
        width: 20px;
        height: 20px;
    }

    @media (max-width:430px){
        background-color: ${({theme}) => theme.COLORS.DARK_600};
        width: 100%;
        height: 100%;

        .name{
            display: none;
        }
    }
`
