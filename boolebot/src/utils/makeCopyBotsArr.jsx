import React from 'react'
import BotClass from '../Components/Gameplay/BotClass';

export default function makeCopyBotsArr(botsArr) {
    const newBotsArr = botsArr.map(
      (bot) =>
        new BotClass(
          bot.position,
          bot.direction,
          bot.name,
          bot.value,
          bot.botIcon,
          bot.wins,
          bot.loses,
        )
    );
    return newBotsArr;
  }
