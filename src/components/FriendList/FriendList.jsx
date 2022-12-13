import PropTypes from 'prop-types';
import { List } from './FriendList.styled';
import { FriendListItem } from "./FriendListItem/FriendListItem";

export const FriendList = ({ friends }) => {
    return (
        <List>
            {
                friends.map(({ id, avatar, name, isOnline }) => {
                    return (
                        <FriendListItem
                            id={id}
                            avatar={avatar}
                            name={name}
                            isOnline={isOnline}
                        />
                    )
                })
            }   
        </List>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        })
    ),
};