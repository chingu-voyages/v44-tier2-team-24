import React, { useEffect, useState } from 'react'
import '../../SASS/Partials/_leaderBoard.scss'
import { Link, redirect } from "react-router-dom";

export default function Leaderboard(props) {
  const {leaderboard, 
         botsArr, 
         updateBotsArray, 
         setBattleLog, 
         } = props

    const [winningBot, setWinningBot] = useState({})
    const [winningScore, setWinningScore] = useState(null)

    let leaderboardEl = []; 

    for (const [key, value] of Object.entries(leaderboard)) {
  
        leaderboardEl.push(
          <div
            key={key}
            className={
              winningScore && value.wins === winningScore && value.loses === 0
                ? "winning"
                : ""
            }
          >
            <li>
              {`${key}: loses: ${value.loses} wins: ${value.wins} `}
              {winningScore && value.wins === winningScore && value.loses === 0
                ? "🔥"
                : ""}
            </li>
          </div>
        );
    }
    
    useEffect(()=>{
        const winningArr = botsArr.sort(function(a, b){
          return b.wins - a.wins
        })

        const winningBot = winningArr[0]
        
        if(winningBot){
          if(botsArr.length < (Object.keys(leaderboard).length)){
            setWinningScore(winningBot.wins)
          }
        }
    }, [botsArr, leaderboard])
  

  return (
    <div>
      <h3>Leaderboard</h3>
      <ul className="leaderboard">{leaderboardEl}</ul>
    </div>
  );
}
