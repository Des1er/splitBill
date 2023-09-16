import React from 'react';
import "./index.css";
import Friend from './Friend';
function FriendsList(props) {

    return (<div>
        <ul>
          {props.friendsList.map((friend) => (
            <Friend
            key = {friend.id}
            friend = {friend}
            handleSelect = {props.handleSelect}
            selectedF = {props.selectedF}
            />
             ))}
        </ul>
    </div>);
}


export default FriendsList 