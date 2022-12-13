import styled from "@emotion/styled";

export const FriendsItem = styled.li`
    display: flex;
    align-items: center;
    width: 250px;
    border: solid 1px black;
    border-radius: 4px;
    margin-bottom: 10px;
    padding: 3px 8px;
`;

export const FriendIsOnline = styled.span`
    margin-right: 5px;
`;
export const FriendAvatar = styled.img`
    height: 48px;
    width: 48px;
    margin-right: 5px;
`;

export const FriendName = styled.p`
    font-size: 18px;
`;