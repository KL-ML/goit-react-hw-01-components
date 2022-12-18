import PropTypes from 'prop-types';
import { ProfileAvatar, ProfileName, ProfileTag, ProfileLocation, ProfileStatsItem, ProfileLabel, ProfileQuantity } from './Profile.styled';
import { Box } from 'components/Box';

export const Profile = ({username, tag, location, avatar, stats}) => {
    return (
        <Box
            bg="backgroundCard"
            boxShadow="boxShadowSection"
            borderRadius="normal"
            overflow="hidden"
            mb={24}
        >
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                py={24}
                px={0}
            >
                <ProfileAvatar
                    src={avatar}
                    alt={username}
                />
                <ProfileName>{username}</ProfileName>
                <ProfileTag>@{tag}</ProfileTag>
                <ProfileLocation>{location}</ProfileLocation>
            </Box>

            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                borderRadius="normal"
                backgroundImage="linear-gradient(
                130deg,
                #DE7B7B 20%,
                 #CA68A3 60%,
                #B25CCE
                );"
                as="ul"
            >
                <ProfileStatsItem>
                    <ProfileLabel>Followers</ProfileLabel>
                    <ProfileQuantity>{stats.followers}</ProfileQuantity>
                </ProfileStatsItem>
                <ProfileStatsItem>
                    <ProfileLabel>Views</ProfileLabel>
                    <ProfileQuantity>{stats.views}</ProfileQuantity>
                </ProfileStatsItem>
                <ProfileStatsItem>
                    <ProfileLabel>Likes</ProfileLabel>
                    <ProfileQuantity>{stats.likes}</ProfileQuantity>
                </ProfileStatsItem>
            </Box>
        </Box>
    );
};

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.object,
}