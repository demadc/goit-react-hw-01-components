import PropTypes from "prop-types";
import { Item, Avatar, Name, Status } from "./FriendListItem.styled";


export const FriendListItem = ({ avatar, name, isOnline, id }) => {
    return (
        <Item key={id}> 
            <Status $isonline={isOnline.toString()}></Status>
            <Avatar src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
        </Item>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}