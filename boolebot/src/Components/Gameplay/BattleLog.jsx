import React from 'react'
import styles from './BattleLog.module.css'

export default function BattleLog({battleLog}) {

 const battleRecord = battleLog.map((log, i) =>  <li key={i}>{log}</li>)
    
  return (
    <div>
        <h3>BattleLog</h3>
        <ul className={styles.battle_log}>
            {battleRecord}
        </ul> 
    </div>
  )
}
