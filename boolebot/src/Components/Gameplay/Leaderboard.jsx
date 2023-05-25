import React from 'react'
import styles from './Leaderboard.module.css'
export default function Leaderboard({leaderboard}) {

    let leaderboardEl = []; 
    for (const [key, value] of Object.entries(leaderboard)) {

        leaderboardEl.push(<li key={key}>{`${key}: loses: ${value.loses} wins: ${value.wins} `}</li>)
    }
  return (
    <div>
        <h3>Leaderboard</h3>
        <ul className={styles.leaderboard}>
            {leaderboardEl}        
        </ul>
    </div>
  )
}
