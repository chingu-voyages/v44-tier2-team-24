import React from 'react'

export default function BattleLog({battleLog}) {

 const battleRecord = battleLog.map((log, i) =>  <li key={i}>{log}</li>)
    
  return (
    <div className="battleLog">
        <h3>BattleLog</h3>
        <ul className="battle_log">
            {battleRecord}
        </ul> 
    </div>
  )
}
