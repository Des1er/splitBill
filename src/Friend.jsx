import React from 'react';
import "./index.css";

function Friend({friend, handleSelect, selectedF}){
    const isSelected = selectedF?.id === friend.id
    return (<div>
        <li className={isSelected? 'selected':''}>
            <img src = {friend.image} alt = {friend.id}/>
          <h3>{friend.name}</h3>
          <p className= {friend.balance <= 0 ? friend.balance === 0 ? "" : "red": "green"}> {friend.balance <= 0 ? friend.balance === 0 ? `You and ${friend.name} are even` :`You owe ${friend.name} ${Math.abs(friend.balance)}$`: `${friend.name} owe You ${Math.abs(friend.balance)}$`} </p>
          <button className='button' onClick={() => {handleSelect(friend)}}>{isSelected? 'Close':'Selected'}</button>
          </li>
    </div>)
  }
  
export default Friend;