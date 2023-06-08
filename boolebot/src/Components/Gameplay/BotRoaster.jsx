import React, { useState } from 'react';

export default function BotRoaster({ botsArr, deleteBotFromArray, currentLocation, iconPalette, updateIconPalette }) {
  const handleDelete = (botName) => {
  
    const iconPaletteCopy = [...iconPalette]
    
    let index = botsArr.findIndex(bot => bot.name === botName)
    let iconPaletteIndex = iconPalette.findIndex( icon => icon.url === botsArr[index].botIcon)
    iconPaletteCopy[iconPaletteIndex].isSelected = false

    updateIconPalette(iconPaletteCopy)
    deleteBotFromArray(botName);
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
    <div className="createdBots">
      {botsArr &&
        botsArr.map((bot, index) => (
          <div className={`showBot ${bot.name}`} key={index}>
            <div className='botIcon_wrapper'>
              <img
                src={bot.botIcon}
                alt="photo of a robot head"
            />
            </div>
            <div key={index} className='botIcon_details'>
              <h3 className="title">{bot.name}</h3>
              {expandedBots[index] && (
                <React.Fragment>
              
              <p>Position: {bot.position}</p>
              <p>
                Direction:{' '}
                {bot.direction === 1
                  ? '↑'
                  : bot.direction === 2
                  ? '↓'
                  : bot.direction === 3
                  ? '←'
                  : bot.direction === 4
                  ? '→'
                  : bot.direction === 5
                  ? '↗️'
                  : bot.direction === 6
                  ? '↖️'
                  : bot.direction === 7
                  ? '↘️'
                  : bot.direction === 8
                  ? '↙️'
                  : ''}
              </p>
              <p>Value: {bot.value}</p>
              </React.Fragment>
              )}
              <div className="botsInfoButtons">
              <button onClick={() => toggleBotExpansion(index)}>
              {expandedBots[index] ? 'Collapse' : 'Expand'}
            </button>
             {currentLocation === '/createBot'? <button onClick={() => handleDelete(bot.name)}>Delete</button> : null }
             </div>
            </div>
          </div>
        ))}
    </div>
  );
}
