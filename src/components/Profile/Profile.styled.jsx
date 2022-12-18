import styled from "@emotion/styled";

export const ProfileAvatar = styled.img`
    border-radius: ${p => p.theme.radii.round};
    background-color: ${p => p.theme.colors.text};
    border: ${p => p.theme.borders.bold} ${p => p.theme.colors.accent};
    box-shadow: ${p => p.theme.shadows.avatarShadow};
    width: 40%;
    margin: ${p => p.theme.space[5]}px;
`;
export const ProfileName = styled.p`
    font-family: ${p => p.theme.fonts.heading};
    font-size: ${p => p.theme.fontSizes[4]}px;
    color: ${p => p.theme.colors.text};
    margin-bottom: ${p => p.theme.space[3]}px;
`;
export const ProfileTag = styled.p`
    font-size: ${p => p.theme.fontSizes[1]}px;
    font-weight: ${p => p.theme.fontWeights.bold};
    margin-bottom: ${p => p.theme.space[3]}px;
    color: ${p => p.theme.colors.accent};
`;
export const ProfileLocation = styled.p`
    font-style: italic;
    color: ${p => p.theme.colors.muted};
`;

export const ProfileStatsItem = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-basis: 100%;
    box-shadow: ${p => p.theme.shadows.shadowStats};
    border-collapse: collapse;
    padding: ${p => p.theme.space[3]}px ${p => p.theme.space[0]};
`;
export const ProfileLabel = styled.span`
    margin: ${p => p.theme.space[2]}px;
`;
export const ProfileQuantity = styled.span`
    font-size: ${p => p.theme.fontSizes[4]}px;
`;
