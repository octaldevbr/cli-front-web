import styled from "styled-components";

export const Title = styled.h1`
    margin: 0px;
    color: ${({ theme }) => theme.primary };
`;

export const Button = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.red };
    margin-top: 20px;
    border-radius: 6px;
    height: 45px;
    color: ${({ theme }) => theme.white };
`;
