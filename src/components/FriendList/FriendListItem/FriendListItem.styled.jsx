import styled from "@emotion/styled";

export const IsOnlineDot = styled.div`
    border-radius: ${p => p.theme.radii.round};
    width: 12px;
    height: 12px;
    margin-right: ${p => p.theme.space[4]}px;
    background-color: ${p => {
        return p.isOnline
            ? p.theme.colors.isOnline
            : p.theme.colors.isOffline
    }}; 
`;

export const FriendAvatar = styled.img`
    height: ${p => p.theme.sizes.friendsImgSize};
    width: ${p => p.theme.sizes.friendsImgSize};
    margin-right: ${p => p.theme.space[4]}px;
    border-radius: ${p => p.theme.radii.normal};
    background-color: ${p => p.theme.colors.text};
    box-shadow: ${p => p.theme.shadows.shadowStats};
`;

export const FriendName = styled.p`
    font-size: ${p => p.theme.fontSizes[3]}px;
`;