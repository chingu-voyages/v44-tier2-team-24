import React, { useState } from 'react';


export default function IconPalette({
  iconPalette,
  botsData,
  updateBotsData,
  iconSelected,
  updateIconSelected, 
}) {

  function onChangeValue(event) {
    updateIconSelected(Number(event.target.value))

    let botsDataCopy = { ...botsData };

    updateBotsData({
      ...botsDataCopy,
      botIcon: iconPalette[Number(event.target.value)].url,
    });
  }

  const iconEl = iconPalette.map((icon, i) => {
    return (
      <label htmlFor={`bot${i}`} key={i} className="iconContainer" onChange={(e) => onChangeValue(e)}>
        <input
          type="radio"
          value={i}
          id={`bot${i}`}
          name="bot"
          readOnly
          checked={iconSelected === i}
          disabled={icon.isSelected}
          
        />
        <img src={icon.url} alt={`bot icon ${i}`} />
      </label>
    );
  });

  return (
    <div style={{ display: "flex", alignItems:"flex-start", gap: "10px", width: "400px" }}>{iconEl}</div>
  );
}
