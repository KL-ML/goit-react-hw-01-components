import styled from "@emotion/styled";

export const ProfileDiv = styled.div`
    box-shadow: ${p => p.theme.shadows.boxShadowSection};
    margin-bottom: 20px;
`;

export const ProfileDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
`;
export const ProfileAvatar = styled.img`
    width: 40%;
    margin-bottom: 10px;
`;
export const ProfileName = styled.p`
    font-size: 24px;
    margin-bottom: 10px;
`;
export const ProfileTag = styled.p`
    margin-bottom: 10px;
`;
export const ProfileLocation = styled.p`
`;
export const ProfileStats = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
export const ProfileStatsItem = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-basis: 100%;
    //box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    box-shadow: ${p => p.theme.shadows.shadowStats};
    //border: solid 1px #8ca9b7b4;
    border-collapse: collapse;
    padding: 10px 0;
    background-color: #acdce099;
`;
export const ProfileLabel = styled.span`
    margin: 4px;
`;
export const ProfileQuantity = styled.span`
    font-size: 24px;
`;
