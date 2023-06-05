import React from 'react'

export default function BotRoaster({botsArr}) {
  return (
    <div className="createdBots">
      {botsArr &&
        botsArr.map((bot, index) => (
          <div className={`showBot ${bot.name}`} key={index}>
            <img
              src={bot.botIcon}
              style={{ width: "5em" }}
              alt="photo of a robot head"
            />
            <div key={index}>
              <h3 className="title">{bot.name}</h3>
              <p>Position: {bot.position}</p>
              <p>
                Direction:{` `}
                {bot.direction === 1
                  ? "Up"
                  : bot.direction === 2
                  ? "Down"
                  : bot.direction === 3
                  ? "Left"
                  : bot.direction === 4
                  ? "Right"
                  : bot.direction === 5
                  ? "NE"
                  : bot.direction === 6
                  ? "NW"
                  : bot.direction === 7
                  ? "SE"
                  : bot.direction === 8
                  ? "SW" :""}
              </p>
              <p>Value: {bot.value}</p>
            </div>
          </div>
        ))}
    </div>
  );
}
