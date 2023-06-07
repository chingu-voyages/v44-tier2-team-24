import React from 'react'

export default function BotRoaster({botsArr}) {
  return (
    <div className="createdBots">
      {botsArr &&
        botsArr.map((bot, index) => (
          <div className={`showBot ${bot.name}`} key={index}>
            <div className='botIcon_wrapper'>
              <img
                src={bot.botIcon}
                // style={{ width: "100%" }}
                alt="photo of a robot head"
            />
            </div>
            <div key={index} className='botIcon_details'>
              <h3 className="title">{bot.name}</h3>
              <p>Position: {bot.position}</p>
              <p>
                Direction:{` `}
                {bot.direction === 1
                  ? "↑"
                  : bot.direction === 2
                  ? "↓"
                  : bot.direction === 3
                  ? "←"
                  : bot.direction === 4
                  ? "→"
                  : bot.direction === 5
                  ? "↗️"
                  : bot.direction === 6
                  ? "↖️"
                  : bot.direction === 7
                  ? "↘️"
                  : bot.direction === 8
                  ? "↙️"
                  : ""}
              </p>
              <p>Value: {bot.value}</p>
            </div>
          </div>
        ))}
    </div>
  );
}
