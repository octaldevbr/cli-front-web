import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    background: ${({ theme }) => theme.white };
`;

export const Card = styled.div`
    background: ${({ theme }) => theme.white };
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1), 0 2px 6px rgba(0,0,0,0.1);
    max-width: 90%;

    @media (min-width: 860px) {
        max-width: 50%;
    }

    @media (min-width: 1100px) {
        max-width: 60%;
    }
`;

export const Title = styled.h1`
    margin: 0px 0px 10px 0px;
    color: ${({ theme }) => theme.primary };
`;

export const Subtitle = styled.h2`
    margin: 0px 0px 10px 0px;
    color: ${({ theme }) => theme.primary.opacity(0.85) };
    font-weight: 400;
`;

export const List = styled.ul`
    margin: 0px;
    padding: 10px 20px;
`;

export const Item = styled.li`
    margin-bottom: 10px;

    :last-child {
        margin-bottom: 0px;
    }
`;

export const Link = styled.a.attrs(props => ({
    href: "https://www.npmjs.com/package/" + props.link
}))`
`;

export const Button = styled.button`
    width: 250px;
    background-color: ${({ theme }) => theme.primary };
    margin-top: 20px;
    border-radius: 6px;
    height: 45px;
    color: ${({ theme }) => theme.white };
`;

export const Text = styled.p`
    word-break: break-all;
    margin: 10px 0px 0px 0px;

    span {
        color: ${({ theme }) => theme.primary };
    }
`;
