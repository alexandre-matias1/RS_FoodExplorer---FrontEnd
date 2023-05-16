import styled from "styled-components";


export const Container = styled.header`
    grid-area: header;
    
    .menu-container{
        display:none;
    }
    padding: 0 24px;
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
        font-family: Roboto;

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


    @media (max-width:430px){

        padding: 0 28px;

        .input-container{
            display: none;
        }        
        .exit{
            display: none;
        }
       
        .menu-container{
            display: flex;
        }
        
        .button-container{
            width: 25px;
        }

        .name-container{
            display: flex;
        }

        .logo{
            width: 25px;
            height: 25px;
        }

        .logo-name{
            width: 100%;
            font-size: 20px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .logo-container{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: row;
            width: 100%;
        }

        .button-menu{
            background: none;
            border: none;
        }
    }

    @media (min-width: 767px){
            .logo-container{    
                display: flex;
                gap: 0.625rem;
                width: 200px;
            }
    }


    

`