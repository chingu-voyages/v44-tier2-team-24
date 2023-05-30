import React, { useEffect, useState } from 'react'
import styles from './Leaderboard.module.css'
export default function Leaderboard({leaderboard, botsArr}) {


    const [winningBot, setWinningBot] = useState({})
    const [winningScore, setWinningScore] = useState(null)

    let leaderboardEl = []; 

    for (const [key, value] of Object.entries(leaderboard)) {
  
        leaderboardEl.push(
          <div
            key={key}
            className={
              winningScore && value.wins === winningScore && value.loses === 0
                ? styles.winning
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
        <ul className={styles.leaderboard}>
            {leaderboardEl}   
          
        </ul>
    </div>
  )
}
