import { Box } from 'components/Box';
import PropTypes from 'prop-types';
import { FriendListItem } from "./FriendListItem/FriendListItem";

export const FriendList = ({ friends }) => {
    return (
        <Box
            as="ul"
            bg="backgroundCard"
            boxShadow="boxShadowSection"
            borderRadius="normal"
            overflow="hidden"
            mb={24}
        >
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
        </Box>
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