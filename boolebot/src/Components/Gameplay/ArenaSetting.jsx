import React from 'react'

export default function ArenaSetting({ tileNum, speed, operator }) {
  return (
    <div>
      <h3>Arena Setting</h3>
      <p>Gird Size: <strong>{tileNum}x{tileNum}</strong> </p>
      <p>Operator: <strong>{operator}</strong></p>
      <p>Speed: <strong>{speed / 1000}s</strong></p>
    </div>
  );
}
