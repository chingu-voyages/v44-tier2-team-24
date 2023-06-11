import React, { useState } from "react";
import singleBot from "../assets/bot.png";
import { Link } from "react-router-dom";
import Container from "../Components/Layout/Container"
import Swal from "sweetalert2";


export default function BotsInfo(props) {
  const {arenaData, updateArenaData} = props
  
  // Checks windows width
  let width = window.innerWidth;
  
  
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
    else if(changedField === "speed"){
      updateArenaData({
        ...arenaDataCopy, speed: Number(newValue)
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
    <Container>
    <h2>Board Controls</h2>

    

      <div className="arena-input-form">
        
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="speed">
              Movement Speed:
              <input
                id="speed"
                type="range"
                min={500}
                max={3500}
                step={500}
                value={arenaData.speed}
                name="speed"
                onChange={handleChange}
                required
              />
              <span>{` ${4 - arenaData.speed/1000}sec`}</span>
              <button
                  className="question-button"
                  onClick={(e) => {
                    e.preventDefault();
                    Swal.fire({
                      title: 'Movement Speed',
                      text: 'Here is some information about the Movement Speed.',
                      icon: 'info',
                      confirmButtonText: 'OK'
                    });
                  }}
                >
                  ?
                </button>
            </label>
          </div>
          <div>
            <label htmlFor="Arena Size">
              Arena Size:
              <input
                id="tileNum"
                type="range"
                min={3}
                max={width <= 768 && width > 428? 5 : width <= 428 ? 4 : 8}
                step={1}
                value={arenaData.tileNum}
                name="tileNum"
                onChange={handleChange}
                required
              />
              <span>{` ${arenaData.tileNum}x${arenaData.tileNum}`}</span>
              <button
                  className="question-button"
                  onClick={(e) => {
                    e.preventDefault();
                    Swal.fire({
                      title: 'Arena Size',
                      text: 'Here is some information about the Arena Size.',
                      icon: 'info',
                      confirmButtonText: 'OK'
                    });
                  }}
                >
                  ?
                </button>
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
              <button
                  className="question-button"
                  onClick={(e) => {
                    e.preventDefault();
                    Swal.fire({
                      title: 'Boolean Operator',
                      text: 'Here is some information about the Boolean Operator.',
                      icon: 'info',
                      confirmButtonText: 'OK'
                    });
                  }}
                >
                  ?
                </button>
            </label>
          </div>
          
          <Link to="/createBot" className="next_btn">
            <button type="submit">Next</button>
          </Link>
        </form>
        
      </div>
      </Container>
    </div>
  )
}