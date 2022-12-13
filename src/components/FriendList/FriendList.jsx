import PropTypes from 'prop-types';

import { FriendListItem } from "./FriendListItem/FriendListItem";

export const FriendList = ({ friends }) => {
    return (
        <ul>
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
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.array,
};