import React, { useState } from 'react';



export default function IconPalette({
  iconPalette,
  botsData,
  updateBotsData,
  iconSelected,
  updateIconSelected, 
}) {
  function handleClick() {
    console.log("Icon Clicked!");
  }

  function onChangeValue(event) {
    updateIconSelected(event.target.value)

    let botsDataCopy = { ...botsData };
    updateBotsData({
      ...botsDataCopy,
      botIcon: iconPalette[Number(event.target.value)].url,
    });

    console.log(event.target.value);
  }

  const iconEl = iconPalette.map((icon, i) => {
    return (
      <div
        onClick={(e) => handleClick(e)}
        onChange={onChangeValue}
        key={i}
        className="iconContainer"
      >
        <input
          type="radio"
          value={i}
          name={`bot${i}`}
          readOnly
          checked={iconSelected == i}
          disabled={icon.isSelected}
        />
        <img src={icon.url} alt={`bot icon ${i}`} />
      </div>
    );
  });

  return (
    <div style={{ display: "flex", gap: "10px", width: "400px" }}>{iconEl}</div>
  );
}
