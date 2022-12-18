// import PropTypes from 'prop-types';
import { IsOnlineDot, FriendAvatar, FriendName } from './FriendListItem.styled';
import { Box } from 'components/Box';


export const FriendListItem = ({ id, avatar, name, isOnline = false }) => {
    return (
        <Box
            key={id}
            as="li"
            display="flex"
            alignItems="center"
            boxShadow="shadowStats"
            py={3}
            px={5}    
        >
            <IsOnlineDot
               isOnline={isOnline} 
            >
            </IsOnlineDot>
            <FriendAvatar
                src={avatar}
                alt={name}
            />
            <FriendName>{name}</FriendName>
        </Box>
    );
};

// FriendListItem.propTypes = {
//     id: PropTypes.number,
//     avatar: PropTypes.string,
//     name: PropTypes.string,
//     isOnline: PropTypes.bool,
// };