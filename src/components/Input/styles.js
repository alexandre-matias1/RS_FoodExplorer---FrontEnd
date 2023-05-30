import styled from "styled-components";

export const Container = styled.div`
    input{
        width: 100%;
        border: none;
        border-radius: 5px;

        background-color: ${({ theme }) => theme.COLORS.DARK_900};
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
        font-family: Roboto;
        text-align: center;
        
    }
    >input{
        width: 100%;
        height: 48px;
    }


`