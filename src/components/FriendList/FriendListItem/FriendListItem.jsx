import PropTypes from 'prop-types';

export const FriendListItem = ({ id, avatar, name, isOnline }) => {
    return (
        <li key={id}>
            <span>{isOnline}</span>
            <img src={avatar} alt={name} width="48" />
            <p></p>
        </li>
    );
};

FriendListItem.propTypes = {
    id: PropTypes.number,
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
};