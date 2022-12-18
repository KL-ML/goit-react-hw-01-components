import styled from "@emotion/styled";

export const Title = styled.h2`
    text-transform: uppercase;
    font-size: ${p => p.theme.fontSizes[4]}px;
    color: ${p => p.theme.colors.muted};
    text-align: center;
`;

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-basis: 100%;
    box-shadow: ${p => p.theme.shadows.shadowStats};
    border-collapse: collapse;
    padding: ${p => p.theme.space[3]}px ${p => p.theme.space[0]};
`;

export const Label = styled.span`
    margin: ${p => p.theme.space[2]}px;
`;

export const Percentage = styled.span`
    font-size:  ${p => p.theme.fontSizes[4]}px;
`;