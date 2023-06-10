import React from 'react'

export default function ArenaSetting({ tileNum, speed, operator }) {
  return (
    <div className="arenaSettings">
      <div className="title">
       <h3>Arena Setting</h3>
      </div>
        <div className="info">
        <p>Gird Size: <strong>{tileNum}x{tileNum}</strong> </p>
        <p>Operator: <strong>{operator}</strong></p>
        <p>Speed: <strong>{4 - (speed / 1000)}s</strong></p>
      </div>
    </div>
  );
}
