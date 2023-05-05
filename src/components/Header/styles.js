import styled from "styled-components";


export const Container = styled.header`
    grid-area: header;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    
    width: 100%;
    height: 96px;

    background-color: ${({theme}) => theme.COLORS.DARK_600};
    
    .logo-container{
        display: flex;
        gap:0.625rem;
    }

    .name-container{
        flex-direction: column;
    }

    .admin{
        font-size: 0.9rem;
        color: ${({theme}) => theme.COLORS.CAKE_200};
        display: flex;
        justify-content: flex-end;

    }

    .logo-name{
        font-family: Roboto;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-weight: bold;
        font-size: 1.5rem;
     
    }
    .input-container{
        width: 36.25rem;
    }

    .button-container{
        width: 216px;
    }
`