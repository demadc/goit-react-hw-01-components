import propTypes from "prop-types";


import {
    ProfileCard,
    Description,
    Avatar,
    Name,
    Tag,
    Location,
    StatsList,
    StatsItem,
    Label,
    Quantity,
  } from './Profile.styled';



export const Profile = ({username, tag, location, avatar, stats}) => {
    return (
   
    <ProfileCard>
    <Description>
       <Avatar src={avatar} alt="User avatar"/>
       <Name>{username}</Name>
       <Tag>@{tag}</Tag>
       <Location>{location}</Location>
   </Description>

   <StatsList>

       <StatsItem>
           <Label>Followers</Label>
           <Quantity>{stats.followers}</Quantity>
       </StatsItem>

       <StatsItem>
           <Label>Views</Label>
           <Quantity>{stats.views}</Quantity>
       </StatsItem>

       <StatsItem>
           <Label>Likes</Label>
           <Quantity>{stats.likes}</Quantity>
       </StatsItem>

   </StatsList>

   </ProfileCard>


    );
} ;



Profile.propTypes = {
    username: propTypes.string.isRequired,
    tag: propTypes.string.isRequired, 
    location: propTypes.string.isRequired, 
    avatar: propTypes.string.isRequired, 
    stats: propTypes.shape({
        followers: propTypes.number.isRequired,
        views: propTypes.number.isRequired,
        likes: propTypes.number.isRequired
      }).isRequired,
} 