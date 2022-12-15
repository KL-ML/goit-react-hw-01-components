import PropTypes from 'prop-types';
import { ProfileDiv, ProfileDescription, ProfileAvatar, ProfileName, ProfileTag, ProfileLocation, ProfileStats, ProfileStatsItem, ProfileLabel, ProfileQuantity } from './Profile.styled';
import { Button } from 'components/button';
import { BsFillCircleFill, BsFillCheckCircleFill, BsFillDiamondFill } from 'react-icons/bs';

export const Profile = ({username, tag, location, avatar, stats}) => {
    return (
        <ProfileDiv>
            <ProfileDescription>
                <ProfileAvatar
                    src={avatar}
                    alt={username}
                />
                <ProfileName>{username}</ProfileName>
                <ProfileTag>@{tag}</ProfileTag>
                <ProfileLocation>{location}</ProfileLocation>
            </ProfileDescription>

            <ProfileStats>
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
            </ProfileStats>
            <Button icon={BsFillCircleFill}>Search</Button>
            <Button icon={BsFillCheckCircleFill}>Filter</Button>
            <Button icon={BsFillDiamondFill}>Show modal</Button>
            <Button type="submit">LogIn</Button>
        </ProfileDiv>
    );
};

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.object,
}