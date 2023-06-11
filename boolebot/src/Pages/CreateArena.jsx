import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../Components/Layout/Container"
import sweetAlertMixin from "../Components/SweetAlertConfig";


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
              
            <label htmlFor="speed"><span className="question-space">
              Movement Speed</span><button
                  className="question-button"
                  onClick={(e) => {
                    e.preventDefault();
                    sweetAlertMixin.fire({
                      title: 'Movement Speed',
                      text: 'The lower the number the faster the bot will go! Drag the circle all the way to the right for the fastest speed',
                      confirmButtonText: 'OK'
                    });
                  }}
                >
                  ?
                </button>
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
            </label>
          </div>
          <div>
            <label htmlFor="Arena Size"><span className="question-space">
              Arena Size</span><button
                  className="question-button"
                  onClick={(e) => {
                    e.preventDefault();
                    sweetAlertMixin.fire({
                      title: 'Arena Size',
                      text: 'Some board sizes are disabled according to screensize. The larger the screensize the more board options you will have.',
                      confirmButtonText: 'OK'
                    });
                  }}
                >
                  ?
                </button>
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
              
            </label>
          </div>
          <div>
            <label htmlFor="operator"><span className="question-space">
              Boolean operator</span><button
                  className="question-button"
                  onClick={(e) => {
                    e.preventDefault();
                    sweetAlertMixin.fire({
                      title: 'Boolean Operator',
                      html: `
      
            <section>
            <h4> AND:</h4>
              <p> When both Bot 1 and Bot 2 have a boolean value of 0 (false), the result is 0. This leads to a tie since neither bot wins.</p>
              <p> When Bot 1 has a boolean value of 0 (false) and Bot 2 has a boolean value of 1 (true), the result is 0. Again, this results in a tie.</p>
              <p> Similarly, when Bot 1 has a boolean value of 1 (true) and Bot 2 has a boolean value of 0 (false), the result is 0, leading to a tie.</p>
              <p> When both Bot 1 and Bot 2 have a boolean value of 1 (true), the result is 1. In this case, the first bot to move is considered the winner.</p>
            </section>
            <section>
             <h4>OR:</h4>
              <p> If either Bot 1 or Bot 2 (or both) has a boolean value of 1 (true), the result is 1. In this case, the first bot to move is considered the winner.</p>
              <p> When both Bot 1 and Bot 2 have a boolean value of 0 (false), the result is 0. This leads to a tie.</p>
            </section>
            <section>
             <h4>XOR:</h4>
              <p> When both Bot 1 and Bot 2 have the same boolean value (either both true or both false), the result is 0. This results in a tie.</p>
              <p> If Bot 1 and Bot 2 have different boolean values (one is true and the other is false), the result is 1. In this case, the first bot to move is considered the winner.</p>
            </section>
            <section>
             <h4>NOR: </h4> 
              <p> If both Bot 1 and Bot 2 have a boolean value of 0 (false), the result is 1. In this case, the first bot to move is considered the winner.</p>
              <p> When either Bot 1 or Bot 2 (or both) has a boolean value of 1 (true), the result is 0. This leads to a tie.</p>
            </section>
            <p>
              `,
                      confirmButtonText: 'OK'
                    });
                  }}
                >
                  ?
                </button>
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
      </Container>
    </div>
  )
}