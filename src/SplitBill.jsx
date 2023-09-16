import React, { useState } from 'react';
import "./index.css";

function SplitBill(props){
    let [totalBill,setTotalBill] = useState("")
    let [youBill,setYouBill] = useState("")
    const paidByFriend = totalBill ? totalBill - youBill : "";
    const [whoIsPaying, setWhoIsPaying] = useState("you");

    function handleSubmit(e){
        e.preventDefault();

        if (!totalBill) {
            console.log("sfhalkfhklasj")
            return;
        }

        props.onSplitBill(whoIsPaying === "you" ? paidByFriend : -youBill);
    }

    return(
        <div >
        <form className='form-split-bill' onSubmit={handleSubmit}>
        <h2>Split the bill with {props.name}</h2>
            <label>$ Total Cost</label>
            <input type='number' value={totalBill} onChange={(e) => setTotalBill(Number(e.target.value))}></input>

            <label>$ You eat for</label>
            <input type='number' value={youBill} onChange={(e) =>
          setYouBill( Number(e.target.value) > totalBill ? youBill : Number(e.target.value) ) }></input>

            <label>$ Your Friend Cost</label>
            <input type='number' disabled value={paidByFriend} ></input>

            <label>💳 Who Peeeeed</label>
            <select value={whoIsPaying}
                onChange={(e) => setWhoIsPaying(e.target.value)}
            >
                <option value="you">You</option>
                <option value="friend">Your Friend</option>
            </select>
            <button className='button'>Submit</button>
        </form>
        </div>
    );
}
export default SplitBill