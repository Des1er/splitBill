import React, { useState } from 'react';
import "./index.css";
import FriendsList from "./FriedsList";
import AddFriend from './AddFriend';
import SplitBill from './SplitBill';

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  
  let [friends, setFriends] = useState(initialFriends);
  let [hiddenAd, sethiddenAd] = useState(true);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleAddFriend(friend){
    setFriends((prev) => [...prev,friend]);
  }

  function handleSelect(selectedF){
    setSelectedFriend((cur) => (cur?.id === selectedF.id ? null : selectedF));
    sethiddenAd(true);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className = "sidebar">
        
        <FriendsList friendsList = {friends} handleSelect = {handleSelect} selectedF = {selectedFriend}/>
        <AddFriend hidden = {hiddenAd===true ? "hide": " "} addFr = {handleAddFriend}/>
        <button className = 'button' onClick = {()=>{sethiddenAd((prev)=>!prev)}}> {hiddenAd ? 'Add friend': 'Close'}</button>
        
      </div>
      {selectedFriend && <SplitBill name = {selectedFriend?.name} onSplitBill = {handleSplitBill}/>}
    </div>
  );
}

export default App;
