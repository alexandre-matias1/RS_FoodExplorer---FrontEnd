import styled from "styled-components";


export const Container = styled.div`
    width: 100%;

    button{
        background: none;
        border: none;
        color: ${({ theme }) => theme.COLORS.LIGHT_100}
    }

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;

    font-family: Poppins;
    color: ${({ theme }) => theme.COLORS.LIGHT_100} 


`