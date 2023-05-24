import React from "react";

export default function Arena(props){
    const botsArray = props.botsArray;
    console.log(botsArray)
    return <div>
        <h2>ARENA</h2>
        <ul>{botsArray.map((_,i)=> <li>{botsArray[i].name}</li>)}</ul>
    </div>
}