import React, { useState } from 'react';
import singleBot from "../assets/bot.png";
import { Link } from 'react-router-dom';

export default function BotsInfo() {
  const [botName, setBotName] = useState('');
  const [booleanValue, setBooleanValue] = useState('1');
  const [booleanOperator, setBooleanOperator] = useState('and');
  const [botSpeed, setBotSpeed] = useState(0);
  const [botDirection, setBotDirection] = useState('north');
  const [createdBots, setCreatedBots] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new bot object
    const newBot = {
      name: botName,
      value: booleanValue,
      operator: booleanOperator,
      speed: botSpeed,
      direction: botDirection,
    };

    // Add the new bot to the createdBots array
    setCreatedBots((prevCreatedBots) => [...prevCreatedBots, newBot]);

    // Clear the form fields
    setBotName('');
    setBooleanValue('1');
    setBooleanOperator('and');
    setBotSpeed(0);
    setBotDirection('north');
  };

  const handleDelete = (index) => {
    setCreatedBots((prevCreatedBots) =>
      prevCreatedBots.filter((_, i) => i !== index)
    );
  };

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
            <button className="delete" onClick={() => handleDelete(index)}>
              Delete
            </button>
          </div>
        ))}
      </div>
      <div className="test">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label htmlFor="bot_name">
              Name your bot:
              <input
                type="text"
                id="bot_name"
                name="bot_name"
                value={botName}
                onChange={(event) => setBotName(event.target.value)}
              />
            </label>
            <div></div>
            <label htmlFor="boole_value">
              Choose a Boolean Value:
              <select
                id="boole_value"
                name="boole_value"
                value={booleanValue}
                onChange={(event) => setBooleanValue(event.target.value)}
              >
                <option value="1">1</option>
                <option value="0">0</option>
              </select>
            </label>
            <label htmlFor="boole_op">
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
            </label>
            <label htmlFor="bot_speed">
              Choose Speed:
              <input
                id="bot_speed"
                type="range"
                min={0}
                max={100}
                value={botSpeed}
                onChange={(event) => setBotSpeed(event.target.value)}
              />
            </label>
            <label htmlFor="bot_direction">
              Bot Direction:
              <select
                id="bot_direction"
                value={botDirection}
                onChange={(event) => setBotDirection(event.target.value)}
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