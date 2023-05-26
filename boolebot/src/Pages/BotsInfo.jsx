import React, { useState } from 'react';
import singleBot from "../assets/bot.png";
import { Link } from 'react-router-dom';

export default function BotsInfo(props) {
  // const [botName, setBotName] = useState('');
  // const [booleanValue, setBooleanValue] = useState('1');
  // const [booleanOperator, setBooleanOperator] = useState('and');
  // const [botSpeed, setBotSpeed] = useState(0);
  // const [botDirection, setBotDirection] = useState('north');
  const addbot = props.addBotToArray;
  const createdBots = props.botsArray;
  // const [createdBots, setCreatedBots] = useState([]);
  
  //Refactoring Form state management
  const [formData, setFormData]= useState({
    botName:"",
    booleanValue:"",
    botSpeed: "",
    botDirection:""
  })

  // Generic change handler
  function handleChange(e){
    const changedField = e.target.name;
    const newValue = e.target.value;
    setFormData((currentData)=>{
      currentData[changedField] = newValue;
      return {...currentData};
    })
  }

  //form event- submit
  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new bot object
    const newBot = {
      name: formData.botName,
      value: formData.booleanValue,
      operator: formData.booleanOperator,
      speed: formData.botSpeed,
      direction: formData.botDirection,
    };
    addbot(newBot);
    // Add the new bot to the createdBots array
    // setCreatedBots((prevCreatedBots) => [...prevCreatedBots, newBot]);

    // Clear the form fields
    // setBotName('');
    // setBooleanValue('1');
    // setBooleanOperator('and');
    // setBotSpeed(0);
    // setBotDirection('north');
  };

  // const handleDelete = (index) => {
  //   setCreatedBots((prevCreatedBots) =>
  //     prevCreatedBots.filter((_, i) => i !== index)
  //   );
  // };

  const [expandedBots, setExpandedBots] = useState([]);

  const toggleBotExpansion = (index) => {
    setExpandedBots((prevExpandedBots) => {
      const newExpandedBots = [...prevExpandedBots];
      newExpandedBots[index] = !newExpandedBots[index];
      return newExpandedBots;
    });
  };


 

  return (
    <>
      <h2>Create Bot</h2>
      <div className="createdBots">
        {createdBots.map((bot, index) => (
          <div className="showBot" key={index}>
            <img src={singleBot} alt="photo of a robot head" />
            <div key={index}>
              <h3 className="title">{bot.name}</h3>
              {expandedBots[index] ? (
                <>
                  <p>Value: {bot.value}</p>
                  <p>Operator: {bot.operator}</p>
                  <p>Speed: {bot.speed}</p>
                  <p>Direction: {bot.direction}</p>
                </>
              ) : null}
            </div>
            <button
              className={`expandButton ${expandedBots[index] ? 'expanded' : ''}`}
              onClick={() => toggleBotExpansion(index)}
            >
              <span className="arrow"></span>
            </button>
            <button>Edit</button>
            <button className="delete" onClick={() => props.deleteBotFromArray(index)}>
              Delete
            </button>
          </div>
        ))}
      </div>
      <div className="test">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label htmlFor="botName">
              Name your bot:
              <input
                type="text"
                id="botName"
                name="botName"
                value={formData.botName}
                onChange={handleChange}
                required
              />
            </label>
            <div></div>
            <label htmlFor="booleanValue">
              Choose a Boolean Value:
              <select
                id="booleanValue"
                name="booleanValue"
                value={formData.booleanValue}
                onChange={handleChange}
                required
              >
                <option value="1">1</option>
                <option value="0">0</option>
              </select>
            </label>
            {/* <label htmlFor="boole_op">
              Choose Boolean Operator:
              <select
                id="boole_op"
                name="boole_op"
                value={booleanOperator}
                onChange={(event) => setBooleanOperator(event.target.value)}
              >
                <option value="and">AND</option>
                <option value="or">OR</option>
                <option value="not">NOT</option>
                <option value="nor">NOR</option>
              </select>
            </label> */}
            <label htmlFor="botSpeed">
              Choose Speed:
              <input
                id="botSpeed"
                type="range"
                min={0}
                max={100}
                name='botSpeed'
                value={formData.botSpeed}
                onChange={handleChange}
                required
              />
            </label>
            <label htmlFor="botDirection">
              Bot Direction:
              <select
                id="botDirection"
                name='botDirection'
                value={formData.botDirection}
                onChange={handleChange}
                required
              >
                <option value="north">NORTH</option>
                <option value="south">SOUTH</option>
                <option value="east">EAST</option>
                <option value="west">WEST</option>
              </select>
            </label>
            <button type="submit">Submit</button>
          </fieldset>
        </form>
       <Link to="/arena"><button >Battle Ground</button></Link> 
      </div>
      
    </>
  );
}