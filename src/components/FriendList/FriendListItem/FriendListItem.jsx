// import PropTypes from 'prop-types';
import { FriendsItem, FriendIsOnline, FriendAvatar, FriendName } from './FriendListItem.styled';


export const FriendListItem = ({ id, avatar, name, isOnline }) => {
    return (
        <FriendsItem key={id}>
            <FriendIsOnline>O</FriendIsOnline>
            <FriendAvatar src={avatar} alt={name} />
            <FriendName>{name}</FriendName>
        </FriendsItem>
    );
};

// FriendListItem.propTypes = {
//     id: PropTypes.number,
//     avatar: PropTypes.string,
//     name: PropTypes.string,
//     isOnline: PropTypes.bool,
// };