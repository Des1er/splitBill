import React, { useState } from 'react';
import "./index.css";

function AddFriend(props){
    let [newName, setName] = useState("");
    let [newImage, setImage] = useState("https://i.pravatar.cc/48");

    function handleSubmit(e){
        e.preventDefault();
        if (!newName || !newImage) return;
        const id = crypto.randomUUID();
        let nFriend ={
            name: newName,
            image: `${newImage}?=${id}`,
            id: id,
            balance: 0
        }
        props.addFr(nFriend);
        setName("");
        setImage("https://i.pravatar.cc/48");
    }
    
return (<div className= {props.hidden}>
    <form className='form-add-friend' onSubmit={handleSubmit}>
        <label>☀️ Name</label>
        <input type="text" value = {newName} onChange={(e)=>{
            
            setName(e.target.value)
        }}/>
        <label>🖼️ Image url</label>
        <input type="text" value = {newImage} onChange={(e)=>{
            setImage(e.target.value)
        }}/>
        <button className='button' >Add</button>
    </form>
</div>);
}

export default AddFriend