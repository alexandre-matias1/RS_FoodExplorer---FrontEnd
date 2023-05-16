import styled from "styled-components";

export const Container = styled.span`
    width: 100%;
    height: 32px;

    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    border-radius: 5px;
    padding: 4px 8px;

    font-family: Poppins;
    font-weight: 500;
    font-size: 14px;

    display: flex;
    align-items: center;
    justify-content: center;




`