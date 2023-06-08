import React, { useState } from "react";
import singleBot from "../assets/bot.png";
import { Link } from "react-router-dom";

export default function BotsInfo(props) {
  // const [botName, setBotName] = useState('');
  // const [booleanValue, setBooleanValue] = useState('1');
  // const [booleanOperator, setBooleanOperator] = useState('and');
  // const [botSpeed, setBotSpeed] = useState(0);
  // const [botDirection, setBotDirection] = useState('north');
  const {arenaData, updateArenaData} = props
  
  
  // Generic change handler
  function handleChange(e) {
    const changedField = e.target.name;
    const newValue = e.target.value;

    let arenaDataCopy = {...arenaData}

    if(changedField === "tileNum"){
      updateArenaData({
        ...arenaDataCopy, tileNum: Number(newValue)
      })

    }
    else{
      arenaDataCopy[changedField] = newValue;
      updateArenaData({...arenaDataCopy})
    }
  }

  //form event- submit
  const handleSubmit = (event) => {
    event.preventDefault();
    
  }

  const [expandedBots, setExpandedBots] = useState([]);

  const toggleBotExpansion = (index) => {
    setExpandedBots((prevExpandedBots) => {
      const newExpandedBots = [...prevExpandedBots];
      newExpandedBots[index] = !newExpandedBots[index];
      return newExpandedBots;
    });
  };

  return (

  <div className="createArena">
    <h2>Board Controls</h2>

    <div className="arenaControls">

      <div className="arena-input-form">
        
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="speed">
              Game Speed:
              <input
                id="speed"
                type="range"
                min={500}
                max={3000}
                step={500}
                value={arenaData.speed}
                name="speed"
                onChange={handleChange}
                required
              />
              <span>{` ${arenaData.speed/1000}sec`}</span>
            </label>
          </div>
          <div>
            <label htmlFor="Arena Size">
              Arena Size:
              <input
                id="tileNum"
                type="range"
                min={3}
                max={8}
                step={1}
                value={arenaData.tileNum}
                name="tileNum"
                onChange={handleChange}
                required
              />
              <span>{` ${arenaData.tileNum}x${arenaData.tileNum}`}</span>
            </label>
          </div>
          <div>
            <label htmlFor="operator">
              Boolean operator:
              <select
                id="operator"
                name="operator"
                value={arenaData.operator}
                onChange={handleChange}
                required
              >
                <option value="AND">AND</option>
                <option value="OR">OR</option>
                <option value="NOR">NOR</option>
                <option value="XOR">XOR</option>
              </select>
            </label>
          </div>
          
          <Link to="/createBot" className="next_btn">
            <button type="submit">Next</button>
          </Link>
        </form>
        
      </div>
    </div>
    </div>
  )
  
 
}
