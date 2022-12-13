import styled from "@emotion/styled";

export const Section = styled.section`
    width: fit-content;
    border: solid 1px black;
    margin-bottom: 20px;
`;

export const Title = styled.h2`
    text-transform: uppercase;
    font-size: 24px;
    color: rgb(85, 85, 85);
    text-align: center;
`;

export const List = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-flow: wrap;
    align-items: center;
    border: solid 1px black;
    padding: 10px 15px;
`;

export const Label = styled.span`
    margin: 4px;
`;

export const Percentage = styled.span`
    font-size: 24px;
`;