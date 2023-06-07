import React from 'react';

export default function BotRoaster({ botsArr, handleDeleteBot }) {
  const handleDelete = (botName) => {
    handleDeleteBot(botName);
  };

  return (
    <div className="createdBots">
      {botsArr &&
        botsArr.map((bot, index) => (
          <div className={`showBot ${bot.name}`} key={index}>
            <img
              src={bot.botIcon}
              style={{ width: '5em' }}
              alt="photo of a robot head"
            />
            <div key={index}>
              <h3 className="title">{bot.name}</h3>
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
              <button onClick={() => handleDelete(bot.name)}>Delete</button>
            </div>
          </div>
        ))}
    </div>
  );
}
